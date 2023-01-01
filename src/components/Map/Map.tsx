import { GOOGLE_MAPS_KEY } from '@env';
import MapView, { Marker, MapViewProps } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { useAppSelector } from '../../redux/hooks';
import { useRef, useEffect } from 'react';

export interface MapProps extends MapViewProps {}

export const Map = (props: MapProps) => {
  const {
    nav: { origin, destination },
  } = useAppSelector((state) => state);
  let mapRef = useRef<MapView | null>();

  const OriginMarker = () => {
    if (!origin) return null;
    return (
      <Marker
        coordinate={{
          latitude: origin.location.lat,
          longitude: origin.location.lng,
        }}
        title="Origin"
        description={origin.description}
        identifier="origin"
      />
    );
  };

  const DestinationMarker = () => {
    if (!destination) return null;
    return (
      <Marker
        coordinate={{
          latitude: destination.location.lat,
          longitude: destination.location.lng,
        }}
        title="Destination"
        description={destination.description}
        identifier="destination"
      />
    );
  };

  const DirectionsCoordinatesView = () => {
    if (!origin || !destination) return null;
    return (
      <MapViewDirections
        origin={{
          latitude: origin.location.lat,
          longitude: origin.location.lng,
        }}
        destination={{
          latitude: destination.location.lat,
          longitude: destination.location.lng,
        }}
        apikey={GOOGLE_MAPS_KEY}
        strokeWidth={3}
      />
    );
  };

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
        edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
      });
    }
  }, [origin, destination]);

  return (
    <MapView
      ref={(ref) => {
        mapRef.current = ref;
      }}
      {...props}
    >
      <DirectionsCoordinatesView />
      <OriginMarker />
      <DestinationMarker />
    </MapView>
  );
};
