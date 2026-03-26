/**Slice */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// 1. ASYNC THUNK: The API call logic
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com');
    return await response.json(); // This becomes the action.payload
});

const postsSlice = createSlice({
    name: 'posts',
    initialState: { items: [], status: 'idle', error: null },

    // 2. REDUCERS: For synchronous actions (like clearing the list)
    reducers: {
        clearPosts: (state) => {
            state.items = [];
        }
    },

    // 3. EXTRA REDUCERS: For handling the Thunk's lifecycle
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const { clearPosts } = postsSlice.actions;
//export default postsSlice.reducer;  this is commented out only because error in this page since in a page 2 default export not allowed




/**Store */
import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './postsSlice';

const loggerMiddleware = (store) => (next) => (action) => {
  console.log('--- ACTION DISPATCHED ---');
  console.log('Type:', action.type);
  console.log('Payload:', action.payload);

  // 2. Pass the action to the next middleware (or the reducer)
  const result = next(action);

  // 3. Log the state after the reducer has processed it
  console.log('New State:', store.getState());
  console.log('-------------------------');

  return result;
};

export const store = configureStore({
    reducer: {
        posts: postsReducer, // Register the reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(loggerMiddleware),
});




/**Provider setup */
"use client"; // Required for Context/Providers

import { Provider } from "react-redux";
import { store } from "@/redux/store"; // Adjust path to your store file
export function ReduxProvider({ children }) {
    return <Provider store={store}>{children}</Provider>;
}





/**Component*/
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts, clearPosts } from './postsSlice';

export default function PostsList() {
    const dispatch = useDispatch();

    // useSelector to grab specific parts of the state
    const { items, status, error } = useSelector((state) => state.posts);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchPosts()); // Trigger the async thunk
        }
    }, [status, dispatch]);

    if (status === 'loading') return <p>Loading...</p>;
    if (status === 'failed') return <p>Error: {error}</p>;

    return (
        <div>
            <button onClick={() => dispatch(clearPosts())}>Clear All</button>
            <ul>
                {items.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
}
