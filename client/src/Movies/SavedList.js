import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';

export const SavedList = props => {
	const { savedMovieList } = props;

	return (
		<div className="saved-list">
			<h3>Saved Movies:</h3>
			{savedMovieList.map(({ id, title }) => {
				return (
					<NavLink
						to={`/movies/${id}`}
						key={id}
						activeStyle={{
							fontWeight: 'bold',
							color: 'red'
						}}
					>
						<span className="saved-movie">{title}</span>
					</NavLink>
				);
			})}
			<Link to="/">
				<div className="home-button">Home</div>
			</Link>
		</div>
	);
};

SavedList.propTypes = {
	savedMovieList: PropTypes.array.isRequired
};
