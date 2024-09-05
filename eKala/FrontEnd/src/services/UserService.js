import axios from 'axios';

// Define your API_URL if needed
const API_URL = 'your-api-url'; // Replace with your actual API URL

class UserService {
  getAllUser() {
    return axios.get('/users/all');
  }

  async checkPassword(email, password) {
    try {
      console.log("inside try_1");
      const response = await axios.get(`/users/logincheck/${email}/${password}`);
      console.log("inside try_2");
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
