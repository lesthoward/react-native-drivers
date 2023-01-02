import { FlatList, TouchableOpacity, View, Text } from 'react-native';
import { Icon } from '@rneui/themed';

const data = [
  {
    id: 1,
    icon: 'home',
    location: 'Home',
    destination: 'Code Street, London, UK',
  },
  {
    id: 2,
    icon: 'briefcase',
    location: 'Work',
    destination: 'London Eye, London, UK',
  },
];

export const NavFavorites = () => {
  const FavoriteItem = ({
    icon,
    location,
    destination,
  }: {
    icon: string;
    location: string;
    destination: string;
  }) => {
    return (
      <TouchableOpacity className="self-start flex-row items-center m-4 flex-1">
        <View className='bg-gray-300 rounded-full p-3'>
          <Icon type="ionicon" name={icon} color="white" size={18} />
        </View>
        <View className="ml-4">
          <Text className='font-semibold text-lg'>{location}</Text>
          <Text className='text-gray-500'>{destination}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={data}
      keyExtractor={({ id }) => id.toString()}
      renderItem={({ item }) => <FavoriteItem {...item} />}
      ItemSeparatorComponent={() => <View className='h-[1] bg-gray-200' />}
      className='relative -z-10 flex-grow-0'
    />
  );
};
