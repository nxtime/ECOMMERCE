import axios from "axios";

const defaultUrl = "http://localhost:3001";

export default function api(options?: any, route = "") {
    return axios.get(`${defaultUrl}/products/${route}`);
}
