import { FlatList, TouchableOpacity, Text, Image, View } from 'react-native';
import { NavOptionsData } from './NavOptions.data';
import { SvgXml } from 'react-native-svg';
import { Icon } from '@rneui/themed';

interface RenderedItemProps {
  title: string;
}

export const NavOptions = () => {
  const RenderedItem = ({ title, icon, screen }: Omit<NavOption, 'id'>) => {
    return (
      <TouchableOpacity className="bg-gray-200 p-2 pl-6 pb-8 pt-4 mr-3 self-start w-40">
        {icon && (
          <View>
            <SvgXml xml={icon} width={120} height={120} />
          </View>
        )}
        <Text className="text-lg font-semibold">{title}</Text>
        <View className="p-2 bg-black rounded-full w-10 mt-4">
          <Icon name="arrowright" type="antdesign" color="white" />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={NavOptionsData}
      renderItem={({ item }) => <RenderedItem {...item} />}
      keyExtractor={({ id }) => id}
      horizontal
      className="mt-4"
    ></FlatList>
  );
};
