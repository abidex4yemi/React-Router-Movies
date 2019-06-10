import React from 'react';
import PropTypes from 'prop-types';

export function MovieDetails({ movie }) {
	const { title, director, metascore, stars } = movie;
	return (
		<div className="movie-card">
			<h2>{title}</h2>
			<div className="movie-director">
				Director: <em>{director}</em>
			</div>
			<div className="movie-metascore">
				Metascore: <strong>{metascore}</strong>
			</div>
			<h3>Actors</h3>

			{stars.map(star => (
				<div key={star} className="movie-star">
					{star}
				</div>
			))}
		</div>
	);
}

MovieDetails.propTypes = {
	movie: PropTypes.shape({
		title: PropTypes.string.isRequired,
		director: PropTypes.string.isRequired,
		metascore: PropTypes.string.isRequired,
		stars: PropTypes.array.isRequired
	})
};
