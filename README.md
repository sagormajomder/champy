# Champy

Champy is a dynamic contest platform designed to foster competition and skill development. It offers a user-friendly interface for participants to join various contests, track their progress on global leaderboards, and engage with a community of like-minded individuals. Built with modern web technologies, Champy ensures a seamless and responsive experience for all users.

## Table of Contents

- [Features](#features)
- [Technology Used](#technology-used)
- [Run it Locally](#run-it-locally)
- [Live URL](#live-url)
- [Project Dependencies](#project-dependencies)
- [Connect With Me](#connect-with-me)

## Features

- **User Authentication**: Secure login and registration using Firebase Auth.
- **Browse Contests**: View a comprehensive list of available contests with tags and descriptions.
- **Contest Details**: Access in-depth information about rules, deadlines, and prizes for each contest.
- **Global Leaderboard**: Real-time ranking system to showcase top performers.
- **Interactive Dashboard**: Personalized user area to manage profile and track activity.
- **Easy Contest Submission**: Streamlined forms for submitting contest entries.
- **Visual Analytics**: Data visualization using Recharts to display statistics.
- **Toast Notifications**: Instant feedback on actions using React Hot Toast.
- **Dynamic Animations**: Smooth and engaging UI transitions powered by Framer Motion and Lottie.
- **Responsive Design**: Fully optimized layout for seamless use on Mobile, Tablet, and Desktop.
- **Efficient Data Fetching**: Fast and reactive user experience with TanStack React Query.
- **Modern UI Components**: Polished and consistent look using DaisyUI and Tailwind CSS.
- **Date Selection**: Integrated calendar tools for picking dates (React Datepicker).
- **Form Validation**: Robust client-side validation using React Hook Form.

## Technology Used

- **Frontend**: JavaScript, React.js,
- **Backend**: Node.js, Express.js
- **Authentication**: Firebase Authentication
- **Database**: Mongodb
- **Styling**: Tailwind CSS, DaisyUI
- **Deployment**: Firebase (Frontend), Vercel (backend)

## Run it Locally

Please follow the below instructions to run this project in your machine:

1. Clone this repository

   ```sh
   git clone https://github.com/sagormajomder/champy.git
   ```

2. Open the directory "champy" into visual studio code
3. Open Terminal and run `npm i` to install all dependencies
4. Set up environment variables:

   Create a .env.local file in the root directory and add the following environment variables:

   ```
      // Example .env file
      VITE_APIKEY=<get from firebase>
      VITE_AUTHDOMAIN=<get from firebase>
      VITE_PROJECTID=<get from firebase>
      VITE_STORAGEBUCKET=<get from firebase>
      VITE_MESSAGINGSENDERID=<get from firebase>
      VITE_APPID=<get from firebase>
      VITE_IMGBB_HOST_KEY=<get from imgbb>
      VITE_SERVER_BASE_LINK=https://champy-backend.vercel.app

   ```

5. Run `npm run dev` to run the project into browser.

   The project will be available on http://localhost:5173/ by default.

6. goto **[champy backend repository](https://github.com/sagormajomder/champy-backend)** for run the backend

## Live URL

#### 🚀 Live Project URL: https://champy-sm.web.app/

## Project Dependencies

#### Dependencies List

```
 "dependencies": {
     "@tailwindcss/vite": "^4.1.17",
    "@tanstack/react-query": "^5.90.12",
    "axios": "^1.13.2",
    "daisyui": "^5.5.8",
    "firebase": "^12.6.0",
    "lottie-react": "^2.4.1",
    "motion": "^12.23.25",
    "react": "^19.2.0",
    "react-datepicker": "^9.0.0",
    "react-dom": "^19.2.0",
    "react-hook-form": "^7.68.0",
    "react-hot-toast": "^2.6.0",
    "react-icons": "^5.5.0",
    "react-router": "^7.10.1",
    "recharts": "^3.6.0",
    "sweetalert2": "^11.26.4",
    "tailwindcss": "^4.1.17"
  },
```

#### Dev Dependencies List

```
  "devDependencies": {
     "@eslint/js": "^9.39.1",
    "@tanstack/react-query-devtools": "^5.91.1",
    "@types/react": "^19.2.5",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^5.1.1",
    "eslint": "^9.39.1",
    "eslint-plugin-react-hooks": "^7.0.1",
    "eslint-plugin-react-refresh": "^0.4.24",
    "globals": "^16.5.0",
    "vite": "^7.2.4"
  }
```

## Connect with Me

✨ Let's connect on different platforms! Feel free to reach out.

🐦 **Twitter:** [@sagormajomder](https://twitter.com/sagormajomder)

🐙 **GitHub:** [@sagormajomder](https://github.com/sagormajomder)

📘 **Facebook:** [@sagormajomder](https://facebook.com/sagormajomder)

🔗 **LinkedIn:** [@sagormajomder](https://www.linkedin.com/in/sagormajomder/)
