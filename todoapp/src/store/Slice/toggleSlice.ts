import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface ToggleState {
    toggleCreate: boolean;
    loading: boolean;
    error: boolean;
    error_message: string;
}

const initialState: ToggleState = {
    toggleCreate: false,
    loading: false,
    error: false,
    error_message: ""
}

export const todoSlice = createSlice({
    name: "todoSlice",
    initialState,
    reducers: {
        updateToggleCreate(state, action: PayloadAction<boolean>) {
            const createToggle = action.payload;
            state.toggleCreate = createToggle;
        },
        updateLoading(state, action: PayloadAction<boolean>) {
            const loadingToggle = action.payload;
            state.loading = loadingToggle
        },
        updateError(state, action: PayloadAction<string>) {
            const error_message = action.payload;
            state.error = true;
            state.error_message = error_message;
        },
        removeError(state) {
            state.error = false;
            state.error_message = "";
        }
    }
})

// Actions 
export const { updateError, updateLoading, updateToggleCreate, removeError } = todoSlice.actions;

export default todoSlice.reducer;