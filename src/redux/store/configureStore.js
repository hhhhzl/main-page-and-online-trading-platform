import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { StockSlice } from "redux/reducers/Stock/stockReducer";
import { userSlice } from "redux/reducers/users/usersSlices";
import { watchListSlice } from "redux/reducers/WatchList/WatchListReducer";
import rootReducer from "../reducers/rootReducer";

const configurestore =  configureStore({
    reducer:{
        user:userSlice.reducer,
        watchList: watchListSlice.reducer,
        stock: StockSlice.reducer
    }

})

export default configurestore;