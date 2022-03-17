import axios from "axios";
import { initializeAxiosMockAdapter, } from "./mock/Mock";

let instance = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        "Content-type": "application/json"
    }
});
const isDevEnv = window.location.href.includes('localhost') ? true : false;
if (isDevEnv) {
   initializeAxiosMockAdapter(instance);
}
export const Http = instance;