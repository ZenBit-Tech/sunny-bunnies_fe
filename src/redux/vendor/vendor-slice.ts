import { createSlice } from "@reduxjs/toolkit";

type VendorState = Record<string, never>;

const initialState: VendorState = {};

const vendorSlice = createSlice({
	initialState,
	name: "vendor",
	reducers: {},
});

export const vendorReducer = vendorSlice.reducer;
