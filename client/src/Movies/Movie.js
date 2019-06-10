import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { MovieCard } from './MovieCard';

const MovieStyles = styled.div`
	position: relative;
	width: 75%;
	margin: 1rem auto;
`;

const SaveMovieButton = styled.div`
	position: absolute;
	top: 25px;
	right: 25px;
	border: 1px solid grey;
	padding: 5px 10px;
	background-color: lightseagreen;

	&:hover {
		background-color: green;
		color: white;
	}
`;

export default class Movie extends Component {
	constructor(props) {
		console.log('constructor....');
		super(props);
		this.state = {
			movie: null
		};
	}

	componentDidMount() {
		console.log('componentDidMount....');
		// Get (id) of the single movie to be displayed
		const { id } = this.props.match.params;
		this.fetchMovie(id);
		console.log(this.state);
	}

	fetchMovie = id => {
		axios
			.get(`http://localhost:5000/api/movies/${id}`)
			.then(response => {
				this.setState(() => ({ movie: response.data }));
			})
			.catch(error => {
				return error;
			});
	};

	// This React life cycle method will run after
	// any time the component receive new prop and
	// use it to set the movie state
	componentWillReceiveProps(newProps) {
		if (this.props.match.params.id !== newProps.match.params.id) {
			this.fetchMovie(newProps.match.params.id);
		}
	}

	saveMovie = () => {
		const addToSavedList = this.props.addToSavedList;
		addToSavedList(this.state.movie);
	};

	render() {
		// Runs if movie is null
		if (!this.state.movie) {
			return <div>Loading movie information...</div>;
		}

		const { movie } = this.state;

		return (
			<MovieStyles>
				<MovieCard movie={movie} />
				<SaveMovieButton onClick={this.saveMovie}>Save</SaveMovieButton>
			</MovieStyles>
		);
	}
}
