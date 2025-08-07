# ⚛️ React Redux Counter App

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-593D88?style=for-the-badge&logo=redux&logoColor=white)](https://redux-toolkit.js.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![pnpm](https://img.shields.io/badge/pnpm-F69220?style=for-the-badge&logo=pnpm&logoColor=black)](https://pnpm.io/)

A clean and modern **Counter App** built with **React**, **Redux Toolkit**, and **Tailwind CSS**.  
This project demonstrates how to use `createSlice`, `configureStore`, and React Redux hooks like `useSelector` and `useDispatch` to manage state in a scalable way.

Ideal for beginners learning Redux Toolkit and building scalable front-end architecture using modern tools.

---

## 📸 Screenshot

> 📍 Counter UI.

![Counter App Screenshot](./src/assets/Counter%20-%20Redux.png)

---

## 🔧 Project Structure

```bash
redux-counter/
│
├── node_modules/
├── public/
│
├── src/
│   ├── app/                     # Redux store
│   ├── assets/                  # (optional) images/fonts etc.
│   ├── components/              # UI components (like Counter.jsx)
│   ├── features/                # Redux slices (e.g. counter.js)
│   ├── App.jsx                  # App layout wrapper
│   ├── index.css                # Tailwind/global CSS
│   ├── main.jsx                 # React entry (with Provider)
│
├── .gitignore
├── eslint.config.js
├── index.html                   # HTML entry point
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── README.md
├── vite.config.js

```

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/redux-counter.git
cd redux-counter
```

### 1. Install Dependencies

```bash
pnpm install
```

### 1. Run App

```bash
pnpm run dev
```

## 📦 Tech Stack

| Tool                                           | Purpose                            |
| ---------------------------------------------- | ---------------------------------- |
| [React](https://reactjs.org/)                  | Frontend library                   |
| [Redux Toolkit](https://redux-toolkit.js.org/) | Global state management            |
| [React Redux](https://react-redux.js.org/)     | React bindings for Redux           |
| [Tailwind CSS](https://tailwindcss.com/)       | Utility-first modern styling       |
| [Vite](https://vitejs.dev/)                    | Lightning-fast dev server + build  |
| [pnpm](https://pnpm.io/)                       | Fast and efficient package manager |

## 🧠 Learning Highlights

- 🧩 Using `createSlice()` for Redux logic
- 📖 Reading state with `useSelector()`
- 🎯 Updating state with `useDispatch()`
- 🗂️ Organizing files in a modular, scalable structure
- 🎨 Styling UI with Tailwind CSS utility classes

## 📃 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT) —  
feel free to use, modify, and distribute it for personal or commercial use.
