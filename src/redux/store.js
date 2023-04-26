import { configureStore } from "@reduxjs/toolkit";
import nameStatusSlice from "./features/nameStatusSlice";
import contactSlice from "./features/contactSlice";
export const store = configureStore({
    reducer: {
        allStatus: nameStatusSlice,
        contacts: contactSlice,
    },
});
