import axios from 'axios';

class UserService{
    getAllUser(){
        return axios.get('/users');
    }

    addNewUser(user){
        console.log("add new user function => ",user);
        
        return axios.post("/users/add",user);
    }
    deleteUser(id){
        console.log("delete user id = ",id);
        return axios.delete("/users/delete/"+id,id);
    }
}
export default new UserService();