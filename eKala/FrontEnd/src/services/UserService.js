import { User } from "../Utils/User";
import axios from "axios";
class UserServices{
    
    getAllUsers(){
        return axios.get("/users");
    }

    addUser(u){
        console.log("in service",u);
        return axios.post("/users/add",u);
    }

    getUserById(id){
        return axios.get("/users/"+id);
    }
}

export default new UserServices();