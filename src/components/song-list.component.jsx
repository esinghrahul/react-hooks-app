import React, { useState, useEffect } from 'react'
import {v4 as uuid} from 'uuid'
import SongInput from './song-input.component'

//useState hook returns two things the actual value of state object and 
//accompanying function which is used to change or set values of state object. 
//Here these two are destructured directly using syntax.

const SongList = () => {
    const [songs, setSongs] = useState([
        {id: uuid(), title: 'Fortune days'},
        {id: uuid(), title: 'River flows in you'},
        {id: uuid(), title: 'Lying from you'}
    ])

    const [rating, setRating] = useState(0)
    const addSong = (title) => {
        setSongs([...songs, {id: uuid(), title: title}])
    }
    
    //By default useEffect runs every time any of the components render or re-render. This can be used to make api calls.
    //However to only run useEffect if a specific set of data changes, pass the data set as second parameter to useEffect inside an array
    useEffect(() => {
        console.log('useEffect hook ran', songs)
    }, [songs])

    return(
        <div className="song-list">
            <ul>
                {songs.map(song=> {
                    return(
                        <li key = {song.id}>{song.title}</li>
                    )
                })}
            </ul>
            <SongInput addSong= {addSong} />
            <button onClick={() => setRating(rating + 1)}>Increase Rating: {rating}</button>
        </div>
    )
}

export default SongList