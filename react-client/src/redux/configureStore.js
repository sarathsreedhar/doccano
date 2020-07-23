import { createStore, applyMiddleware } from "redux";
import  reduxThunk  from "redux-thunk";
import  reduxLogger from "redux-logger";
import { routerMiddleware } from "connected-react-router";
import { composeWithDevTools } from "redux-devtools-extension";
import { createBrowserHistory } from "history";

import createRootReducer from "./reducers"; 

export const history = createBrowserHistory();

export default function configureStore(preloadedState){
    let middlewares = [reduxThunk,routerMiddleware(history)];

    if(process.env.NODE_ENV !=="production") {
        middlewares.push(reduxLogger);
    }

    const middlewareEnhancer = applyMiddleware(...middlewares);
    const enhancers = [middlewareEnhancer];
    const composedEnhancers = composeWithDevTools(...enhancers);
    const store = createStore(
        createRootReducer(history),
        preloadedState,
        composedEnhancers
    );
    return store;
}
