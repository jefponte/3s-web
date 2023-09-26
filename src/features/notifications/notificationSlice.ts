import { Result, Results, NotificationParams, Notification } from "../../types/Notification";
import { apiSlice } from "../api/apiSlice";

const endpointUrl = "/notifications";

function parseQueryParams(params: NotificationParams) {
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
  return query.toString();
}

function getNotifications({ page = 1, perPage = 10, search = "" }) {
  const params = { page, perPage, search, isActive: true };
  return `${endpointUrl}?${parseQueryParams(params)}`;
}

export const notificationsApiSlice = apiSlice.injectEndpoints({
  endpoints: ({ query, mutation }) => ({
    getNotifications: query<Results, NotificationParams>({
      query: getNotifications,
      providesTags: ["Notifications"],
    }),
    refreshList: query<Results, NotificationParams>({
      query: getNotifications,
      providesTags: ["Notifications"],
    }),
  }),

});


export const {
  useGetNotificationsQuery
} = notificationsApiSlice;