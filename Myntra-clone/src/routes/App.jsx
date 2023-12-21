import React from "react"
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import {Outlet} from "react-router-dom"
import { useDispatch } from "react-redux"
import {itemAction, loadingAction} from "../store/itemsSlice"


function App() {
    const dispatch=useDispatch();
    
    

const fetchItems=()=>{
    const url="http://localhost:8080/items";
    dispatch(loadingAction.setLoading(true))
    fetch(url)
    .then(res=>res.json())
    .then(res=>{
        dispatch(itemAction.addInitialItems(res.items[0]))
        dispatch(loadingAction.setLoading(false))
    })
    .catch(error=>{
        console.log(error)
        dispatch(loadingAction.showError(error.message))
        dispatch(loadingAction.setLoading(false))
    })
}
React.useEffect(()=>{
     fetchItems();  
},[])
   
    return (
        <>
            <Header />            
            <Outlet />
            <Footer />

        </>
    )
}

export default App
// 