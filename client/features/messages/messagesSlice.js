import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// const socket = require("socket.io");

export const fetchMessages = createAsyncThunk("messages/fetch", async () => {
  try {
    const { data } = await axios.get("/api/messages");
    return data;
  } catch (err) {
    console.log(err);
  }
});

export const postMessage = createAsyncThunk(
  "/messages/post",
  async (message) => {
    try {
      const { data } = await axios.post("/api/messages", message);
      const newMessage = data;
      socket.emit("new-message", newMessage);
      return data;
    } catch (err) {
      console.log(err, "from postMessage Thunk");
    }
  }
);
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
    builder
      .addCase(fetchMessages.fulfilled, (state, action) => {
        state.messages = action.payload;
      })
      .addCase(postMessage.fulfilled, (state, action) => {
        state.messages = state.messages.push(action.payload);
      });
  },
});

// export const selectMessage = (state) => state.messages;

export const gotNewMessageFromServer = messagesSlice.action;
export default messagesSlice.reducer;
