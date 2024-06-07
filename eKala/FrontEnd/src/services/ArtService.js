import axios from "axios";

class ArtService{

    getAllArt(){
       return  axios.get("/Art/getAllArts");
    }

    deleteArt(id){
        return axios.delete("/Art/delete/"+id);
    }
    uploadImage(artId,imageFile){
        return axios.post("/Art/add/"+artId,imageFile);
    }
    addNewArt(art){
        return axios.post("/Art/add",art);
    }
}

export default new ArtService();