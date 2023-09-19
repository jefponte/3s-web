import { Result, Results, DivisionParams, Division } from "../../types/Division";
import { apiSlice } from "../api/apiSlice";

const endpointUrl = "/divisions";

function parseQueryParams(params: DivisionParams) {
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

function getDivisions({ page = 1, perPage = 10, search = "" }) {
  const params = { page, perPage, search, isActive: true };

  return `${endpointUrl}?${parseQueryParams(params)}`;
}

function deleteDivisionMutation(category: Division) {
  return {
    url: `${endpointUrl}/${category.id}`,
    method: "DELETE",
  };
}

function createDivisionMutation(category: Division) {
  return { url: endpointUrl, method: "POST", body: category };
}

function updateDivisionMutation(category: Division) {
  return {
    url: `${endpointUrl}/${category.id}`,
    method: "PUT",
    body: category,
  };
}

function getDivision({ id }: { id: string }) {
  return `${endpointUrl}/${id}`;
}

export const divisionsApiSlice = apiSlice.injectEndpoints({
  endpoints: ({ query, mutation }) => ({
    getDivisions: query<Results, DivisionParams>({
      query: getDivisions,
      providesTags: ["Divisions"],
    }),
    getDivision: query<Result, { id: string }>({
      query: getDivision,
      providesTags: ["Divisions"],
    }),
    createDivision: mutation<Result, Division>({
      query: createDivisionMutation,
      invalidatesTags: ["Divisions"],
    }),
    deleteDivision: mutation<Result, { id: string }>({
      query: deleteDivisionMutation,
      invalidatesTags: ["Divisions"],
    }),
    updateDivision: mutation<Result, Division>({
      query: updateDivisionMutation,
      invalidatesTags: ["Divisions"],
    }),
  }),
});


export const {
  useGetDivisionsQuery,
  useDeleteDivisionMutation,
  useCreateDivisionMutation,
  useUpdateDivisionMutation,
  useGetDivisionQuery,
} = divisionsApiSlice;