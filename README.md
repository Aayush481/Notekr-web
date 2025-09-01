# Notekr

Notekr is a modern, user-friendly web application designed to help you effortlessly create, organize, and share notes or code snippets. Whether you're a developer managing code fragments or a student keeping track of important notes, Notekr provides a seamless and intuitive experience. 

With a clean and responsive interface, Notekr ensures your notes are always accessible—on any device. The app features real-time search, instant copy and share options, and easy editing and deletion of your content. All your data is securely stored in your browser's local storage, so your notes remain private and available even without an account.

Built with React, Redux, and Tailwind CSS, Notekr demonstrates best practices in modern web development while remaining lightweight and fast. This project was created to deep understanding of local storage, React state management, and responsive UI design.

---

## Features

- ✍️ Create, edit, and delete notes or code snippets
- 🔍 Real-time search and filtering
- 📋 One-click copy and share functionality
- 🖥️ Responsive, modern UI for all devices
- 🗂️ Data persistence using browser local storage
- 🕒 Timestamps for each paste
- 🔒 No sign-up required (local storage based)

---

## Tech Stack

- **React**
- **Redux**
- **Tailwind CSS / Custom CSS**
- **FontAwesome**
- **Local Storage**

---

## Purpose

This project is built to help understand and demonstrate the use of **local storage**, **React**, **Redux**, and **Tailwind CSS** in a real-world application.

---

## Getting Started

1. Clone the repository:
   ```sh
   git clone https://github.com/<your-username>/notekr-app.git
   cd notekr-app
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm run dev
   ```

4. Open in your browser:
   ```
   http://localhost:3000
   ```

---



## Folder Structure

- src/
  - `pastes.jsx` – Main pastes/notes page
  - `EditPaste.jsx` – Edit paste page
  - `redux/` – Redux store and slices
  - `components/` – UI components (NavBar, Footer, etc.)
  - `home.jsx` – Landing page


