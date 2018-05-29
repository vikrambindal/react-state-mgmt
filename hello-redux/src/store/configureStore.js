import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';
import rootReducer from "../reducers/rootReducer";

export default function configureStore() {
    return createStore(rootReducer, applyMiddleware(logger));
}