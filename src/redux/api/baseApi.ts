import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/v1' }),
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
        url: '/customer/get-customers',
        method: 'GET',
      }),
    }),
    getCategories: builder.query({
      query: () => ({
        url:"/category/get-categories",
        method: "GET"
      })
    })
  }),
})

export const {useAddCustomerMutation, useGetCustomersQuery, useGetCategoriesQuery} = baseApi