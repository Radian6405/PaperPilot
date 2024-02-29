# PaperPilot
PaperPilot is a PDF organiser designed to manage all your important files in one place. Supports *Bookmarks**, *Favorites** and Folders to better oraganise files and access them on any device.

> *these features are not implemented yet, read the [Status](## Status) section.

## How it works

1. Start by logging in
![image](https://github.com/Radian6405/PaperPilot/assets/99524343/3fe188a6-b084-4856-9efe-e72b501baf5e)

2. Then upload your files 
![image](https://github.com/Radian6405/PaperPilot/assets/99524343/13089872-e66f-4ef0-8ef2-54a57145984c)

3. You can view your files now
![image](https://github.com/Radian6405/PaperPilot/assets/99524343/8c0cb315-7f84-4604-ac66-33b99afe5d30)
![image](https://github.com/Radian6405/PaperPilot/assets/99524343/85aaadfc-b67f-4f6e-abd4-b014be92ad5f)

## Technologies used
PaperPilot uses 
- [React](https://react.dev/) & [Node](https://nodejs.org/en) for frontend
- [Webpack](https://webpack.js.org/) for bundling
- [Babel](https://babeljs.io/) for compiling
- [Django](https://www.djangoproject.com/)

## Setup
If you wanna this project in your machine follow these instructions:
1. Install [Python 3.12.0 and above](https://www.python.org/downloads/) and [Django](https://www.geeksforgeeks.org/django-introduction-and-installation/) for backend.
2. Install [NodeJS](https://nodejs.org/en/download) to run react and others.
3. run ```npm i``` to install all the dependencies for frontend.
4. In your terminal cd into root directory and ```paper_pilot/frontend``` and run ```npm run dev``` to the start devolopment server.
5. In a different terminal cd into root directory and `paper_pilot`, run ```python manage.py makemigrations``` and ```python manage.py migrate``` to set up all your migrations.
6. run ```python manage.py runserver``` to start running your backend server. 

## Status
Currently I am still working on this projects and have the following features to add in the future
- Folders (check the `folder-system` branch to see the progress)
- Bookmarks for each pdf
- Favorite pdfs
- Dark and light theme
- More responsive navbar
- support for other files (such as ePUB)
