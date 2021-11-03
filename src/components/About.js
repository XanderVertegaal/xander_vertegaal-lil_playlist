import React from "react";

const About = () => {
    return (
        <article className="about">
            <h2 className="about-header">About this playlist</h2>
            <p>This web application was created using React in combination with Redux. I see the benefits of working with Redux, but it does take some getting used to the additional boilerplate code. </p>
            <p> In the future, I might take this Playlist a bit further and incorporate a connection to the Spotify API, so the playlist shows a dropdown menu with suggestions of actual songs/artists/genres in the Spotify database and can display album covers.</p>
        </article>
    )
}

export default About