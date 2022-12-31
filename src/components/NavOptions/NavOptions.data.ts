import { Car, Food } from '../../../assets/icons';

export const NavOptionsData: NavOption[] = [
  {
    id: '1',
    title: 'Get a ride',
    icon: Car,
    screen: 'MapScreen',
  },
  {
    id: '2',
    title: 'Order food',
    icon: Food,
    screen: 'EatsScreen',
  }
];