# LifeDrop — Blood Donor & Patient Registry Platform

LifeDrop is a full-stack emergency blood donor platform with a cinematic blood-red medical UI for rapid donor discovery and urgent request coordination.

## Tech Stack
- **Frontend**: React + Tailwind CSS + Framer Motion + React Router + Axios
- **Backend**: Node.js + Express + MVC
- **Database**: MongoDB (Mongoose)
- **Auth**: JWT + bcrypt
- **OTP Ready**: Twilio/Firebase extension points

## Folder Structure
```
client/
server/
```

## Features Implemented
- Landing page with urgent blood-red hero, CTA, and stat cards
- Login/Signup with JWT token persistence
- Donor registration workflow
- Donor search filters (blood group/city/state/availability)
- Emergency request posting
- User and admin dashboard placeholders ready for analytics/map integrations
- Secure REST APIs with protected routes and role-ready middleware
- MongoDB models: Users, Donors, Requests, Notifications, Admins

## Setup
### 1) Backend
```bash
cd server
npm install
cp .env.example .env
npm run dev
```

### 2) Frontend
```bash
cd client
npm install
cp .env.example .env
npm run dev
```

## Environment Variables
### server/.env
- `PORT=5000`
- `MONGODB_URI=mongodb://127.0.0.1:27017/lifedrop`
- `JWT_SECRET=change_this_secret`
- `TWILIO_ACCOUNT_SID=...`
- `TWILIO_AUTH_TOKEN=...`
- `TWILIO_PHONE_NUMBER=...`

### client/.env
- `VITE_API_URL=http://localhost:5000/api`

## API Snapshot
- `POST /api/auth/signup`
- `POST /api/auth/login`
- `GET /api/donors`
- `POST /api/donors` (protected)
- `GET /api/requests` (protected)
- `POST /api/requests` (protected)

## Deployment Guide
- Build client: `npm run build` in `client/`
- Deploy frontend on Vercel/Netlify (static build output)
- Deploy backend on Render/Railway/Fly.io
- Use MongoDB Atlas for production
- Set secure production env vars and CORS allowlist

## Next Recommended Upgrades
- Real OTP flow + contact reveal approval
- WebSocket live emergency ticker
- Google Maps nearby donor clustering
- Multi-language localization
- PWA + offline fallback
- AI triage/chatbot assistant
