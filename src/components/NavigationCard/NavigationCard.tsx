import { View, Text, SafeAreaView, TextInput, ScrollView } from 'react-native';
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
import { RideStackParams } from '../../navigators/RideStackNavigator';

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
    backgroundColor: '#efefef',
  },
};

export const NavigationCard = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProp<RideStackParams>>();

  const googleServiceHandler = (
    data: GooglePlaceData,
    details: GooglePlaceDetail | null
  ) => {
    if (!details) return;
    navigation.navigate('RideOptions');
    dispatch(
      setDestination({
        location: details.geometry.location,
        description: data.description,
      })
    );
  };

  return (
    <View className="bg-white flex-1">
      <Text className="text-center py-5 text-xl">Select a destination</Text>
      <View className="border-t border-gray-200 flex-shrink">
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
  );
};
