# PaperPilot
PaperPilot is a PDF organiser designed to manage all your important files in one place. Supports *Bookmarks**, *Favorites** and Folders to better oraganise files and access them on any device.

> *these features are not implemented yet, read the [Status](#Status) section.

## How it works

1. Start by logging in or Register 

![image](https://github.com/Radian6405/PaperPilot/assets/99524343/57c56a4d-5eb3-461c-a6fd-2afa9f1fb811)

2. Then upload your files 

![image](https://github.com/Radian6405/PaperPilot/assets/99524343/760e4d56-d603-4499-bdfd-19fcd6797a9a)

3. You can view your files now

![image](https://github.com/Radian6405/PaperPilot/assets/99524343/8c0cb315-7f84-4604-ac66-33b99afe5d30)
![image](https://github.com/Radian6405/PaperPilot/assets/99524343/85aaadfc-b67f-4f6e-abd4-b014be92ad5f)

## Technologies used
- [React](https://react.dev/) & [Node](https://nodejs.org/en) for frontend
- [Webpack](https://webpack.js.org/) for bundling
- [Babel](https://babeljs.io/) for compiling
- [Django](https://www.djangoproject.com/)

## Setup
If you want to run this project in your local machine follow these instructions:
1. Install [Python 3.12.0 and above](https://www.python.org/downloads/) and [Django](https://www.geeksforgeeks.org/django-introduction-and-installation/) for backend.
2. Install [NodeJS](https://nodejs.org/en/download) to run react and others.
3. run ```npm i``` to install all the dependencies for frontend.
4. In your terminal cd into root directory and ```paper_pilot/frontend``` and run ```npm run dev``` to the start devolopment server.
5. In a different terminal cd into root directory and `paper_pilot`, run ```python manage.py makemigrations``` and ```python manage.py migrate``` to set up all your migrations.
6. run ```python manage.py runserver``` to start running your backend server. 

## Status
This project is still a **work in progress** with the following features in mind
- Bookmarks for each pdf
- Favorite pdfs
- Dark and light theme
- More responsive navbar
- support for other files (such as ePUB)
