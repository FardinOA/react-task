import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllContactApi, getUsContactApi } from "./contactApi";

const allContact =
    typeof window !== "undefined" && window.localStorage.getItem("status")
        ? JSON.parse(window.localStorage.getItem("status") || "")
        : [];

const initialState = {
    allContacts: [],
    usContacts: [],
    loading: false,
    error: false,
};

export const getAllContact = createAsyncThunk(
    "contacts/getAllContact",
    async () => {
        const allContact = await getAllContactApi();

        return allContact;
    }
);

export const getUsContact = createAsyncThunk(
    "contacts/getUsContact",
    async () => {
        const usContact = await getUsContactApi();

        return usContact;
    }
);

export const counterSlice = createSlice({
    name: "Contacts",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getAllContact.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getAllContact.fulfilled, (state, action) => {
                state.loading = false;
                state.allContacts = action.payload;
            })
            .addCase(getAllContact.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
                state.allContacts = [];
            })

            .addCase(getUsContact.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getUsContact.fulfilled, (state, action) => {
                state.loading = false;
                state.usContacts = action.payload;
            })
            .addCase(getUsContact.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
                state.usContacts = [];
            });
    },
});

export const { addStatus } = counterSlice.actions;

export default counterSlice.reducer;
