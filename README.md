# CarePoint - Doctor Appointment Booking System

A full-stack web application for booking doctor appointments with user authentication, profile management, and admin panel.

## 🚀 Features

### For Patients (Users)
- ✅ User Registration & Login
- ✅ Browse Doctors by Speciality
- ✅ View Doctor Profiles & Details
- ✅ Book Appointments with Time Slots
- ✅ View & Manage Appointments
- ✅ Cancel Appointments
- ✅ Update Profile (Name, Phone, Address, Gender, DOB, Profile Picture)

### For Doctors
- ✅ Doctor Login
- ✅ View Appointments
- ✅ Manage Availability
- ✅ Complete/Cancel Appointments
- ✅ Dashboard with Statistics

### For Admin
- ✅ Admin Login
- ✅ Add New Doctors (with image upload)
- ✅ View All Doctors
- ✅ View All Appointments
- ✅ View All Users
- ✅ Cancel Appointments
- ✅ Dashboard with Statistics

## 📋 Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- Tailwind CSS
- React Toastify

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- Bcrypt (Password Hashing)
- Cloudinary (Image Storage)
- Multer (File Upload)

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas Account
- Cloudinary Account



## 📁 Project Structure

\`\`\`
CarePoint/
├── Client/                 # Frontend React App
│   ├── src/
│   │   ├── Components/    # Reusable components
│   │   ├── Context/       # React Context (AppContext)
│   │   ├── Pages/         # Page components
│   │   └── assets/        # Images and static files
│   └── package.json
│
├── Server/                # Backend Node.js App
│   ├── config/           # Database & Cloudinary config
│   ├── controllers/      # Route controllers
│   ├── middlewares/      # Auth & file upload middlewares
│   ├── models/           # Mongoose models
│   ├── routes/           # API routes
│   ├── .env              # Environment variables
│   ├── server.js         # Entry point
│   └── package.json
│
└── README.md
\`\`\`

## 🗄️ Database Models

### User Model
- name, email, password (hashed)
- image, address, gender, dob, phone

### Doctor Model
- name, email, password (hashed)
- image, speciality, degree, experience, about
- fees, address, available, slots_booked

### Appointment Model
- userId, docId
- slotDate, slotTime
- userData, docData
- amount, cancelled, payment, isCompleted

## 🔒 Security Features

- ✅ Password hashing with bcrypt
- ✅ JWT token authentication
- ✅ Protected routes with middleware
- ✅ Email validation
- ✅ Password strength validation
- ✅ Separate auth for User, Doctor, and Admin

## 🌐 Deployment

### Backend (Render/Railway/Heroku)
1. Push code to GitHub
2. Connect repository to hosting platform
3. Add environment variables
4. Deploy

### Frontend (Vercel/Netlify)
1. Build the project: \`npm run build\`
2. Deploy the \`dist\` folder
3. Update backend URL in \`AppContext.jsx\`

## 📝 Available Doctors (After Seeding)

1. Dr. Richard James - General physician
2. Dr. Emily Larson - Gynecologist
3. Dr. Sarah Patel - Dermatologist
4. Dr. Christopher Lee - Pediatricians
5. Dr. Jennifer Garcia - Neurologist
6. Dr. Andrew Williams - Neurologist
7. Dr. Christopher Davis - General physician
8. Dr. Timothy White - Gynecologist
9. Dr. Ava Mitchell - Dermatologist
10. Dr. Jeffrey King - Pediatricians
11. Dr. Zoe Kelly - Gastroenterologist
12. Dr. Patrick Harris - Neurologist
13. Dr. Chloe Evans - General physician
14. Dr. Ryan Martinez - Gynecologist
15. Dr. Amelia Hill - Dermatologist

## 🐛 Troubleshooting

### Images Not Loading
- Check Cloudinary credentials in \`.env\`
- Run \`node seedDoctorsWithImages.js\` to re-upload images

### Database Connection Error
- Verify MongoDB URI in \`.env\`
- Check network access in MongoDB Atlas

### Admin Login Not Working
- Ensure \`ADMIN_EMAIL\` and \`ADMIN_PASSWORD\` are set in \`.env\`
- Restart the server after updating \`.env\`

## 📧 Support

For issues or questions, please contact the development team.

## 📄 License

This project is licensed under the MIT License.

---

**Developed with ❤️ for CarePoint**
