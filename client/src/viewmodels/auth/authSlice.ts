import { createSlice } from "@reduxjs/toolkit";

type User = {
    name: string;
};

type InitialState = {
    user: User;
    login: boolean;
};

const initialState: InitialState = {
    user: {
        name: "",
    },
    login: false,
};

export const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        setLogin: (state, action) => {
            state.login = action.payload;
        },

        setName: (state, action) => {
            state.user.name = action.payload;
        },
    },
});

export const { setLogin, setName } = authSlice.actions;
