const mongoose = require('mongoose');

const servingSizeSchema = new mongoose.Schema(
  {
    unit: {
      type: String,
      required: true,
      trim: true,
    },
    weightInGrams: {
      type: Number,
      required: true,
      min: 0.1,
    },
  },
  { _id: false }
);

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    caloriesPer100g: {
      type: Number,
      required: true,
      min: 1,
    },
    servingSizes: {
      type: [servingSizeSchema],
      default: [],
    },
    imageUrl: {
      type: String,
      trim: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      default: null,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (_doc, ret) => {
        delete ret.__v;
        return ret;
      },
    },
  }
);

productSchema.index({ name: 1 });
productSchema.index({ createdBy: 1 });

productSchema.statics.findGlobalAndUserProducts = function (userId, search = '') {
  const filter = {
    $or: [{ createdBy: null }],
  };

  if (userId) {
    filter.$or.push({ createdBy: userId });
  }

  if (search && search.trim()) {
    const escaped = search.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    filter.name = { $regex: escaped, $options: 'i' };
  }

  return this.find(filter).sort({ name: 1 });
};

productSchema.statics.calculateCalories = function (quantity, weightInGrams, caloriesPer100g) {
  const qty = Number(quantity);
  const weight = Number(weightInGrams);
  const calPer100 = Number(caloriesPer100g);
  const raw = (qty * weight * calPer100) / 100;

  if (!Number.isFinite(raw) || raw < 0) {
    throw new Error('Cannot calculate calories — check calories per 100g and unit weight');
  }

  return Math.round(raw);
};

module.exports = mongoose.model('Product', productSchema);
