import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface Service {
    id: string;
    name: string;
    description: string | null;
    sla: string | null;
    role: string | null;
    division_id: string | null;
    details: string | null;
    created_at: string | null;
    updated_at: string | null;
}


const service: Service = {
    "id": "454",
    "name": "Tira-dúvidas sobre suporte a Banco de Dados",
    "description": "Serviço utilizado para tirar dúvidas sobre banco de dados.",
    "sla": "2",
    "role": "disabled",
    "division_id": "1",
    "details": "{\"type\": \"Indefinido\", \"service_group\": \"Indefinido\"}",
    "created_at": null,
    "updated_at": null
}



export const initialState = [
    service,
    { ...service, id: "1", name: "ABC" },
    { ...service, id: "2", name: "DEF" },
    { ...service, id: "3", name: "GH!" },
];

const servicesSlice = createSlice({
    name: 'services',
    initialState: initialState,
    reducers: {
        createService(state, action) {
            state.push(action.payload);
         },
        updateService(state, action) {
            const index = state.findIndex((service) => service.id === action.payload.id);
            state[index] = action.payload;
         },
        deleteService(state, action) {
            const index = state.findIndex((service) => service.id === action.payload.id);
            state.splice(index, 1);
        },
    },
});

//Selectors

export const selectServices = (state: RootState) => state.services;
export const selectServiceById = (state: RootState, id: string) => {
    const service = state.services.find((service) => service.id === id);
    return service || {} as Service;
}


export default servicesSlice.reducer;
export const { createService, updateService, deleteService } = servicesSlice.actions;