import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationCard } from '../components/NavigationCard/NavigationCard';
import { RideOptionsCard } from '../components/RideOptionsCard/RideOptionsCard';
import { ScrollView } from 'react-native';

export type RideStackParams = {
  Destination: undefined;
  RideOptions: {} | undefined;
};

const Stack = createNativeStackNavigator<RideStackParams>();

export const RideStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, animation: 'none' }}>
        <Stack.Screen name="Destination" component={NavigationCard} />
        <Stack.Screen name="RideOptions" component={RideOptionsCard} />
    </Stack.Navigator>
  );
};
