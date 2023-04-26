import { createSlice } from "@reduxjs/toolkit";

const allStatus =
    typeof window !== "undefined" && window.localStorage.getItem("status")
        ? JSON.parse(window.localStorage.getItem("status") || "")
        : [];

const initialState = {
    allStatus,
};

export const statusSlice = createSlice({
    name: "Status",
    initialState,
    reducers: {
        addStatus: (state, action) => {
            state.allStatus.push(action.payload);
            const arr = state.allStatus;
            const statusOrder = {
                active: 0,
                completed: 1,
                pending: 2,
                archive: 3,
            };

            arr.sort((a, b) => {
                const aOrder = statusOrder[a.status];
                const bOrder = statusOrder[b.status];
                return aOrder - bOrder;
            });
            localStorage.setItem("status", JSON.stringify(arr));
        },
    },
});

export const { addStatus } = statusSlice.actions;

export default statusSlice.reducer;
