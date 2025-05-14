
# Wafid Medical Appointment Booking Portal

This project allows users from Pakistan to book Wafid (formerly GAMCA) medical appointments for GCC countries like Saudi Arabia, UAE, Qatar, etc.

## 🚀 Features

- Responsive and user-friendly front-end (HTML + Tailwind CSS)
- Backend powered by Node.js and Express
- Stores appointment data in MongoDB
- Sends confirmation email using Gmail SMTP
- Easy deployment using Render and MongoDB Atlas

## 📁 Folder Structure

```
project/
├── index.html          # Frontend form
├── form.js             # Handles form submission and connects to API
├── server.js           # Express backend server
├── .env.example        # Template for environment variables
├── package.json        # Node dependencies
```

## 🔧 Setup Instructions

### 1. Clone the repo & install dependencies

```bash
git clone https://github.com/your-username/wafid-booking.git
cd wafid-booking
npm install
```

### 2. Configure Environment

Create a `.env` file and add your credentials:

```
MONGO_URI=your_mongodb_connection_string
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_gmail_app_password
```

> Use Gmail App Passwords if 2-Step Verification is enabled.

### 3. Run the App Locally

```bash
node server.js
```

### 4. Deploy

- Deploy the `server.js` backend to [Render](https://render.com)
- Upload `index.html` and `form.js` to GitHub Pages / Netlify / Vercel

## ✨ Live Demo

Coming Soon...

## 🛡️ License

MIT
