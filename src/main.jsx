import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './components/About.jsx';
import Blogs from './components/Blogs.jsx';
import Prompts from './components/Prompts.jsx';
import Home from './components/Home.jsx';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // loader: rootLoader,
    children: [
      {
        path: "home",
        element: <Home />,
        // loader: teamLoader,
      },
      {
        path: "about",
        element: <About />,
        // loader: teamLoader,
      },
      {
        path: "blogs",
        element: <Blogs />,
        // loader: teamLoader,
      },
      {
        path: "prompts",
        element: <Prompts />,
        // loader: teamLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);