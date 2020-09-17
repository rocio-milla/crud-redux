import Swal from "sweetalert2";
import axiosClient from "../config/axios";
import { ADD_ITEM, ADD_ITEM_ERROR, ADD_ITEM_SUCCESS } from "../types";

export function addNewItemAction(item) {
    return async (dispatch) => {
        dispatch(addItem());
        try {
            await axiosClient.post('/items', item)
            dispatch(addItemSuccess(item));
            Swal.fire(
                'Success',
                'Item was added succesfully',
                'success'
            )
        } catch (error) {
            dispatch(addItemError(true));
            Swal.fire({
                icon: 'error',
                title: 'Something went wrong',
                text: "There was an error. Try again later."
            }
            )
        }
    }
}

const addItem = () => ({
    type: ADD_ITEM
})

const addItemSuccess = i => ({
    type: ADD_ITEM_SUCCESS,
    payload: i
})

const addItemError = (e) => ({
    type: ADD_ITEM_ERROR,
    payload: e
})