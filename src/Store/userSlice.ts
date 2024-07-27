import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

interface personalInformation {
  categoryName: string
  name: string
  phoneNo: string
  company: string
  bvn: number
  gender: string
  dob: string
  address: string
  apartmenttype: string
  children: number
  maritalStatus: string
}

interface educationAndEmployment {
  categoryName: string
  levelofEducation: string
  employmentStatus: string
  sectorOfEmployment: string
  employmentDuration: string
  monthlyIncome: string
  loanRepayment: number
}
interface guarantor {
  categoryName: string
  name: string
  phoneNo: string
  email: string
  relationship: string
}

export interface UserState {
  id: string
  email: string
  username: string
  personalInformation: personalInformation
  educationAndEmployment: educationAndEmployment
  guarantor: guarantor
  status: string
}

interface initialState {
  users: UserState[]
  loading: boolean
}

const initialState: initialState = {
  users: [],
  loading: false,
}

export const fetchItems = createAsyncThunk(
  'get/items',
  async (_, { dispatch }) => {
    dispatch(handleLoading(true))
    const allItems = await fetch(
      'https://api.json-generator.com/templates/kYP1n7FQZWNi/data',
      {
        headers: {
          Authorization: `Bearer ${'hjctp80n4h8s09ggdcpao15yy8r879y15xkjcccm'}`,
        },
      },
    )
    const response = await allItems.json()
    dispatch(getUsers(response))
    dispatch(handleLoading(false))
  },
)

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    handleLoading: (state, action: PayloadAction<boolean>) => ({
      ...state,
      isLoading: action.payload,
    }),
    getUsers: (state, action: PayloadAction<UserState[]>) => ({
      ...state,
      users: action.payload,
    }),
  },
})

export const { handleLoading, getUsers } = userSlice.actions

export default userSlice.reducer
