import { FlatList, TouchableOpacity, Text, View } from 'react-native';
import { NavOptionsData } from './NavOptions.data';
import { SvgXml } from 'react-native-svg';
import { Icon } from '@rneui/themed';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { StackParams } from '../../navigators/StackNativagator';
import { NavOption } from '../../types/app';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setRunInputAnimation } from '../../redux/slices/navSlice';

export const NavOptions = () => {
  const { origin } = useAppSelector((state) => state.nav);
  const navigation = useNavigation<NavigationProp<StackParams>>();
  const dispatch = useAppDispatch();

  const navigateToScreenHandler = (route: keyof StackParams) => {
    if (route === 'Map' && !origin) {
      dispatch(setRunInputAnimation(true));
    }

    navigation.navigate(route);
  };

  const RenderedItem = ({ title, icon, screen }: Omit<NavOption, 'id'>) => {
    return (
      <TouchableOpacity
        className="bg-gray-200 p-2 pb-8 pt-4 mr-3 self-start w-40"
        onPress={() => navigateToScreenHandler(screen)}
      >
        <View className="items-center">
          {icon && <SvgXml xml={icon} width={120} height={120} />}
        </View>
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
      className='flex-1 max-h-60 mt-4'
    />
  );
};
