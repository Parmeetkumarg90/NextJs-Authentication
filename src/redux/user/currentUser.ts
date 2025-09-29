import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { logInUser } from "@/interfaces/user";

const initialState: logInUser | {} = {};

const logInUserSlice = createSlice({
    name: "currentUser",
    initialState,
    reducers: {
        checkCredentials: (state, action: PayloadAction<logInUser>) => {
            if (action.payload.email || action.payload.username) {
                state = action.payload;
            }
        },
        logout: (state) => {
            if (state) {
                state = {};
            }
        }
    }
});

export default logInUserSlice.reducer;
export const { checkCredentials } = logInUserSlice.actions;