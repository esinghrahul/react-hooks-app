import React, { useState } from 'react'
import {v4 as uuid} from 'uuid'

//useState hook returns two things the actual value of state object and 
//accompanying function which is used to change or set values of state object. 
//Here these two are destructured directly using syntax.

const SongList = () => {
    const [songs, setSongs] = useState([
        {id: uuid(), title: 'Fortune days'},
        {id: uuid(), title: 'River flows in you'},
        {id: uuid(), title: 'Lying from you'}
    ])

    const addSong = () => {
        setSongs([...songs, {id: uuid(), title: 'Smells like teen spirit'}])
    }
    return(
        <div className="song-list">
            <ul>
                {songs.map(song=> {
                    return(
                        <li key = {song.id}>{song.title}</li>
                    )
                })}
            </ul>
            <button onClick={addSong}>Add a song</button>
        </div>
    )
}

export default SongList