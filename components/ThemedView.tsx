import React, { forwardRef, ReactNode } from 'react';
import { View, ViewStyle, ViewProps } from 'react-native';

interface ThemedViewProps extends ViewProps {
  style?: ViewStyle;
  children?: ReactNode;
}

const ThemedView = forwardRef<View, ThemedViewProps>(({ style, children, ...props }, ref) => {
  return (
    <View ref={ref} style={style} {...props}>
      {children}
    </View>
  );
});

export { ThemedView };
