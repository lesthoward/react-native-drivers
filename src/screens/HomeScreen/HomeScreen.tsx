import { View, SafeAreaView, Image } from 'react-native';
import { AppIcon } from '../../../assets/icons';
import { SvgXml } from 'react-native-svg';


export const HomeScreen = () => {


  return (
    <SafeAreaView className="h-full bg-white">
      <View>
        <SvgXml xml={AppIcon} />
      </View>
    </SafeAreaView>
  );
};
