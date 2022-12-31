import { SafeAreaView } from 'react-native';
import { NavOptions } from '../../components/NavOptions/NavOptions';
import Logo from '../../components/Logo/Logo';

export const HomeScreen = () => {
  return (
    <SafeAreaView className="h-full mx-4 mt-8">
      <Logo />
      <NavOptions />
    </SafeAreaView>
  );
};
