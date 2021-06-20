import { createSlice } from "@reduxjs/toolkit";

export const newOpening = createSlice({
  name: "newOpening",
  initialState: {
    jobDetails: {},
    academicDetails: [],
    technicalDetails: { id: 1 },
    submitNewOpening: false,
  },
  reducers: {
    updateJobDetails: (state, action) => {
      const { JD } = action?.payload;
      state.jobDetails = { ...JD };
    },
    updateAcademicDetails: (state, action) => {
      const { AD } = action?.payload;
      state.academicDetails = [...state.academicDetails, AD];
    },
    updateTechnicalDetails: (state, action) => {
      const { TD } = action?.payload;
      state.technicalDetails = { ...TD };
    },
    toggleSubmit: (state, action) => {
      console.log("reducer");
      state.submitNewOpening = !state.submitNewOpening;
    },
  },
});

export const {
  updateJobDetails,
  updateAcademicDetails,
  updateTechnicalDetails,
  toggleSubmit,
} = newOpening.actions;
export default newOpening.reducer;
