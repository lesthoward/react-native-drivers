import { SafeAreaView, Animated } from 'react-native';
import { NavOptions } from '../../components/NavOptions/NavOptions';
import { GOOGLE_MAPS_KEY } from '@env';
import {
  GooglePlaceData,
  GooglePlaceDetail,
} from 'react-native-google-places-autocomplete';
import Logo from '../../components/Logo/Logo';
import { useAppDispatch } from '../../redux/hooks';
import { setDestination, setOrigin } from '../../redux/slices/navSlice';
import { GoogleAutocompleteComponent } from '../../components/GoogleAutocompleteComponent/GoogleAutocompleteComponent';



export const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const googleServiceHandler = (
    data: GooglePlaceData,
    details: GooglePlaceDetail | null
  ) => {
    if (!details) return;
    dispatch(
      setOrigin({
        location: details.geometry.location,
        description: data.description,
      })
    );
    dispatch(setDestination(null));
  };

  return (
    <SafeAreaView className="h-full mx-4 mt-12">
      {/* <Logo /> */}

      <GoogleAutocompleteComponent
        placeholder="Where from?"
        query={{ key: GOOGLE_MAPS_KEY, language: 'en' }}
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={400}
        enablePoweredByContainer={false}
        fetchDetails={true}
        onPress={googleServiceHandler}
      />
      <NavOptions />
    </SafeAreaView>
  );
};
