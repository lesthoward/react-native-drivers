import MapView, { Marker, MapViewProps } from 'react-native-maps';

export interface MapProps extends MapViewProps {}

export const Map = (props: MapProps) => {
  return <MapView {...props} />;
};
