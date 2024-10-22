import axios from "axios";

class AddressService {
  // Fetch all addresses
  getAllAddresses() {
    return axios.get('/address');
  }

  // Add a new address for a specific user
  addAddress(userId, addressReqDto) {
    return axios.post(`/address/add/${userId}`, addressReqDto);
  }

  // Get address by user ID
  getAddressByUser(userId) {
    return axios.get(`/address/${userId}`);
  }

  // Update address for a specific user
  updateAddress(userId, addressReqDto) {
    return axios.put(`/address/update/${userId}`, addressReqDto);
  }
}

export default new AddressService();
