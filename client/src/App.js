import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

const routesDetails = [
	{
		path: '/',
		ComponentToRender: MovieList
	},
	{
		path: '/movies/:id',
		ComponentToRender: Movie
	}
];

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			savedList: []
		};
	}

	addToSavedList = movie => {
		const savedList = this.state.savedList;
		savedList.push(movie);
		this.setState({ savedList });
	};

	render() {
		return (
			<Router>
				<div>
					<SavedList list={this.state.savedList} />
					{routesDetails.map(({ path, ComponentToRender }) => {
						return <Route exact path={path} component={ComponentToRender} />;
					})}
				</div>
			</Router>
		);
	}
}
