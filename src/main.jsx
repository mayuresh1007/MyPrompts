import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './components/About.jsx';
import Blogs from './components/Blogs.jsx';
import Prompts from './components/Prompts.jsx';
import Home from './components/Home.jsx';
import PageNotFound from './components/PageNotFound.jsx';

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
    errorElement:<PageNotFound/>,
    children: [
      {
        path: "/",
        element: <Home />,
        // loader: teamLoader,
        exact: true,
      },
      {
        path: "about",
        element: <About />,
        // exact: true,
        // loader: teamLoader,
      },
      {
        path: "blogs",
        element: <Blogs />,
        // exact: true,
        // loader: teamLoader,
      },
      {
        path: "prompts",
        element: <Prompts />,
        // exact: true,
        // loader: teamLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);