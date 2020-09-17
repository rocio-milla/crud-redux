import { ADD_ITEM, ADD_ITEM_ERROR, ADD_ITEM_SUCCESS } from "../types";

const initialState = {
    items: [],
    error: null,
    loading: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                loading: true
            }
        case ADD_ITEM_SUCCESS:
            return { ...state, loading: false, items: [...state.items, action.payload] }
        case ADD_ITEM_ERROR:
            return { ...state, loading: false, error: action.payload }
        default:
            return state;
    }
}