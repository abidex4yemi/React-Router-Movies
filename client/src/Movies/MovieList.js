import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { MovieDetails } from './MovieDetails';

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

		return (
			<div className="movie-list">
				{movies.map(movie => (
					<Link to={`/movies/${movie.id}`}>
						<MovieDetails key={movie.id} movie={movie} />
					</Link>
				))}
			</div>
		);
	}
}
