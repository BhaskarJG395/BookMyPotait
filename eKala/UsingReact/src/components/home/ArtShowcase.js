import "../../css/style.css"
import {Pagination } from "react-bootstrap"
import {NavLink} from "react-router-dom"

export default function ArtShowcase(){
        return(
        <div className='bg-img'>
        <hr/>
            <h1 className="text-center"><strong>Art Gallary</strong></h1>
            <div className="container text-center">
                <div className="row artShowcaseRow">
                    <div className="col artShowcaseCol">
                        <img src={drawing1}></img>
                        <img src={drawing2}></img>
                    </div>
                    <div className="col artShowcaseCol">
                        <img src={drawing3}></img>
                        <img src={drawing4}></img>
                    </div>
                    <div className="col artShowcaseCol">
                        <img src={drawing5}></img>
                        <img src={drawing6}></img>
                    </div>
                </div>
            </div>
            <div className="text-center">
                    <NavLink to="/gallery"><button type="button" className="btn btn-dark">......................Explore More.....................</button></NavLink>
            </div>
            <hr/>
        </div>
    )

}