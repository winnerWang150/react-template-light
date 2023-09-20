import { fetchHome } from '@/services'
import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'

 const fetchGoodPriceAction = createAsyncThunk('home/fetchGoodPrice', (payload, {dispatch}) => {
    fetchHome.fetchGoodPriceData().then(res => {
        dispatch(changeGoodPriceInfoAction(res))
    })
    // return res 
})

const fetchHighScoreInfoAction =  createAsyncThunk('home/fetchHighScore', (payload, {dispatch}) => {
  console.log('payloadpayload', payload)
  fetchHome.fetchHighScoreData().then(res => {
    dispatch(changeHighScoreInfoAction(res))
  })
})


const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    hotRecommendDestInfo: {},
    longforInfo: {},
    homePlusInfo: {}
  },
  reducers: {
    changeGoodPriceInfoAction (state, {payload}) {
      state.goodPriceInfo = payload
   
    },
    changeHighScoreInfoAction (state, {payload}) {
      state.highScoreInfo = payload
    }
  },
  extraReducers: {
    // [fetchGoodPriceAction.fulfilled] (state, {payload}) {
    //   state.goodPriceInfo = payload
    // },
    // [fetchHighScoreInfoAction.fulfilled] (state, {payload}) {
    //   state.highScoreInfo = payload
    // }
  }
})

export const {changeGoodPriceInfoAction, changeHighScoreInfoAction} = homeSlice.actions

export {fetchGoodPriceAction, fetchHighScoreInfoAction} 

export default homeSlice.reducer