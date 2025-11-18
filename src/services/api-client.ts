import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params: {
        key: "aaa5215ca6b14c6488d1181841a98125"
    }
})