import React, { useEffect, useState } from "react";
import "../../css/AllArts.css";
import "../../css/card-body.css";
import { NavLink } from 'react-router-dom';
import ArtService from "../../Services/ArtService";

function ArtList() {
    const [art, setArt] = useState([]);
    const [imageUrls, setImageUrls] = useState({}); // For storing image URLs

    const fetchData = () => {
        ArtService.getAllArt().then((result) => {
            setArt([...result.data]);
        }).catch((err) => {
            console.log(err);
        });
    };

    const fetchImage = (id) => {
        ArtService.getArtById(id).then((response) => {
            const url = URL.createObjectURL(response.data);
            setImageUrls(prev => ({ ...prev, [id]: url }));
        }).catch((err) => {
            console.log(err);
        });
    };

    const deleteArt = (id) => {
        ArtService.deleteArt(id).then((result) => {
            console.log(result);
            fetchData();
        }).catch((err) => {
            console.log(err);
        });
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        art.forEach((p) => fetchImage(p.id)); // Fetch images for all art items
    }, [art]);

    return (
        <div className="container">
            <br />
            <div className="col-lg-12 md-12">
                <div>
                    <button type="button" className="btn-md">
                        <NavLink to='/UploadArt'><h3>Add new Art here</h3></NavLink>
                    </button>
                </div>
            </div>
            <br />
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Art Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {art.map((p) => (
                            <tr key={p.id}>
                                <td>
                                    <img src={imageUrls[p.id] || "placeholder-image-url"} alt="Image not available" height="100" />
                                </td>
                                <td>{p.artName}</td>
                                <td>{p.description}</td>
                                <td>₹{p.price}</td>
                                <td>
                                    <button className="btn btn-success mr-2">
                                        <NavLink to='/UpdateArt' className="text-white">Update</NavLink>
                                    </button>
                                    <button className="btn btn-danger" onClick={() => deleteArt(p.id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ArtList;
