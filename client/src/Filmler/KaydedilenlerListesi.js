import React from 'react';
import { Link } from 'react-router-dom';

export default function KaydedilenlerListesi(props) {
  const { list, movieList } = props;
  return (
    <div className="saved-list">
      <h3>Kaydedilen Filmler:</h3>
      {list.map(id => {
        const movie = movieList.find(movie => movie.id === id);
        return (
          <span key={id} className="saved-movie">
            {movie ? movie.title : ""}
          </span>
        );
      })}
      <Link to="/">
        <div className="home-button" >Anasayfa</div>
      </Link>
    </div>
  );
}