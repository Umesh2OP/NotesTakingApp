import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const initialState = {
  pastes: localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("pastes"))
    : [],
};

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addtopaste: (state, action) => {
      const paste = action.payload;
      state.pastes.push(paste);
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      toast.success("Paste created successfully");
    },

    updatetopaste: (state, action) => {
      const paste = action.payload;
      const index = state.pastes.findIndex((item) => item._id === paste._id); // Use _id

      if (index >= 0) {
        state.pastes[index] = paste;
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast.success("Paste updated successfully!");
      } else {
        toast.error("Paste not found!");
      }
    },

    removefrompaste: (state, action) => {
      const pasteId = action.payload;
      const index = state.pastes.findIndex((item) => item._id === pasteId);

      if (index >= 0) {
        state.pastes.splice(index, 1);
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast.success("Paste deleted successfully!");
      } else {
        toast.error("Paste not found!");
      }
    },

    // Optional: Add a reset action if needed
    resetallpaste: (state) => {
      state.pastes = [];
      localStorage.removeItem("pastes");
      toast.success("All pastes reset!");
    },
  },
});

// Action creators are generated for each case reducer function
export const { addtopaste, updatetopaste, removefrompaste, resetallpaste } = pasteSlice.actions;

export default pasteSlice.reducer;
