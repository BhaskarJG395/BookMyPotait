import axios from 'axios';

class UserService{
    getAllUser(){
        return axios.get('/users/all');
    }

    async checkPassword(email, password) {
        try {
            console.log("inside try_1");
          const response = await axios.get(`users/logincheck/${email}/${password}`);
          console.log("inside try_2");
          return response.data;
        } catch (error) {
          console.error('Error checking password:', error);
          throw error;
        }
    }
    checkConnection(){
        axios.get("/users/connectioncheck");
    }

    addNewUser(user){
        console.log("add new user function => ",user);
        
        return axios.post("/users/add",user);
    }
}
export default new UserService();