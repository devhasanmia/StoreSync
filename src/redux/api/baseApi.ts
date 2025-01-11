import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/v1' }),
  tagTypes: ["category"],

  endpoints: (builder) => ({
    addCustomer: builder.mutation({
      query: (body) => ({
        url: "/customer/add-customer",
        method: 'POST',
        body,
      }),
    }),
    getCustomers: builder.query({
      query: () => ({
        url: '/customer/get-customers?limit=50',
        method: 'GET',
      }),
    }),
    getCategories: builder.query({
      query: () => ({
        url: "/category/get-categories",
        method: "GET"
      }),
      providesTags:["category"]
    }),
    addCategory: builder.mutation({
      query: (data) => ({
        url: "/category/add-category",
        method: "POST",
        body: data
      }),
      invalidatesTags: ["category"]
    }),
    deleteCategory: builder.mutation({
      query: (id: string) => ({
        url: `/category/delete-category/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["category"]
    })
  }),
})

export const { useAddCustomerMutation, useGetCustomersQuery, useGetCategoriesQuery, useAddCategoryMutation, useDeleteCategoryMutation } = baseApi