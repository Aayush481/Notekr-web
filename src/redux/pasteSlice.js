import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { Navigate } from 'react-router-dom';

const initialState = {
    pastes: (() => {
        try {
         
            const storedPastes = localStorage.getItem("pastes");
            return storedPastes ? JSON.parse(storedPastes) : [];
        } catch (error) {
            console.error("Invalid JSON in localStorage for 'pastes':", error);
            return []; // Fallback to an empty array
        }
    })(),
};
export const pasteSlice = createSlice({
    name: 'pastes',
    initialState,
    reducers: {
        addToPaste: (state, action) => {
            const paste = action.payload;
            state.pastes.push(paste);
            localStorage.setItem("pastes", JSON.stringify(state.pastes));
            toast.success("Paste created successfully");
        },
        resetAllPaste: (state) => {
            state.pastes = [];
            localStorage.removeItem("pastes");
            toast.success("All pastes reset successfully");
        },
        updateToPaste: (state, action) => {
          const paste = action.payload ;
          const index = state.pastes.findIndex((item)=>item.id === paste.id);
          if(index>=0){
            state.pastes[index] = paste;
            localStorage.setItem("pastes",JSON.stringify(state.pastes));
          }
          toast.success("paste updated successfully");

        //  Navigate('/paste');
            
        },
        removeFromPaste: (state, action) => {
          const paste = action.payload;
          const index = state.pastes.findIndex((item)=>item.id === paste.id);
           if(index>=0){
            state.pastes.splice(index,1);
            localStorage.setItem("pastes",JSON.stringify(state.pastes));
          }
           toast.success(" pastes remove successfully");
            // Implementation for removing a paste
        },
       
    },
});

// Action creators are generated for each case reducer function
export const { addToPaste, resetAllPaste, updateToPaste, removeFromPaste } = pasteSlice.actions;

export default pasteSlice.reducer;