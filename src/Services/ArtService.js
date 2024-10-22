import axios from "axios";

class ArtService{

   getAllArt(){
     return  axios.get("/Art/getAllArts");
  }

   deleteArt(id){
      return axios.delete("/Art/delete/"+id);
  }

   uploadImage(id, formData) {
    return axios.post(`Art/add/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  }
   getArtById(id) {
    return axios.get(`/Art/getArtById/${id}`, { responseType: 'blob' });
  }

   addNewArt(art) {
    return axios.post('/Art/add', art);
  }
}

export default new ArtService();