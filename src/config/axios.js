import Axios from "axios";

const axiosClient = Axios.create({
    baseURL: 'http://localhost:4000'
})

export default axiosClient;