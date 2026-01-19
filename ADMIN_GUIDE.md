# Admin Access Guide - CarePoint

## 🔐 Understanding Different Login Types

### 1. **Patient/User Login** �
- **Who:** Regular users who want to book appointments
- **Access:** Login page → "Create Account" or "Login"
- **Features:** Browse doctors, book appointments, manage profile
- **After Login:** Stays on main website (Home, Doctors, Appointments, Profile)

### 2. **Doctor Login** �‍⚕️
- **Who:** Doctors who are registered in the system
- **Access:** Login page → Click "Admin Login" → Click "Doctor Login"
- **Credentials:** `[doctorname]@carepoint.com` / `doctor123`
- **Features:** View appointments, manage availability, dashboard
- **After Login:** Currently redirects to main website (needs separate doctor panel)

### 3. **Admin Login** �
- **Who:** System administrator
- **Access:** Login page → Click "Admin Login"
- **Credentials:** `admin@carepoint.com` / `admin123`
- **Features:** Add doctors, manage all appointments, view all users, dashboard
- **After Login:** Currently redirects to main website (needs separate admin panel)

---

## ⚠️ CURRENT STATUS

### What's Working ✅
- ✅ Backend APIs for Admin are **100% functional**
- ✅ Admin can login and get authentication token
- ✅ All admin operations work via API

### What's Missing ❌
- ❌ **Dedicated Admin Panel UI** (Frontend interface for admin)
- ❌ **Dedicated Doctor Panel UI** (Frontend interface for doctors)

**Current Behavior:** When you login as Admin or Doctor, you're redirected to the main website homepage. This is because there's no separate admin/doctor panel UI built yet.

---

## 🎯 SOLUTION: How to Use Admin Features NOW

Since the Admin Panel UI is not built, you must use **API testing tools** to access admin features.

### 🚀 Quick Start with Postman

#### Step 1: Install Postman
Download from: https://www.postman.com/downloads/

#### Step 2: Login as Admin

1. Open Postman
2. Create new request
3. Set to **POST**
4. URL: `http://localhost:4000/api/admin/login`
5. Go to **Body** → **raw** → **JSON**
6. Paste:
```json
{
  "email": "admin@carepoint.com",
  "password": "admin123"
}
```
7. Click **Send**
8. **Copy the token** from response

#### Step 3: Use Admin Features

For all requests below, add this header:
- **Key:** `atoken`
- **Value:** `[paste your token here]`

---

## 📋 Admin Operations

### 1️⃣ View Dashboard
**Shows:** Total doctors, patients, appointments, latest 5 appointments

- **Method:** GET
- **URL:** `http://localhost:4000/api/admin/dashboard`
- **Headers:** `atoken: your_token`

**Response Example:**
```json
{
  "success": true,
  "dashData": {
    "doctors": 15,
    "appointments": 5,
    "patients": 3,
    "latestAppointments": [...]
  }
}
```

---

### 2️⃣ View All Doctors
**Shows:** List of all registered doctors

- **Method:** POST
- **URL:** `http://localhost:4000/api/admin/all-doctors`
- **Headers:** `atoken: your_token`

---

### 3️⃣ Add New Doctor
**Adds:** A new doctor to the system with image upload

- **Method:** POST
- **URL:** `http://localhost:4000/api/admin/add-doctor`
- **Headers:** `atoken: your_token`
- **Body:** form-data (not JSON!)

**Required Fields:**
| Field | Example |
|-------|---------|
| name | Dr. John Smith |
| email | johnsmith@carepoint.com |
| password | doctor123 |
| speciality | General physician |
| degree | MBBS |
| experience | 5 Years |
| about | Experienced in treating... |
| fees | 50 |
| address | {"line1": "123 Main St", "line2": "New York, USA"} |
| image | [Upload image file] |

**How to in Postman:**
1. Body → **form-data**
2. Add each field as **Text** (except image)
3. For `image`: Change type to **File** and upload doctor photo
4. Send

---

### 4️⃣ View All Appointments
**Shows:** Every appointment in the system

- **Method:** GET
- **URL:** `http://localhost:4000/api/admin/appointments`
- **Headers:** `atoken: your_token`

---

### 5️⃣ Cancel Any Appointment
**Cancels:** Any appointment by ID

- **Method:** POST
- **URL:** `http://localhost:4000/api/admin/cancel-appointment`
- **Headers:** `atoken: your_token`
- **Body (JSON):**
```json
{
  "appointmentId": "679abc123def456..."
}
```

---

### 6️⃣ Change Doctor Availability
**Toggles:** Doctor's availability status (available/unavailable)

- **Method:** POST
- **URL:** `http://localhost:4000/api/admin/change-availability`
- **Headers:** `atoken: your_token`
- **Body (JSON):**
```json
{
  "docId": "679abc123def456..."
}
```

---

## � Typical Admin Workflow

### Scenario: Adding a New Doctor

1. **Login as Admin** (get token)
2. **Prepare doctor details** (name, email, photo, etc.)
3. **Call add-doctor API** with all details
4. **Verify** by calling all-doctors API
5. **Doctor can now login** with the email/password you set

### Scenario: Managing Appointments

1. **Login as Admin** (get token)
2. **View dashboard** to see statistics
3. **View all appointments** to see details
4. **Cancel problematic appointments** if needed

---

## 🎨 FUTURE: Admin Panel UI (Not Built Yet)

**What it should look like:**

```
After Admin Login → Redirect to /admin/dashboard

Admin Panel Layout:
┌─────────────────────────────────────┐
│  CarePoint Admin Panel         👑   │
├─────────────────────────────────────┤
│ Sidebar:                            │
│  📊 Dashboard                       │
│  👨‍⚕️ Doctors                         │
│  📅 Appointments                    │
│  👥 Users                           │
│  ➕ Add Doctor                      │
│  🚪 Logout                          │
├─────────────────────────────────────┤
│ Main Content Area:                  │
│  [Shows selected section]           │
└─────────────────────────────────────┘
```

**To build this, you would need:**
- Separate React components for admin panel
- Protected admin routes
- Admin dashboard UI
- Doctor management UI
- Appointment management UI

**This is a separate project** and not currently implemented.

---

## 🎯 Summary

| Feature | Status | How to Access |
|---------|--------|---------------|
| Admin Backend APIs | ✅ Working | Postman/API tools |
| Admin Login | ✅ Working | Login page → Admin Login |
| Admin Panel UI | ❌ Not Built | Use Postman instead |
| Doctor Backend APIs | ✅ Working | Postman/API tools |
| Doctor Panel UI | ❌ Not Built | Use Postman instead |
| User Features | ✅ Working | Website UI |

---

## 🛠️ For Developers

If you want to build the Admin Panel UI:

1. Create new folder: `Client/src/Admin/`
2. Create components:
   - `AdminDashboard.jsx`
   - `DoctorsList.jsx`
   - `AddDoctor.jsx`
   - `AppointmentsList.jsx`
3. Add admin routes in `App.jsx`
4. Protect routes with admin auth check
5. Style with Tailwind CSS

**Estimated time:** 4-6 hours for basic admin panel

---

## 📞 Need Help?

**Current Setup:**
- Backend: http://localhost:4000 ✅
- Frontend: http://localhost:5173 ✅
- Admin Email: admin@carepoint.com
- Admin Password: admin123

**For Admin Operations:** Use Postman with the endpoints above

**For User Operations:** Use the website directly
