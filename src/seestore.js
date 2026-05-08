import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const fetchJoke = createAsyncThunk("jokes/jokecategory", async function (category) {
  return axios
    .get(`https://api.chucknorris.io/jokes/random?category=${category}`)
    .then(function (result) {
      console.log(result.data.value);
      return result.data.value;
    });
});

const initialState = {
  joke: "No joke",
};

const jokeSlice = createSlice({
  name: "joke",   
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJoke.pending, function () {
        console.log("loading....");
      })
      .addCase(fetchJoke.fulfilled, (state, action) => {
        state.joke = action.payload;
      });
  },
});

export default jokeSlice;
export { fetchJoke };
