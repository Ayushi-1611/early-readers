import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

console.log("API URL:", API_URL, process.env.REACT_APP_API_URL);

// Create async thunk for user registration
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/auth/register`, userData);
      localStorage.setItem("token", response.data.token); // Store token in localStorage
      return response.data; // Return response data to store in Redux state
    } catch (err) {
      return rejectWithValue(err.response.data); // Handle and propagate error
    }
  }
);

// Create async thunk for user login
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/auth/login`, userData);
      localStorage.setItem("token", response.data.token); // Store token in localStorage
      return response.data; // Return response data to store in Redux state
    } catch (err) {
      return rejectWithValue(err.response.data); // Handle and propagate error
    }
  }
);

// Create async thunk for updating user profile
export const updateUser = createAsyncThunk(
  "auth/updateUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `${API_URL}/auth/updateProfile`,
        userData,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }, // Include token for protected routes
        }
      );
      return response.data; // Return updated user data
    } catch (err) {
      return rejectWithValue(err.response.data); // Handle and propagate error
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("token") || null, // Get the token from localStorage
    isAuthenticated: false,
    user: null, // Store user data
    error: null, // Store error messages
  },
  reducers: {
    logout: (state) => {
      localStorage.removeItem("token"); // Remove token from localStorage
      state.token = null; // Reset token
      state.isAuthenticated = false; // Reset authentication
      state.user = null; // Clear user data
    },
  },
  extraReducers: (builder) => {
    // Handle login
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isAuthenticated = true;
        state.error = null; // Clear errors
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload.message; // Handle errors from login
      });

    // Handle registration
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isAuthenticated = true;
        state.error = null;
        console.log(state, action, "state");
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.error = action.payload.message;
      });

    // Handle profile update
    builder
      .addCase(updateUser.fulfilled, (state, action) => {
        state.user = action.payload.user; // Update user data in the state
        state.error = null;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.error = action.payload.message; // Handle errors from update
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
