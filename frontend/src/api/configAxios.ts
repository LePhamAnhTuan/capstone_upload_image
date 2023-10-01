import axios from "axios";
import { getLocal } from "../utils/localStorage";


const BASE_URL = "http://localhost:8080";

const headers = getLocal("user")
export const https = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJfaWQiOjYsImZ1bGxfbmFtZSI6InRlc3Q2IiwiZW1haWwiOiJ0ZXN0MUBnbWFpbC5jb20iLCJwYXNzX3dvcmQiOiIkMmIkMDgkTHgwcUg3TUo4OVNKNmJEWEFZRHk1T3Z0M2ovUWouYXdtWVFrVU9IcmZCeVR1eDNtak4zblMiLCJ0dW9pIjpudWxsLCJhdmF0YXIiOm51bGwsImlzUmVtb3ZlIjpudWxsfSwiaWF0IjoxNjk2MDE4MzY3LCJleHAiOjE2OTYwMjEzNjd9.NVW_FtMO7cWOjHtJ5ZILBe3SVLK58mN4NTbLqg4jzoc`,
    }

});