import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { apiSlice } from "../api/apiSlice";
import { Results, Service } from "../../types/Service";



const endpointUrl: string = "/services";


function deleteServiceMutation(service: Service) {
    return {
        url: `${endpointUrl}/${service.id}`,
        method: "DELETE",
    }
}

export const servicesApiSlice = apiSlice.injectEndpoints({
    endpoints: ({ query, mutation }) => ({
        getServices: query<Results, void>({
            query: () => `${endpointUrl}`,
            providesTags: ["Services"]
        }),
        deleteService: mutation<Service, { id: string }>({
            query: deleteServiceMutation,
            invalidatesTags: ["Services"],
        })
    })
});



const service: Service = {
    "id": "454",
    "name": "Tira-dúvidas sobre suporte a Banco de Dados",
    "description": "Serviço utilizado para tirar dúvidas sobre banco de dados.",
    "sla": "2",
    "role": "disabled",
    divisionID: "11",
    "details": "{\"type\": \"Indefinido\", \"service_group\": \"Indefinido\"}",
    "createdAt": null,
    "updatedAt": null
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

export const {
    useGetServicesQuery,
    useDeleteServiceMutation
} = servicesApiSlice;