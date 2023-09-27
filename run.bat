@echo off
start "Server Process" cmd /k "cd ./server && npm start"

ping -n 6 127.0.0.1 > nul

start "Client Process" cmd /k "cd ./client && npm start"
