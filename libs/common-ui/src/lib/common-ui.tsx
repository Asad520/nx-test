import { View, Button } from 'react-native';

/* eslint-disable-next-line */
export interface CommonUiProps {}

export function CommonUi(props: CommonUiProps) {
  return (
    <View>
      <Button
        title="UI button"
        color={'red'}
        onPress={() => console.log('button')}
      />
    </View>
  );
}

export default CommonUi;
