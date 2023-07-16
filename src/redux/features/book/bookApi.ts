import api from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: (query) => `/api/v1/books?${query as string}`,
    }),
    getBook: builder.query({
      query: (id) => `/api/v1/books/${id as string}`,
    }),
    createBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/api/v1/books/${id as string}`,
        method: "POST",
        body: data,
      }),
    }),
    updateBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/api/v1/books/${id as string}`,
        method: "PATCH",
        body: data,
      }),
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/api/v1/books/${id as string}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetBookQuery,
  useCreateBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
} = bookApi;
