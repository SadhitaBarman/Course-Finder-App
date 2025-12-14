# Course Finder (React App)

This is a simple **Course Finder** web application built using **React**, **Vite**, and **Tailwind CSS**.

The goal of this project is to show basic React skills like component structure, state handling, filtering data, using a public API, and deploying a project live.

---

## What does this app do?

* Shows a list of courses
* Allows users to search courses by **name** or **category**
* Fetches and displays a random motivational quote from a public API
* Works well on both **desktop and mobile screens**

---

## Tech Used

* React (with Vite)
* Tailwind CSS
* JavaScript
* Public API (Quotable API)
* Vercel (for deployment)

---

## Project Structure

```
course-finder/
├── src/
│   ├── components/
│   │   ├── SearchBar.jsx      # Search input component
│   │   ├── CourseList.jsx     # Displays list of courses
│   │   ├── CourseCard.jsx     # Single course card
│   │   └── QuoteBox.jsx       # API quote component
│   ├── data/
│   │   └── courses.js         # Course data
│   ├── App.jsx                # Main app logic
│   └── index.css              # Tailwind setup
├── index.html
├── package.json
└── README.md
```

---

## How to Run the Project Locally

1. Clone the repository

```bash
git clone <your-repo-link>
```

2. Go into the project folder

```bash
cd course-finder
```

3. Install dependencies

```bash
npm install
```

4. Start the development server

```bash
npm run dev
```

The app will run on `http://localhost:5173`

---

## Deployment

The project is deployed using **Vercel**.

Steps used:

* Pushed the code to GitHub
* Imported the repository into Vercel
* Selected Vite framework
* Built and deployed the app

---

## Why this project?

This project demonstrates:

* Basic React concepts
* Clean component structure
* State management using hooks
* API fetching using `useEffect`
* Responsive UI using Tailwind CSS
* Ability to deploy a React app

---

## Live Demo
(https://vercel.com/sadhitabarmans-projects/course-finder-app-zr1q)

---

## Author

Built by **Sadhita Barman**
