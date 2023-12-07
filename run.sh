#!/bin/bash

# Server Process
gnome-terminal --title="Server Process" --working-directory=./server -- npm start &

# Wait for a few seconds
sleep 6

# Authentication Server Process
gnome-terminal --title="Authentication Server Process" --working-directory=./server -- npm run auth_start &

# Wait for a few seconds
sleep 6

# Client Process
gnome-terminal --title="Client Process" --working-directory=./client -- npm start &
