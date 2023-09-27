import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { base_url } from "../firebase/database"

const ecApi = createApi ({
    reducerPath: "ecApi",
    baseQuery: fetchBaseQuery({
        base_url: base_url,
    }),

    endpoints: (builder) => ({
        getCategories: builder.query({

        })
    })
})