import { StackParams } from '../navigators/StackNativagator';

export interface NavOption {
  id: string;
  title: string;
  icon: string | null;
  screen: keyof StackParams;
}