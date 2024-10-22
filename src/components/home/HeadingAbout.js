import React from 'react'
import ArtistBook from './ArtistBook'
import UserBook from './UserBook'
import ArtShowcase from './ArtShowcase'
import { useLogin } from '../utils/GeneralContext'
import WelcomePage from './WelcomePage'
export default function HeadingAbout(){
    const {isLoggedIn, login, logout}=useLogin();
    return(
        <div>        
            <div>
                <WelcomePage></WelcomePage>
                <ArtistBook></ArtistBook>
                {
                    isLoggedIn ? (<></>) : (<UserBook></UserBook>)
                }
                <ArtShowcase></ArtShowcase>

            </div>
        </div>

    )
}