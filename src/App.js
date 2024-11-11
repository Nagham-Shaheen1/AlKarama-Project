import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {RouterProvider } from 'react-router-dom';
import router from './Routes/router';
import { MantineProvider } from '@mantine/core';

function App() {
  
  return (
    <div className="App ">
      <MantineProvider>
     <RouterProvider router={router}/>
     </MantineProvider>

    </div>
  );
}


export default App;
 