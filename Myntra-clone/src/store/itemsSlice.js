import {createSlice,configureStore} from "@reduxjs/toolkit";
// home Items
const itemsSlice=createSlice({
    name:"items",
    initialState:{items:[]},
    reducers:{
        addInitialItems:(state,action)=>{
           state.items=action.payload;
        }
    }
});
//bag items
const bagSlice=createSlice({
    name:"bagItems",
    initialState:{bag:[]},
    reducers:{
        addItemsToBag:(state,action)=>{
            state.bag.push(action.payload)
        },
        removeItemsFromBag:(state,action)=>{
        state.bag= state.bag.filter(item=> item.id!=action.payload) ;
           
        }
    }
})
//loading states 
const loadingSlice =createSlice({
    name:"loadingStates",
    initialState:{
        isloading:true,
        error:""
    },
    reducers:{
        setLoading:(state,action)=>{
           
          state.isloading=action.payload;
        },
        showError:(state,action)=>{
            
            state.error=action.payload;
        }
    }
})
// store
const store=configureStore({
    reducer:{
        items:itemsSlice.reducer,
        bagItems:bagSlice.reducer,
        loadingStates:loadingSlice.reducer
    }
});

//exports
export const bagAction=bagSlice.actions;
export const  itemAction = itemsSlice.actions;
export const  loadingAction = loadingSlice.actions;
export default store;
