import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const SavedListStyles = styled.div`
	background-color: #fff;
	border: 0;
	box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.24);
	padding: 1rem;
	cursor: pointer;
	position: relative;
	margin: 1rem auto;
	width: 75%;
	display: flex;
	align-items: center;
	justify-content: space-between;

	& h3 {
		margin-right: 10px;
	}
`;

const Title = styled.div`margin: 0 10px;`;

const BackHome = styled.div`
	a {
		padding: 5px 10px;
		background-color: #764abc;
		color: #fff;
		text-decoration: none;
	}
`;

export const SavedList = props => {
	const { savedMovieList } = props;

	return (
		<SavedListStyles>
			<h3>Saved Movies:</h3>
			{savedMovieList.map(({ id, title }) => {
				return (
					<NavLink
						to={`/movies/${id}`}
						key={id}
						activeStyle={{
							fontWeight: 'bold',
							color: 'red',
							border: '1px solid grey',
							padding: '5px'
						}}
					>
						<Title>{title}</Title>
					</NavLink>
				);
			})}
			<BackHome>
				<Link to="/">Home</Link>
			</BackHome>
		</SavedListStyles>
	);
};

SavedList.propTypes = {
	savedMovieList: PropTypes.array.isRequired
};
