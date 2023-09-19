import { Result, Results, ServiceParams, Service } from "../../types/Service";
import { apiSlice } from "../api/apiSlice";

const endpointUrl = "/services";

function parseQueryParams(params: ServiceParams) {
  const query = new URLSearchParams();

  if (params.page) {
    query.append("page", params.page.toString());
  }

  if (params.perPage) {
    query.append("per_page", params.perPage.toString());
  }

  if (params.search) {
    query.append("search", params.search);
  }

  if (params.isActive) {
    query.append("is_active", params.isActive.toString());
  }

  return query.toString();
}

function getServices({ page = 1, perPage = 10, search = "" }) {
  const params = { page, perPage, search, isActive: true };

  return `${endpointUrl}?${parseQueryParams(params)}`;
}

function deleteServiceMutation(service: Service) {
  return {
    url: `${endpointUrl}/${service.id}`,
    method: "DELETE",
  };
}

function createServiceMutation(service: Service) {
  return { url: endpointUrl, method: "POST", body: service };
}

function updateServiceMutation(service: Service) {
  return {
    url: `${endpointUrl}/${service.id}`,
    method: "PUT",
    body: service,
  };
}

function getService({ id }: { id: string }) {
  return `${endpointUrl}/${id}`;
}

export const servicesApiSlice = apiSlice.injectEndpoints({
  endpoints: ({ query, mutation }) => ({
    getServices: query<Results, ServiceParams>({
      query: getServices,
      providesTags: ["Services"],
    }),
    getService: query<Result, { id: string }>({
      query: getService,
      providesTags: ["Services"],
    }),
    createService: mutation<Result, Service>({
      query: createServiceMutation,
      invalidatesTags: ["Services"],
    }),
    deleteService: mutation<Result, { id: string }>({
      query: deleteServiceMutation,
      invalidatesTags: ["Services"],
    }),
    updateService: mutation<Result, Service>({
      query: updateServiceMutation,
      invalidatesTags: ["Services"],
    }),
  }),
});


export const {
  useGetServicesQuery,
  useDeleteServiceMutation,
  useCreateServiceMutation,
  useUpdateServiceMutation,
  useGetServiceQuery,
} = servicesApiSlice;