import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './components/AddCoffee.jsx';
import App from './components/App.jsx';
import Layout from './components/Layout.jsx';
import Login from './components/Login.jsx';
import SignUp from './components/SignUp.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import Users from './components/Users.jsx';
import './index.css';
import AuthProvider from './Provider/AuthProvider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <App></App>,
        loader: () => fetch('https://coffee-store-blue.vercel.app/coffee')
      },
      {
        path: "/addCoffee",
        element: <AddCoffee></AddCoffee>
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) => fetch(`https://coffee-store-blue.vercel.app/coffee/${params.id}`)
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/users',
        element: <Users></Users>,
        loader: ()=> fetch('https://coffee-store-blue.vercel.app/users')
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
