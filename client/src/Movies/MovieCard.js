import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MovieCardStyles = styled.div`
	background-color: #764abc;
	border: 0;
	box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.24);
	padding: 1rem;
	cursor: pointer;
	position: relative;
	margin: 1rem auto;
	transition: 0.2s;

	&:hover {
		background-color: #fff;
	}

	a {
		text-decoration: none;
		color: #fff;
		transition: 0.2s;

		&:hover {
			color: #764abc;

			h2 {
				color: #764abc;
				transition: 0.2s;
			}
		}

		& h2 {
			color: #fff;
		}
	}
`;

const MovieDirectorStyles = styled.div`
	padding: 4px 0;
	font-size: 0.8rem;
`;

const MetaScoreStyles = styled.div``;

const MovieStar = styled.div``;

export function MovieCard({ movie }) {
	const { title, director, metascore, stars } = movie;
	return (
		<MovieCardStyles>
			<Link to={`/movies/${movie.id}`}>
				<h2>{title}</h2>
				<MovieDirectorStyles>
					Director: <em>{director}</em>
				</MovieDirectorStyles>
				<MetaScoreStyles>
					Metascore: <strong>{metascore}</strong>
				</MetaScoreStyles>
				<h3>Actors</h3>

				{stars.map(star => <MovieStar key={star}>{star}</MovieStar>)}
			</Link>
		</MovieCardStyles>
	);
}

MovieCard.propTypes = {
	movie: PropTypes.shape({
		title: PropTypes.string.isRequired,
		director: PropTypes.string.isRequired,
		metascore: PropTypes.number.isRequired,
		stars: PropTypes.array.isRequired
	})
};
