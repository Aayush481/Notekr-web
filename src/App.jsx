// filepath: c:\Users\aayus\OneDrive\Desktop\paste app\paste App\src\App.jsx
import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import NavBar from './navBar';
import ViewPaste from './viewPaste';
import ErrorPage from './ErrorPage';

import Create from './Create';



import Pastes from './Pastes';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './Login';
import SignUp from './SignUp';
import Home from './Home';
import EditPaste from './EditPaste';



const router = createBrowserRouter([
  {
  path:"/",
  
  element:
  <div   >
   <NavBar/>
   <Home/>
    </div>
  },
  {
    path:"/pastes",
    element:<div >
   <NavBar/>
   <Pastes/>
    </div>
  },
  {
    path:"/pastes/:id",
    element:<div >
   <NavBar/>
   <ViewPaste/>
    </div>
  },
  {
    path:"/login",
    element:<div >
   <NavBar/>
   <Login/>
    </div>
  },
  {
    path:"/signup",
    element:<div >
   <NavBar/>
   <SignUp/>
    </div>
  }
  ,
  {
    path:"/create",
    element:<div >
   <NavBar/>
   <Create/>
    </div>
  },
  { path: "/edit/:pasteId",
     element:<div >
   <NavBar/>
   <EditPaste/>
    </div> }
]);

function App() {
 

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;