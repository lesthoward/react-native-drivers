import { Car, Food, Sausage, Taxi } from '../../../assets/icons';
import { NavOption } from '../../types/app';

export const NavOptionsData: NavOption[] = [
  {
    id: '1',
    title: 'Get a ride',
    icon: Taxi,
    screen: 'Map',
  },
  {
    id: '2',
    title: 'Order food',
    icon: Sausage,
    screen: 'Home',
  },
];
