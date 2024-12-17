import React, { useState,useEffect } from 'react'

const ListWithFilterSort = () => {
  const [movies, setMovies] = useState([
    { title: 'abc', genre: 'comedy', year: 2000 },
    { title: 'def', genre: 'horror', year: 2024 },
    { title: 'ghi', genre: 'romance', year: 2000 },
    { title: 'jkl', genre: 'comedy', year: 2012 },
  ])
   const [filteredMovies, setFilteredMovies] = useState(movies)
  const [genre, setGenre] = useState('all')
  const [sortOption, setSortOption] = useState('title')

  // Filter and Sort Logic
  useEffect(() => {
    let result = [...movies]

    if (genre !== 'all') {
      result = result.filter((movie) => movie.genre === genre)
    }

    if (sortOption === 'title') {
      result.sort((a, b) => a.title.localeCompare(b.title))
    } else if (sortOption === 'year') {
      result.sort((a, b) => a.year - b.year)
    }

    setFilteredMovies(result)
  }, [genre, sortOption, movies])

  return (
    <div>
      <select value={genre} onChange={(e) => setGenre(e.target.value)}>
        <option value="all">All Genres</option>
        <option value="comedy">Comedy</option>
        <option value="romance">Romance</option>
        <option value="horror">Horror</option>
      </select>
      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
      >
        <option value="title">Sort by Title</option>
        <option value="year">Sort by Year</option>
      </select>
      <ul style={{ marginTop: '20px' }}>
        {filteredMovies.map((movie) => (
          <li key={movie.id}>
            <strong>{movie.title}</strong> - {movie.genre} ({movie.year})
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ListWithFilterSort
