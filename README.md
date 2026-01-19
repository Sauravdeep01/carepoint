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

### 1. Clone the Repository
\`\`\`bash
git clone <your-repo-url>
cd CarePoint
\`\`\`

### 2. Backend Setup

\`\`\`bash
cd Server
npm install
\`\`\`

Create a \`.env\` file in the Server directory:
\`\`\`env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=4000
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key
ADMIN_EMAIL=admin@carepoint.com
ADMIN_PASSWORD=admin123
\`\`\`

### 3. Seed Database with Doctors (Optional)

\`\`\`bash
node seedDoctorsWithImages.js
\`\`\`

This will upload all doctor images to Cloudinary and add 15 doctors to your database.

### 4. Start Backend Server

\`\`\`bash
npm start
# or
node server.js
\`\`\`

Server will run on: \`http://localhost:4000\`

### 5. Frontend Setup

\`\`\`bash
cd ../Client
npm install
npm run dev
\`\`\`

Frontend will run on: \`http://localhost:5173\`

## 🔐 Login Credentials

### Admin Access
- **Email:** \`admin@carepoint.com\`
- **Password:** \`admin123\`

### Doctor Access (After seeding)
- **Email:** \`[doctorname]@carepoint.com\` (e.g., \`richard@carepoint.com\`)
- **Password:** \`doctor123\`

### User Access
- Create a new account via the registration page

## 📡 API Endpoints

### User Routes (\`/api/user\`)
- \`POST /register\` - Register new user
- \`POST /login\` - User login
- \`GET /get-profile\` - Get user profile (Protected)
- \`POST /update-profile\` - Update user profile (Protected)
- \`POST /book-appointment\` - Book appointment (Protected)
- \`GET /appointments\` - Get user appointments (Protected)
- \`POST /cancel-appointment\` - Cancel appointment (Protected)

### Doctor Routes (\`/api/doctor\`)
- \`GET /list\` - Get all doctors
- \`POST /login\` - Doctor login
- \`GET /appointments\` - Get doctor appointments (Protected)
- \`POST /complete-appointment\` - Mark appointment complete (Protected)
- \`POST /cancel-appointment\` - Cancel appointment (Protected)
- \`GET /dashboard\` - Get doctor dashboard data (Protected)
- \`GET /profile\` - Get doctor profile (Protected)
- \`POST /update-profile\` - Update doctor profile (Protected)

### Admin Routes (\`/api/admin\`)
- \`POST /login\` - Admin login
- \`POST /add-doctor\` - Add new doctor (Protected)
- \`POST /all-doctors\` - Get all doctors (Protected)
- \`POST /change-availability\` - Change doctor availability (Protected)
- \`GET /appointments\` - Get all appointments (Protected)
- \`POST /cancel-appointment\` - Cancel appointment (Protected)
- \`GET /dashboard\` - Get admin dashboard data (Protected)

## 🎯 How to Access Admin Panel

### Option 1: Using API Testing Tool (Postman/Thunder Client)

1. **Login as Admin**
   - **Endpoint:** \`POST http://localhost:4000/api/admin/login\`
   - **Body (JSON):**
     \`\`\`json
     {
       "email": "admin@carepoint.com",
       "password": "admin123"
     }
     \`\`\`
   - **Response:** You'll get a token
     \`\`\`json
     {
       "success": true,
       "token": "your_admin_token_here"
     }
     \`\`\`

2. **Add a New Doctor**
   - **Endpoint:** \`POST http://localhost:4000/api/admin/add-doctor\`
   - **Headers:**
     - \`atoken: your_admin_token_here\`
   - **Body (form-data):**
     - \`name\`: Dr. John Doe
     - \`email\`: john@carepoint.com
     - \`password\`: doctor123
     - \`speciality\`: General physician
     - \`degree\`: MBBS
     - \`experience\`: 5 Years
     - \`about\`: Experienced doctor...
     - \`fees\`: 50
     - \`address\`: {"line1": "123 Main St", "line2": "City, Country"}
     - \`image\`: [Upload doctor image file]

3. **View All Doctors**
   - **Endpoint:** \`POST http://localhost:4000/api/admin/all-doctors\`
   - **Headers:**
     - \`atoken: your_admin_token_here\`

4. **View Dashboard**
   - **Endpoint:** \`GET http://localhost:4000/api/admin/dashboard\`
   - **Headers:**
     - \`atoken: your_admin_token_here\`

5. **View All Appointments**
   - **Endpoint:** \`GET http://localhost:4000/api/admin/appointments\`
   - **Headers:**
     - \`atoken: your_admin_token_here\`

### Option 2: Using Frontend (Login Page)

1. Go to \`http://localhost:5173/login\`
2. Click on "**Admin Login**" link at the bottom
3. Enter:
   - **Email:** \`admin@carepoint.com\`
   - **Password:** \`admin123\`
4. You'll be logged in as admin

**Note:** The frontend currently doesn't have a dedicated admin panel UI. Admin operations are available through API endpoints. You can use Postman, Thunder Client, or any API testing tool to access admin features.

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
