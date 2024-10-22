import React from 'react'
import ArtistBook from './ArtistBook'
import UserBook from './UserBook'
import ArtShowcase from './ArtShowcase'
import { useLogin } from '../utils/GeneralContext'
export default function HeadingAbout(){
    const {isLoggedIn, login, logout}=useLogin();
    return(
        <div>        
            <div>
                <ArtistBook></ArtistBook>
                {
                    isLoggedIn ? (<></>) : (<UserBook></UserBook>)
                }
                <ArtShowcase></ArtShowcase>

            </div>
        </div>

    )
}