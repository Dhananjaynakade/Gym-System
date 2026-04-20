# Gym Management System - Project Documentation

This document provides a comprehensive overview of the Gym Management System to aid in future development and understanding of the project.

## 🚀 Project Overview
The **Gym Management System** is a web-based application designed to manage gym operations efficiently. It features three distinct user roles: Admin, Staff, and Customer, each with specific functionalities.

---

## 🛠 Technology Stack
- **Backend:** PHP (Core PHP)
- **Database:** MySQL
- **Frontend:** HTML5, CSS3, JavaScript
- **Styling Framework:** Bootstrap (Matrix Admin Template)
- **Icons:** Font Awesome
- **Authentication:** PHP Session-based
- **Password Hashing:** MD5 (Note: See Future Improvements)

---

## 📂 Project Structure
```text
Gym-System/
├── admin/              # Admin dashboard and management features
│   ├── actions/        # PHP logic for admin actions (delete, update, etc.)
│   ├── includes/       # Reusable components (header, sidebar, footer)
│   └── ...             # Management pages (members, staff, equipment, etc.)
├── customer/           # Customer dashboard and personal features
│   ├── pages/          # Customer specific pages (To-Do, Reports, etc.)
│   └── ...
├── staff/              # Staff dashboard and operational features
│   ├── staff-pages/    # Staff specific pages (Attendance, Member Entry, etc.)
│   └── ...
├── css/                # Global stylesheets
├── js/                 # Global JavaScript files
├── img/                # Project images and assets
├── DATABASE FILE/      # Contains the .sql database export
├── dbcon.php           # Database connection configuration
├── index.php           # Main login landing page
├── session.php         # Session management script
└── logout.php          # Session termination script
```

---

## 👥 User Roles & Features

### 1. Administrator
- **Dashboard:** Overview of total members, staff, equipment, and income.
- **Member Management:** Add, edit, remove members, and track membership status.
- **Staff Management:** Manage gym employees (Add/Edit/Remove).
- **Equipment Management:** Track gym equipment inventory.
- **Attendance:** View and manage attendance records.
- **Reports:** Generate reports on members, services, and progress.
- **Announcements:** Post and manage gym-wide announcements.
- **Payments:** View income reports and manage user payments.

### 2. Staff
- **Operational Management:** Add members and equipment.
- **Attendance:** Mark and track member attendance.
- **Payment Processing:** Record member payments.
- **Search:** Search for members and equipment.
- **Dashboard:** Limited view of gym statistics.

### 3. Customer
- **Dashboard:** Personal statistics and announcements.
- **To-Do List:** Manage personal workout tasks.
- **Reminders:** View gym reminders.
- **Reports:** View personal progress and payment history.

---

## 🗄 Database Configuration
- **Database Name:** `gymnsb`
- **Tables:** `admin`, `members`, `staff`, `equipment`, `attendance`, `todo`, `announcement`, etc.
- **Connection File:** `dbcon.php`

> [!NOTE]
> To set up the database, import the `gymnsb.sql` file located in the `DATABASE FILE/` directory into your MySQL server.

---

## 🔮 Future Development & Improvements

### 🔒 Security Enhancements
- **Password Hashing:** Upgrade from `MD5` to `password_hash()` (Bcrypt) for better security.
- **Prepared Statements:** Migrate all MySQL queries to use Prepared Statements to prevent SQL Injection.
- **Input Validation:** Implement stricter server-side validation for all forms.

### ✨ Feature Additions
- **Workout Plans:** Allow Admin/Staff to assign specific workout plans to customers.
- **Diet Tracking:** Add a module for customers to track their nutrition and diets.
- **Online Payment Integration:** Integrate payment gateways like PayPal, Stripe, or Razorpay for automated membership renewals.
- **Email Notifications:** Automate reminders for membership expiry via email.
- **Mobile App:** Develop a mobile companion app for customers to check-in and view their progress.

### 🎨 UI/UX Improvements
- **Responsive Design:** Improve mobile responsiveness for better accessibility on smartphones.
- **Dark Mode:** Add a theme toggle for user preference.
- **Interactive Charts:** Use libraries like Chart.js for more dynamic and visual reporting.

---

## 📝 How to Run
1. Move the project folder to your local server directory (e.g., `htdocs` for XAMPP).
2. Start Apache and MySQL.
3. Import the database from `DATABASE FILE/gymnsb.sql` into phpMyAdmin.
4. Access the project via `http://localhost/Gym-System/` in your browser.
