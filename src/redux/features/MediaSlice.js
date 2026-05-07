import { createSlice } from "@reduxjs/toolkit";

const mediaSlice=createSlice({
    name:'media',
    initialState:{
        query:'bike',
        activeTab:'photos',
        results:[],
        loading:true,
        error:''
    },
    reducers:{
        setQuery:(state,action)=>{
            state.query=action.payload;
        },setActiveTabs:(state,action)=>{
            state.activeTab=action.payload;
        },setResults:(state,action)=>{
            state.results=action.payload;
            state.loading=false;
        },setLoading:(state,action)=>{
            state.loading=true;
            state.error=null;
            
        },setError:(state,action)=>{
            state.error=action.payload;
            state.loading=false;
        }
    }
})
export const {setQuery,setResults,setActiveTabs,setLoading,setError}=mediaSlice.actions;

export default mediaSlice.reducer;