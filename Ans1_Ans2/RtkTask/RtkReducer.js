import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: []
};

const RtkReducer = createSlice({
    name: 'TaskManager',
    initialState,
    reducers: {
        add: (state, action) => {
            state.data.push({ 
                id: Date.now(), 
                text: action.payload, 
                completed: false // Ensure 'completed' is included
            });
        },
        del: (state, action) => {
            state.data = state.data.filter(task => task.id !== action.payload);
        },
        toggleComplete: (state, action) => {
            const task = state.data.find(task => task.id === action.payload);
            if (task) {
                task.completed = !task.completed; // Toggle completion
            }
        }
    }
});

export const { add, del, toggleComplete } = RtkReducer.actions;
export default RtkReducer.reducer;
