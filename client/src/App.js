import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { SavedList } from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

const routesDetails = [
	{
		id: 1,
		path: '/',
		ComponentToRender: MovieList
	},
	{
		id: 2,
		path: '/movies/:id',
		ComponentToRender: Movie
	}
];

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			savedMovieList: []
		};
	}

	addToSavedList = movie => {
		const { savedMovieList } = this.state;
		const movieToSaveId = movie.id;
		const movieExist = savedMovieList.find(movie => movie.id === movieToSaveId);

		// Check if does not exist and add the movie
		if (!movieExist) {
			savedMovieList.push(movie);
			this.setState(() => ({ savedMovieList }));
		}
	};

	render() {
		const { savedMovieList } = this.state;

		return (
			<Router>
				<div>
					<SavedList savedMovieList={savedMovieList} />
					{routesDetails.map(({ path, ComponentToRender, id }) => {
						return (
							<Route
								key={id}
								exact
								path={path}
								render={props => <ComponentToRender {...props} addToSavedList={this.addToSavedList} />}
							/>
						);
					})}
				</div>
			</Router>
		);
	}
}
