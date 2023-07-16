import api from "../../api/apiSlice";

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (id: string) => `/api/v1/users/${id}`,
    }),
    updateUser: builder.mutation({
      query: ({ id, data }) => ({
        url: `/api/v1/users/${id as string}`,
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const { useGetUserQuery, useUpdateUserMutation } = userApi;
