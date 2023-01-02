import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import { Icon } from '@rneui/themed';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RideStackParams } from '../../navigators/RideStackNavigator';
import { useState, useEffect } from 'react';
import { useAppSelector } from '../../redux/hooks';
import 'intl';
import 'intl/locale-data/jsonp/en';
import 'intl/locale-data/jsonp/es-CR';

const carDetailsData = [
  {
    id: 1,
    title: 'Regular',
    multiplier: 1,
    image: 'https://links.papareact.com/3pn',
  },
  {
    id: 2,
    title: 'Ergonomic XL',
    multiplier: 1.2,
    image: 'https://links.papareact.com/5w8',
  },
  {
    id: 3,
    title: 'Power XL',
    multiplier: 1.75,
    image: 'https://links.papareact.com/7pf',
  },
];

let surgeChargeRate = 1;
let dollarRate = 603.5;

export const RideOptionsCard = () => {
  const navigate = useNavigation<NavigationProp<RideStackParams>>();
  const [pickedService, setPickedService] = useState<string>();
  const { travelTimeInformation } = useAppSelector((state) => state.nav);
  useEffect(() => {
    if (!travelTimeInformation || !travelTimeInformation.duration || !travelTimeInformation.distance) {
      navigate.navigate('Destination');
      console.error('No travel time information');
    }
  }, [travelTimeInformation]);

  if (!travelTimeInformation || !travelTimeInformation.duration || !travelTimeInformation.distance) return null;

  const pickedServiceStyle = (name: string) => {
    if (pickedService === name) {
      return 'bg-gray-200';
    }
    return '';
  };

  const pickServiceHandler = (name: string) => {
    setPickedService(name);
  };

  const goBackHandler = () => {
    navigate.goBack();
  };

  const CarItemOption = ({
    index,
    title,
    image,
    multiplier,
  }: {
    index: number;
    title: string;
    image: string;
    multiplier: number;
  }) => {
    useEffect(() => {
      if (!pickedService && index === 0) {
        setPickedService(title);
      }
    }, [pickedService]);

    return (
      <TouchableOpacity
        className={`flex-row px-8 items-center justify-between ${pickedServiceStyle(
          title
        )}`}
        onPress={pickServiceHandler.bind(this, title)}
      >
        <Image
          source={{ uri: image }}
          resizeMode="contain"
          className="w-24 h-24"
        />
        <View className="-m-6">
          <Text className="text-xl font-semibold" numberOfLines={1}>
            {title}
          </Text>
          <Text className="mt-1" numberOfLines={1}>
            {travelTimeInformation?.duration.text}
          </Text>
        </View>
        <Text className="text-xl">
          {new Intl.NumberFormat('es-CR', {
            style: 'currency',
            currency: 'CRC',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          }).format(
            ((travelTimeInformation?.duration.value *
              surgeChargeRate *
              multiplier) /
              100) *
              dollarRate
          )}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView className="flex-1">
      <View className="my-4 mx-4">
        <TouchableOpacity
          className="absolute left-0 z-10 w-16 items-start"
          onPress={goBackHandler}
        >
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
        <Text className="text-center text-xl">
          Select a Ride - {travelTimeInformation?.distance.text}
        </Text>
      </View>

      <FlatList
        data={carDetailsData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <CarItemOption {...item} index={index} />
        )}
      />

      <View>
        <TouchableOpacity className="bg-black py-3 m-3 rounded-full">
          <Text className="text-center text-white">Choose {pickedService}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
