import { View, TouchableOpacity, Text } from 'react-native';
import { GoogleAutocompleteComponent } from '../GoogleAutocompleteComponent/GoogleAutocompleteComponent';
import { GOOGLE_MAPS_KEY } from '@env';
import {
  GooglePlaceData,
  GooglePlaceDetail,
  GooglePlacesAutocompleteProps,
} from 'react-native-google-places-autocomplete';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  setDestination,
  setRunInputAnimation,
} from '../../redux/slices/navSlice';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RideStackParams } from '../../navigators/RideStackNavigator';
import { NavFavorites } from '../NavFavorites/NavFavorites';
import { Icon } from '@rneui/themed';

const googlePlaceStyles: GooglePlacesAutocompleteProps['styles'] = {
  container: {
    flex: 0,
    backgroundColor: 'white',
    paddingTop: 20,
    marginBottom: 8,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
  textInput: {
    backgroundColor: '#efefef',
  },
  listView: {
    position: 'relative',
    zIndex: 50,
  },
};

export const NavigationCard = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProp<RideStackParams>>();
  const {
    nav: { runInputAnimation },
  } = useAppSelector((state) => state);
  const {
    nav: { destination },
  } = useAppSelector((state) => state);

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

  const rideNavOptionHandler = () => {
    if (!destination) return dispatch(setRunInputAnimation(true));
    navigation.navigate('RideOptions');
  };

  return (
    <View className="bg-white flex-1 px-4">
      <GoogleAutocompleteComponent
        placeholder={destination?.description || 'Where to?'}
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={400}
        query={{ key: GOOGLE_MAPS_KEY, language: 'en' }}
        enablePoweredByContainer={false}
        fetchDetails={true}
        styles={googlePlaceStyles}
        onPress={googleServiceHandler}
        isError={runInputAnimation}
      />

      <NavFavorites />

      <View className="flex-row justify-evenly py-5 mt-auto">
        <TouchableOpacity
          className="flex-row bg-black w-24 px-4 py-3 rounded-full"
          onPress={rideNavOptionHandler}
        >
          <Icon name="car" size={16} color="white" type="font-awesome" />
          <Text className="ml-2 text-white text-center">Rides</Text>
        </TouchableOpacity>

        <TouchableOpacity className="flex-row bg-black w-24 px-4 py-3 rounded-full">
          <Icon
            name="fast-food-outline"
            size={16}
            color="white"
            type="ionicon"
          />
          <Text className="ml-2 text-white text-center">Eats</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
