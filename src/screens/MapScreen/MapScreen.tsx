import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Map } from '../../components/Map/Map';
import { StackParams } from '../../navigators/StackNativagator';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { RideStackNavigator } from '../../navigators/RideStackNavigator';
import { Icon } from '@rneui/themed';

export const MapScreen = () => {
  const { origin } = useAppSelector((state) => state.nav);
  const navigation = useNavigation<NavigationProp<StackParams>>();

  useEffect(() => {
    if (!origin) {
      navigation.navigate('Home');
    }
  }, [origin]);

  const goToHomeHandler = () => {
    navigation.navigate('Home');
  };

  if (!origin) return null;

  return (
    <View className="flex-1">
      <TouchableOpacity
        className="absolute top-12 left-4 z-50 p-3 rounded-full"
        onPress={goToHomeHandler}
      >
        <Icon name="chevron-left" size={24} />
      </TouchableOpacity>

      <Map
        initialRegion={{
          latitude: origin.location.lat,
          longitude: origin.location.lng,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        className="flex-1"
        mapType="mutedStandard"
      />

      <View className="flex-1">
        <RideStackNavigator />
      </View>
    </View>
  );
};
