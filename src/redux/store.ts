import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./user/users";
import currentUserReducer from './user/currentUser'

export const store = configureStore({
    reducer: {
        users: usersReducer,
        currentUser: currentUserReducer,
    },
});