import { configureStore } from '@reduxjs/toolkit';
import { api } from './services/api';
import cartReducer from './reducers/cartSlice';
import productsReducer from './reducers/productsSlice';

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    cart: cartReducer,
    products: productsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;