import { Animated, ViewStyle } from 'react-native';
import {
  GooglePlacesAutocomplete,
  GooglePlacesAutocompleteProps,
} from 'react-native-google-places-autocomplete';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useEffect } from 'react';
import { setNoOrigin } from '../../redux/slices/navSlice';

interface GoogleAutocompleteComponentProps
  extends GooglePlacesAutocompleteProps {
  extendStyles?: GoogleAutocompleteComponentProps['styles'];
  isError?: boolean;
}

export const GoogleAutocompleteComponent = ({
  isError,
  extendStyles,
  ...props
}: GoogleAutocompleteComponentProps) => {
  const dispatch = useAppDispatch();
  let terminateAnimation = 5;
  let animatedValue = new Animated.Value(0);
  let animatedBorderOpacity = new Animated.Value(0);

  const animate = () => {
    Animated.sequence([
      Animated.timing(animatedValue, {
        toValue: 5,
        duration: 250,
        useNativeDriver: true,
      }),
      Animated.timing(animatedValue, {
        toValue: -5,
        duration: 250,
        useNativeDriver: true,
      }),
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }),
    ]).start(({ finished }) => {
      if (finished && terminateAnimation < 3) {
        animate();
        terminateAnimation += 1;
      }

      if (terminateAnimation >= 5) {
        terminateAnimation = 0;
        dispatch(setNoOrigin(false));
      }
    });

    Animated.timing(animatedBorderOpacity, {
      toValue: 1,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    if (isError) {
      animate();
    }
  }, [isError]);

  const animatedStyles: Animated.WithAnimatedObject<ViewStyle> = {
    transform: [
      {
        translateX: animatedValue,
      },
    ],
  };

  return (
    <Animated.View style={animatedStyles}>
      <GooglePlacesAutocomplete
        styles={{
          container: {
            flex: 0,
          },
          ...(extendStyles ? extendStyles : {}),
        }}
        {...props}
      />
    </Animated.View>
  );
};
