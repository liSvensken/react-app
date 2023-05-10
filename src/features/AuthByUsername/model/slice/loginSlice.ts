import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginByUsername } from '../services/loginByUsername';
import { LoginSchema } from '../types/loginSchema';

const initialState: LoginSchema = {
  username: '',
  password: '',
  isLoading: false,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // pending — начал выполняться async action, но данные ещё не пришли
      .addCase(loginByUsername.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;
      })
      // fulfilled — успех
      .addCase(loginByUsername.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = undefined;
      })
      // rejected — ошибка
      .addCase(loginByUsername.rejected, (state, action) => {
        state.isLoading = false;
        state.error = String(action.error);
      });
  },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;

export default loginSlice.reducer;
