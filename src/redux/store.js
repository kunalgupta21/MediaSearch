import { configureStore } from '@reduxjs/toolkit'
import mediaSlice from '../redux/features/MediaSlice';
export default configureStore({
  reducer: {
    media:mediaSlice,
  },
})