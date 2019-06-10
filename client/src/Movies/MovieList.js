import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { MovieCard } from './MovieCard';

const MovieListStyles = styled.div`
	margin: 1rem auto;
	width: 75%;
`;

export default class MovieList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			movies: []
		};
	}

	componentDidMount() {
		axios
			.get('http://localhost:5000/api/movies')
			.then(response => {
				this.setState(() => ({ movies: response.data }));
			})
			.catch(error => {
				return error;
			});
	}

	render() {
		const { movies } = this.state;

		return <MovieListStyles>{movies.map(movie => <MovieCard movie={movie} key={movie.id} />)}</MovieListStyles>;
	}
}
