
import axios from "axios";
http(config) {
    return axios(config).then(data => {
        return JSON.parse(data);
    })
}
export default http;