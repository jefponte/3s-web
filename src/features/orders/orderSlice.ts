import { Result, Results, OrderParams, Order } from "../../types/Order";
import { apiSlice } from "../api/apiSlice";

const endpointUrl = "/orders";

function parseQueryParams(params: OrderParams) {
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

function getOrders({ page = 1, perPage = 10, search = "" }) {
  const params = { page, perPage, search, isActive: true };

  return `${endpointUrl}?${parseQueryParams(params)}`;
}

function deleteOrderMutation(category: Order) {
  return {
    url: `${endpointUrl}/${category.id}`,
    method: "DELETE",
  };
}

function createOrderMutation(category: Order) {
  return { url: endpointUrl, method: "POST", body: category };
}

function updateOrderMutation(category: Order) {
  return {
    url: `${endpointUrl}/${category.id}`,
    method: "PUT",
    body: category,
  };
}

function getOrder({ id }: { id: string }) {
  return `${endpointUrl}/${id}`;
}

export const orderApiSlice = apiSlice.injectEndpoints({
  endpoints: ({ query, mutation }) => ({
    getOrders: query<Results, OrderParams>({
      query: getOrders,
      providesTags: ["Orders"],
    }),
    getOrder: query<Result, { id: string }>({
      query: getOrder,
      providesTags: ["Orders"],
    }),
    createOrder: mutation<Result, Order>({
      query: createOrderMutation,
      invalidatesTags: ["Orders"],
    }),
    updateOrder: mutation<Result, Order>({
      query: updateOrderMutation,
      invalidatesTags: ["Orders"],
    }),
  }),
});


export const {
  useGetOrdersQuery,
  useCreateOrderMutation,
  useUpdateOrderMutation,
  useGetOrderQuery,
} = orderApiSlice;