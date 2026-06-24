# Auth + Users — Manual Integration Checklist (Developer A, Day 7)

## Prerequisites
- MongoDB running locally
- Backend `.env` configured (`MONGO_URI`, `JWT_SECRET`, admin seed vars)
- From `backend/`: `npm run seed:admin` then `npm run dev`
- From `frontend/calorie-frontend/`: `npm start`

## 1. Register
- [ ] Open `/register`, submit valid name/email/password
- [ ] Expect: redirect to `/dashboard`, success toast, token in localStorage
- [ ] Try duplicate email → expect 409 toast/error

## 2. Login / Logout
- [ ] Logout from navbar
- [ ] Open `/login`, submit valid credentials
- [ ] Expect: redirect to `/dashboard`, JWT stored
- [ ] Wrong password → 401 error toast, stay on login
- [ ] Visit `/dashboard` while logged out → redirect to `/login?returnUrl=...`

## 3. Guards
- [ ] Logged-in user visiting `/login` or `/register` → redirect to `/dashboard`
- [ ] Non-admin visiting `/admin` → redirect to `/dashboard` + permission toast

## 4. Profile
- [ ] Open `/profile`, update name + calorie goal → save succeeds
- [ ] Refresh page → updated values persist
- [ ] Upload profile image (JPEG/PNG/WebP ≤ 2MB) → image appears
- [ ] Upload invalid file type → error toast

## 5. Interceptor / JWT
- [ ] Authenticated API calls include `Authorization: Bearer <token>` (Network tab)
- [ ] Clear token manually and call protected route → 401 toast + redirect to login

## 6. Admin user management (admin account)
- [ ] Login as admin
- [ ] `/admin` loads (AdminGuard passes)
- [ ] User list shows all users (no password field)
- [ ] Change a regular user role to admin → succeeds
- [ ] Delete a regular user → succeeds
- [ ] Admin cannot delete own account → error message

## 7. Automated tests (CI/local)
- [ ] `cd backend && npm test` — all green
- [ ] `cd frontend/calorie-frontend && npm test -- --watch=false --browsers=ChromeHeadless` — all green
