import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface Event {
    id: string,
    area: null | string,
    process: null | string,
    riskEvent: null | string,
    riskClass: null | string,
    treatmentOption: null | string,
    actions: null | string,
    status: null | string,
    probability: null | string,
    impact: null | string,
    department: null | string,
    start: null | string,
    end: null | string,
}

const eventSlice = createSlice({
    name: "events",
    initialState: [],
    reducers: {}
});


export const selectEvents = (state: RootState) => state.events;

export default eventSlice.reducer;