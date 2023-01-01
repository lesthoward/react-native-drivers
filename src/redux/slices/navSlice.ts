import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Point } from 'react-native-google-places-autocomplete';

export interface NavState {
  origin: {
    location: Point;
    description: string;
  } | null;
  destination: string | null;
  travelTimeInformation: null;
  noOrigin: boolean;
}

const initialState: NavState = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
  noOrigin: false,
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
    setNoOrigin: (state, action: PayloadAction<NavState['noOrigin']>): void => {
      state.noOrigin = action.payload;
    },
  },
});

export const { setDestination, setOrigin, setTravelTimeInformation, setNoOrigin } =
  navSlice.actions;

export default navSlice.reducer;
