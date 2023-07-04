import React from 'react';
import { useEffect, useState } from 'react';

import './App.css';
import SearchIcon from './search.svg'
import MovieCard from './MovieCard';


const API_URL = 'https://www.omdbapi.com/?i=tt3896198&apikey=b24f20ef'

const App = () => {

    const [movies, setMovies] = useState([]); 
    const [searchTerm, setSearchTerm] = useState(''); 

    const searchMovies = async (title) => {
       const response = await fetch(`${API_URL}&s=${title}`);
       const data = await response.json(); 

       setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('spiderman');
    }, [])


    return (
        <div className="app">
            <h1>MovieApp</h1>
            <div className="search">
                <input 
                    placeholder='Search your favourite Movie'
                    onChange={(e) => {setSearchTerm(e.target.value)}}
                />
                <img
                    src= {SearchIcon}
                    alt= 'search'
                    onClick={() => {searchMovies(searchTerm)}}
                />
            </div>
            {
                movies.length > 0 
                ?(
                    <div className="container">
                        {movies.map((movie) => (
                            <MovieCard movie={movie}/>
                        ))}
                    </div>
                ) :
                (
                    (
                        <div className="empty">
                            <h3>No Movie Found</h3>
                        </div>
                    )
                )
            }
        </div>
    );
}

export default App;