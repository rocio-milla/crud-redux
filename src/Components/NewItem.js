import React from 'react';

const NewItem = () => {
    return ( 
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Add new item
                        </h2>

                        <form>
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" className="form-control" placeholder="Name"
                                name="name"/>
                            </div>
                            <div className="form-group">
                                <label>Price</label>
                                <input type="number" className="form-control" placeholder="Price"
                                name="price"/>
                            </div>
                            <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">
                                Add
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default NewItem;