import React from 'react';
import PropTypes, { func } from 'prop-types';
import './Movie.css';

function Movie({ title, year, summary, poster, genres }) {
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title} />
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <ul className="movie__genres">
                    {genres.map((genre, index) => {
                        return <li key={index} className="movie__genre">{genre}</li>; // key
                    })}
                </ul>
                <p className="movie__summary">{summary.slice(0, 180)}...</p>
            </div>
        </div>
    );
}

Movie.propTypes = { //각각의 props가 올바른 타입으로 존재하는지 알기위함
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired, //arrayOf(PropTypes.string)는 배열안에 원소의 타입이 문자열인지 확인
};

export default Movie;    