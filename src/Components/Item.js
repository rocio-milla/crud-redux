import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
    const { name, price, id } = item
    return (
        <tr>
            <td>{name}</td>
            <td><span className="font-weight-bold">$ {price}</span> </td>
            <td className="actions">
                <Link to={`/items/edit/${id}`} className="btn btn-primary mr-2">
                    Edit
                </Link>
                <button type="button" className="btn btn-danger">
                    Delete
                </button>
            </td>
        </tr>
    );
}

export default Item;