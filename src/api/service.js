import React, { useEffect, useState } from 'react'
import axios from "axios";

const service = axios.create({
    baseURL: "https://dev-numiner-admin.azurewebsites.net",
    timeout: 6000,
    retry: 3,
    retryDelay: 1000,
});

// service.interceptors.request.use(
//     (config) => {
//         const TOKEN = localStorage.getItem('token')
//         config.headers = {
//             'Content-Type': 'application/json',
//             'Accept-Language': 'zh-tw',
//             Authorization: `bearer ${TOKEN}`,
//         }

//         if (config.options) {
//             config.headers['Authorization'] = config.options.Authorization
//         }

//         return config
//     },
//     (error) => {
//         Promise.reject(error)
//     },
// )

service.interceptors.response.use(
    (response) => {
        return response.data
    },
    (error) => {})


export default service