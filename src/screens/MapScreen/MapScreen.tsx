import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import {
  View,
} from 'react-native';
import { Map } from '../../components/Map/Map';
import { StackParams } from '../../navigators/StackNativagator';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { RideStackNavigator } from '../../navigators/RideStackNavigator';

export const MapScreen = () => {
  const { origin } = useAppSelector((state) => state.nav);
  const navigation = useNavigation<NavigationProp<StackParams>>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!origin) {
      navigation.navigate('Home');
    }
  }, [origin]);

  if (!origin) return null;

  return (
    <View className="flex-1">
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
