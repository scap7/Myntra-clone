import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import './index.css';
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Bag from "./Components/Bag.jsx";
import Home from "./Components/Home.jsx";
import {Provider} from "react-redux"
import store from './store/itemsSlice.js';


const router=createBrowserRouter(
  [
    {
      path:"/",element:<App/>,
      children:[
        {path:"/",element:<Home/>},
        {path:"/bag",element:<Bag/>}
      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
