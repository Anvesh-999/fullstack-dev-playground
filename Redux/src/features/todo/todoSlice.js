import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todos: [{id: "abc", task:'demo-task', isDone: false}],
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
});