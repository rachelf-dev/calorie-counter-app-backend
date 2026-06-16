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
      min: 0,
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
      min: 0,
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
    filter.name = { $regex: search.trim(), $options: 'i' };
  }

  return this.find(filter).sort({ name: 1 });
};

productSchema.statics.calculateCalories = function (quantity, weightInGrams, caloriesPer100g) {
  return (quantity * weightInGrams * caloriesPer100g) / 100;
};

module.exports = mongoose.model('Product', productSchema);
