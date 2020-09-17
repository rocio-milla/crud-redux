import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { obtainItemsAction } from '../actions/itemsAction';
import Item from './Item';

const Items = () => {
    const dispatch = useDispatch();
    const items = useSelector(x => x.items.items);
    const error = useSelector(x => x.items.error);
    const loading = useSelector(state => state.items.loading);

    useEffect(() => {
        const loadItems = () => dispatch(obtainItemsAction());
        loadItems();
    }, [])

    return (
        <>
            <h2 className="text-center my-5">Items list</h2>
            {error && <p className="font-weight-bold alert alert-danger text-center m4-4">There was an error.</p>}
            {loading && <p className="text-center"> Loading... </p>}
            <table className="table table-stripped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {items.length === 0 ? "There's no items" : (
                        items.map(x => (
                            <Item key={x.id} item={x} />
                        ))
                    )}
                </tbody>
            </table>
        </>
    );
}

export default Items;