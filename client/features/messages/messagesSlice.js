import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMessages = createAsyncThunk("messages/fetch", async () => {
  try {
    const { data } = await axios.get("/api/messages");
    return data;
  } catch (err) {
    console.log(err);
  }
});

const messagesSlice = createSlice({
  name: "messages",
  initialState: {
    messages: [],
  },
  reducers: {
    gotNewMessageFromServer(state, action) {
      state.messages.push(action.payload);
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchMessages.fulfilled, (state, action) => {
      state.messages = action.payload;
    });
  },
});

export const selectMessage = (state) => state.messages;

export const gotNewMessageFromServer = messagesSlice.action;
export default messagesSlice.reducer;
