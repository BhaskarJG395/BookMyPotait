import axios from 'axios';

// Define your API_URL if needed
const API_URL = 'your-api-url'; // Replace with your actual API URL

class UserService {

  getAllUser() {
    return axios.get('/users/all');
  }

  getRole(email){
        return axios.get('/users/getRoleByEmail/'+email);
  }
  getId(email){
    return axios.get('/users/getIdByEmail/'+email);
  }

  getUserById(id){
    return axios.get('./users/getUserById'+id);
  }
  async checkPassword(email, password) {
    try {
      const encodedPassword = encodeURIComponent(password);
      console.log(`/users/logincheck/${email}/${password}`+ "  "+encodedPassword);
      const response = await axios.get(`/users/logincheck/${email}/${encodedPassword}`);
      return response.data;
    } catch (error) {
      console.error('Error checking password:', error);
      throw error;
    }
  }

  checkConnection() {
    return axios.get("/users/connectioncheck"); // Return the promise
  }

  async checkAdminExists() {
    try {
      const response = await axios.get(`users/admin/exists`);
      return response.data; // Return response data instead of whole response
    } catch (error) {
      console.error("Error checking admin existence:", error);
      throw error; // Re-throw error for handling in component
    }
  }

  addNewUser(user) {
    console.log("add new user function => ", user);
    return axios.post("/users/add", user);
  }
}

export default new UserService();
