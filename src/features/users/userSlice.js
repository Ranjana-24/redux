import {createSlice} from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: [
        {id:1, name:'John', email:'john@gmail.com'},
        {id:2, name:'Jane', email:'jane@gmail.com'},
    ],
    reducers: {
      //create user
       addUser: (state, action) => {
        state.push({
            id: Date.now(),
            name: action.payload.name,
            email: action.payload.email
        })
      },
      //update
      updateUser: (state, action) => {
        const user = state.find(user => user.id === action.payload.id)
        if (user) {
            user.name = action.payload.name
            user.email = action.payload.email
        }
      },

      //delete
      deleteUser: (state, action) => {
         return state.filter(user => user.id !== action.payload.id)
      }
    }

})
export const {addUser, updateUser, deleteUser} = userSlice.actions
export default userSlice.reducer