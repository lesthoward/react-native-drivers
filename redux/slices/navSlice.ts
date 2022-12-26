import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface NavState {
  origin: string | null;
  destination: string | null;
  travelTimeInformation: null;
}

const initialState: NavState = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
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
  },
});

export const { setDestination, setOrigin, setTravelTimeInformation } =
  navSlice.actions;

export default navSlice.reducer;
