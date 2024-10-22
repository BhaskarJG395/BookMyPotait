import art1 from "../../image/art1.png"
import { NavLink } from "react-router-dom"
import { useLogin } from "../utils/GeneralContext"

export default function ArtistBook(){

    const { isLoggedIn, login, logout } = useLogin(); // now we are using Context for login
    const imageStyle={
        height:'42em',
        width:'28em',
        borderRadius:'30px',
        padding:'8px'
    }

    return(
        <div className='bg-img'>
            <div className="container text-center">
                <div className="row align-items-center">
                    <div className="col col-7">
                        <h1 className="p-3"><strong>Discover the beauty of artist expression</strong></h1>
                        <p className="p-2">Immagine yourself in the world of creativity and inspiration,where artists showcase their unique talents and visions.</p>
                        <div className="p-2">
                            {
                                isLoggedIn ?
                                (<NavLink to="/arts"><button type="button" className="btn btn-outline-success p-2.5 btn-lg rounded-2">Explore</button></NavLink>):
                                (<NavLink to="/login"><button type="button" className="btn btn-outline-success px-5 py-3 rounded"><strong>Join as an Artist</strong></button></NavLink>)
                            }
                        </div>
                    </div>
                    <div className="col col-5 p-6 m-4">
                        <img src={art1} style={imageStyle} />
                    </div>
                </div>
            </div>
        </div>
    )

}