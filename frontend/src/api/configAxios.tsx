import axios from "axios";
import { getLocal } from "../utils/localStorage";


const BASE_URL = "http://localhost:8080";

const user = getLocal("user")


export const https = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Authorization": `Bearer ${user?.Token}`,
    }
});