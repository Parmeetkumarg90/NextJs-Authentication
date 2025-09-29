import { combineReducers, configureStore } from "@reduxjs/toolkit";
import usersReducer from "./user/users";
import currentUserReducer from './user/currentUser';
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/es/storage";
import { persistStore } from 'redux-persist';

export const rootReducer = combineReducers({
    users: usersReducer,
    currentUser: currentUserReducer,
});

const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            // Ignore redux-persist actions
            ignoredActions: ["persist/PERSIST"],
        },
    })
});

const persister = persistStore(store);

export { persister, store };

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch