import React from "react";
import '../styles.css'

export default function About() {
    return(
    <div id={'about-container'}>
        <p id={'about-tagline'}>Find yourself somewhere new!</p>
        <div id={'about-content-container'}>
            <p className={'about-content'}>Tripn is a roadtrip planner and companion app to help you make the most of your
                wanderlust adventures. Simply enter the location where you will begin your adventure, as well as the
                location that you are heading to. (This can be the same location for round trip experiences)</p>
            <img className={'about-image'} src={'https://res.cloudinary.com/bcantello/image/upload/v1585874451/Screen_Shot_2020-04-02_at_5.40.21_PM_z1p893.png'}></img>
            <p>Next lets discover something new! There is so much to see between point A and point B, so lets add a few
                stops along the way! Don't miss out on anything, and don't worry about the order that you add
                destinations to your list. Tripn takes care of all that so you can focus on dreaming up your perfect
                trip.</p>
            <img className={'about-image'} src={'https://res.cloudinary.com/bcantello/image/upload/v1585875293/Screen_Shot_2020-04-02_at_5.54.37_PM_ws1i2x.png'}></img>
            <p>When you can't think of anything else you absolutely must see, finalize your trip! Tripn will find the
                optimal order to visit all of your destinations so that you can spend as much time as possible in the
                places that matter. Getting there is a snap too with the turn by turn directions that are provided.
                When you are ready to head to the next stop on your adventure, simply tap 'Next Destination' to pull up
                your next set of turn by turn directions. Easy as that! Happy Tripn!</p>
            <img className={'about-image'} src={'https://res.cloudinary.com/bcantello/image/upload/v1585875964/Screen_Shot_2020-04-02_at_6.05.38_PM_lmaycm.png'}></img>
        </div>
    </div>
    )
}
