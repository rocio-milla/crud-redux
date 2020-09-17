import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewItemAction } from '../actions/itemsAction';

const NewItem = ({ history }) => {
    const [name, saveName] = useState('');
    const [price, savePrice] = useState(0);
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.items.loading);
    const error = useSelector((state) => state.items.error);

    const addItem = (item) => dispatch(addNewItemAction(item));

    const submitNewItem = (e) => {
        e.preventDefault();
        if (name.trim() === '' || price <= 0) {
            return;
        }
        addItem({ name, price });

        //redirect to home
        history.push('/')
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Add new item
                        </h2>

                        <form onSubmit={submitNewItem}>
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" className="form-control" placeholder="Name"
                                    name="name" value={name} onChange={e => saveName(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label>Price</label>
                                <input type="number" className="form-control" placeholder="Price"
                                    name="price" value={price} onChange={e => savePrice(Number(e.target.value))} />
                            </div>
                            <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">
                                Add
                            </button>
                        </form>
                        {loading && <p>Loading...</p>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewItem;