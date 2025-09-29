import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { users } from "@/interfaces/user";

const initialState: users[] = []

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        add: (state, action: PayloadAction<users>) => {
            state.push(action.payload);
        },
    }
});

export default usersSlice.reducer;
export const { add } = usersSlice.actions;