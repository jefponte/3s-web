import { Result, Results, ServiceParams } from "../../types/Service";
import { apiSlice } from "../api/apiSlice";

export interface Service {
  id: string;
  name: string;
  description: null | string;
  role: string;
  division_id: number;
  details: null | string;
  created_at: null | string;
  updated_at: null | string;
}
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

function deleteServiceMutation(category: Service) {
  return {
    url: `${endpointUrl}/${category.id}`,
    method: "DELETE",
  };
}

function createServiceMutation(category: Service) {
  return { url: endpointUrl, method: "POST", body: category };
}

function updateServiceMutation(category: Service) {
  return {
    url: `${endpointUrl}/${category.id}`,
    method: "PUT",
    body: category,
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