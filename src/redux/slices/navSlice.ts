import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Point } from 'react-native-google-places-autocomplete';

export interface NavState {
  origin: {
    location: Point;
    description: string;
  } | null;
  destination: {
    location: Point;
    description: string;
  } | null;
  travelTimeInformation: {
    distance: {
      text: string;
      value: number;
    };
    duration: {
      text: string;
      value: number;
    };
    status: string;
  } | null;
  runInputAnimation: boolean;
}

const initialState: NavState = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
  runInputAnimation: false,
};

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setOrigin: (state, action: PayloadAction<NavState['origin']>) => {
      state.origin = action.payload;
    },

    setDestination: (state, action: PayloadAction<NavState['destination']>) => {
      state.destination = action.payload;
    },

    setTravelTimeInformation: (
      state,
      action: PayloadAction<NavState['travelTimeInformation']>
    ): void => {
      state.travelTimeInformation = action.payload;
    },
    setRunInputAnimation: (state, action: PayloadAction<NavState['runInputAnimation']>): void => {
      state.runInputAnimation = action.payload;
    },
  },
});

export const {
  setDestination,
  setOrigin,
  setTravelTimeInformation,
  setRunInputAnimation,
} = navSlice.actions;

export default navSlice.reducer;
