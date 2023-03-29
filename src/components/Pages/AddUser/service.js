import axios from "axios";

const USERSERVICE_API_BASE_URL = "http://localhost:8080/user/create";

class UserService{
    saveUser(user){
        return axios.post(USERSERVICE_API_BASE_URL,user)
    }
}

export default new UserService();