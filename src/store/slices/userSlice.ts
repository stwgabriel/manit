import { createSlice } from '@reduxjs/toolkit'
import User from 'src/models/user'

const userSlice = createSlice({
  name: 'user',
  initialState: {} as User,
  reducers: {
    setUser: (state, action) => (state = action.payload),
    resetUser: (state) => (state = {} as User),
  },
})

export default userSlice.reducer
export const { setUser, resetUser } = userSlice.actions
