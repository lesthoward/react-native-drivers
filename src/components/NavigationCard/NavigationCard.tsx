import { View, Text, SafeAreaView } from 'react-native';
import { GoogleAutocompleteComponent } from '../GoogleAutocompleteComponent/GoogleAutocompleteComponent';
import { GOOGLE_MAPS_KEY } from '@env';
import {
  GooglePlaceData,
  GooglePlaceDetail,
  GooglePlacesAutocompleteProps,
} from 'react-native-google-places-autocomplete';
import { useAppDispatch } from '../../redux/hooks';
import { setDestination } from '../../redux/slices/navSlice';
import { NavigationProp, useNavigation } from '@react-navigation/native';

const googlePlaceStyles: GooglePlacesAutocompleteProps['styles'] = {
  container: {
    flex: 0,
    backgroundColor: 'white',
    paddingTop: 20,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
  textInput: {
    backgroundColor: '#DDDDDF',
    borderRadius: 0,
    fontSize: 18,
  },
};

export const NavigationCard = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  const googleServiceHandler = (
    data: GooglePlaceData,
    details: GooglePlaceDetail | null
  ) => {
    if (!details) return;
    dispatch(
      setDestination({
        location: details.geometry.location,
        description: data.description,
      })
    );
  };

  return (
    <SafeAreaView className="bg-white flex-1">
      <Text className="text-center py-5 text-xl">Select a destination</Text>
      <View className="border-t border-gray-200 flex-shrink">
        <View>
          <GoogleAutocompleteComponent
            placeholder="Where to?"
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
            query={{ key: GOOGLE_MAPS_KEY, language: 'en' }}
            enablePoweredByContainer={false}
            fetchDetails={true}
            styles={googlePlaceStyles}
            onPress={googleServiceHandler}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
