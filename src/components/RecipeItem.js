import React from "react";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";

function RecipeItem({ title, thumbnail, ingredients }) {
    return (
        <Card border="dark" style={{ width: '20rem' }} >
            <Card.Img variant="top" src={thumbnail} />
            <Card.Body>
				<Card.Title>{title}</Card.Title>
                    <Card.Text><p>Ingredients:</p></Card.Text>
                        <Card.Text>{ingredients}</Card.Text>
            </Card.Body>
        </Card>
       
    );
}


RecipeItem.propTypes = {
    thumbnail: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	ingredients: PropTypes.string.isRequired
};

export default RecipeItem;

