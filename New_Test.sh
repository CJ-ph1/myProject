#!/bin/bash

while true; do
	read -p "Enter Username Here: " input
	storage=("$input")
	
	if [ "$input" = "Exit" ]; then
		break
	fi
	while true; do
		read -p "Verify Your Name or Exit: " verify
		if [ "$verify" = "${storage[@]}" ]; then
			echo "Hello $verify"
			break
		elif [ "$verify" = "Exit" ]; then
			break
		else	
			echo "Error who are you?"
			echo "Halaa nanditoo parin siyaa ohh"
			echo "Hello Hello"
			echo "Shibal"
			echo "Folder 1"


			echo "Ito Bago"

		fi
	done
done
