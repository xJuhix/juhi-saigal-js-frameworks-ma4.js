import React from 'react';
import Badge from 'react-bootstrap/Badge'


function IngredientList({ ingredients }) {

    const ingredientsAll = ingredients.split(', ')

    return (
        <div>
            <p>Ingredients:</p>
            {
                ingredientsAll.map(i => <Badge class="badge badge-primary mr-1">{i}</Badge>)
            }
        </div>
    );
}

export default IngredientList;