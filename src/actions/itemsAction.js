import Swal from "sweetalert2";
import axiosClient from "../config/axios";
import { ADD_ITEM, ADD_ITEM_ERROR, ADD_ITEM_SUCCESS, GET_ITEMS, GET_ITEM_ERROR, GET_ITEM_SUCCESS } from "../types";

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

export function obtainItemsAction() {
    return async (dispatch) => {
        dispatch(getItems());
        try {
            const response = await axiosClient.get('/items');
            dispatch(getItemsSuccess(response.data))
        } catch {
            dispatch(getItemsError())
        }
    }
}

const getItems = () => ({
    type: GET_ITEMS,
    payload: true
});

const getItemsSuccess = (i) => ({
    type: GET_ITEM_SUCCESS,
    payload: i
});

const getItemsError = () => ({
    type: GET_ITEM_ERROR,
    payload: true
})