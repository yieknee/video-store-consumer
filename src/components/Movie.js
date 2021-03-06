import React,{useState} from 'react';
import axios from 'axios';
import "../App.css"



const API_URL_MOVIES = "http://localhost:3000/movies"

const Movie = ({externalId, title, overview, releaseDate, imageUrl}) => {
  const [message, setMessage] = useState(null);
  
  const addMovie = (event) =>{
    event.preventDefault();

    axios.post(API_URL_MOVIES, {
        title,
        overview,
        release_date: releaseDate,
        image_url: imageUrl,
        external_id: externalId,
    })
    .then(() => {
      setMessage(`Successfully added ${title} to library!`)
    })
    .catch((error) => {
      console.log(error.message)
      setMessage(`${title} already exists in the library!`)
    });
  }
  
  return (
    <div className="outer-card">
      <div className='card-container'>
        <img src={imageUrl} alt={title +"poster"}></img>
        <div className='card-info'>
          <div className="card-info-text">
            <h3>{title}</h3>
            <p>
              Released: {releaseDate}
            </p>
          </div>
        </div>
      </div>
      <div className="card-buttons">
        <button className="btn btn-outline-secondary" onClick={addMovie}>Add to Movie Library</button>
      </div>
      <div>
        {message}
      </div>
    </div>
  );
}

export default Movie;
