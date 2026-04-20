# Gym Management System - Quick Start Script (XAMPP)

echo "Starting Gym Management System..."

# 1. Start MySQL
echo "Starting MySQL..."
Start-Process "C:\xampp\mysql\bin\mysqld.exe" -WindowStyle Hidden

# 2. Start Apache
echo "Starting Apache Server..."
Start-Process "C:\xampp\apache\bin\httpd.exe" -WindowStyle Hidden

# 3. Wait for services to warm up
Start-Sleep -Seconds 2

# 4. Open in Browser
echo "Opening project in browser..."
Start-Process "http://localhost/Gym-System/"

echo "All set! Your Gym Management System is now running."
