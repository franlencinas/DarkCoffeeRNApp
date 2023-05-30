import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Slider, Text} from '@rneui/themed';

type SlidersComponentProps = {handleCup: (e: number) => void};

const RangeSlider: React.FunctionComponent<SlidersComponentProps> = props => {
  const {handleCup} = props;
  const [value, setValue] = useState(1);

  useEffect(() => {
    if (value !== 0) {
      handleCup(value);
    }
  }, [handleCup, value]);

  return (
    <>
      <View style={[styles.contentView]}>
        <Slider
          value={value}
          onValueChange={setValue}
          maximumValue={10}
          minimumValue={1}
          step={1}
          allowTouchTrack
          // eslint-disable-next-line react-native/no-inline-styles
          trackStyle={{height: 5, backgroundColor: 'transparent'}}
          // eslint-disable-next-line react-native/no-inline-styles
          thumbStyle={{height: 20, width: 20, backgroundColor: 'transparent'}}
          thumbProps={{
            children: (
              <Image
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  width: 70,
                  height: 70,
                  display: 'flex',
                  position: 'absolute',
                  marginTop: -30,
                  marginLeft: -40,
                }}
                source={require('../../public/assets/range-cup.png')}
              />
            ),
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  contentView: {
    padding: 20,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingLeft: 35,
    paddingRight: 35,
  },
  verticalContent: {
    padding: 20,
    flex: 1,
    flexDirection: 'row',
    height: 500,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  subHeader: {
    backgroundColor: '#2089dc',
    color: 'white',
    textAlign: 'center',
    paddingVertical: 5,
    marginBottom: 10,
  },
});

export default RangeSlider;
