import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from 'entities/User';

interface LoginByUsernameProps {
  username: string;
  password: string;
}

// loginByUsernameProps — request
// User — response
export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps>(
  'login/loginByUsername',
  async (authData, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:8000/login', authData);

      if (response.data) {
        throw new Error();
      }

      return response.data;
    } catch (err) {
      console.error(err);
      return thunkAPI.rejectWithValue('error');
    }
  },
);
