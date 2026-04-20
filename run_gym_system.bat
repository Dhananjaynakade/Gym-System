@echo off
echo Starting Gym Management System...

:: Start MySQL
echo Starting MySQL...
start "" /B "C:\xampp\mysql\bin\mysqld.exe"

:: Start Apache
echo Starting Apache Server...
start "" /B "C:\xampp\apache\bin\httpd.exe"

:: Wait for a moment
timeout /t 2 /nobreak > nul

:: Open Browser
echo Opening project in browser...
start http://localhost/Gym-System/

echo Project is running!
pause
