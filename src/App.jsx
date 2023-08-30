import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import './App.css'
import LoginPage from './pages/login/Login';
import HomePage from "./pages/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />
  },
  {
    path: "/home",
    element: <HomePage />
  }
])

function App() {
  return (
    <RouterProvider router={router}/> 
  )
}

export default App;
