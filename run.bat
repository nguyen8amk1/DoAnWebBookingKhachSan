@echo off
start "Server Process" cmd /k "cd ./server && npm start"

ping -n 6 bookinguit.click > nul

start "Authentication Server Process" cmd /k "cd ./server && npm run auth_start"

ping -n 6 bookinguit.click > nul

start "Client Process" cmd /k "cd ./client && npm start"

