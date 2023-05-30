/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from 'react-native';
import {SelectList} from 'react-native-dropdown-select-list';
import RangeSlider from '../components/RangeSlider';

type StrongRangeData = {
  key: string;
  value: string;
}[];

function Home() {
  const [coffeecup, setCoffeecup] = useState(1);
  const [coffeestrong, setCoffeestrong] = useState(1);
  const [activeBrewing, setActiveBrewing] = useState('aeropress');
  const [coffeegram, setCoffeegram] = useState('');
  const [water, setWater] = useState('');

  const handleSaveChanges = () => {
    switch (activeBrewing) {
      case 'aeropress':
        const aeropressWater = coffeecup * 100;
        console.log('coffeecup:', coffeecup, 'coffeestrong:', coffeestrong);
        const aeropressCoffeegram = (coffeecup * 11 * coffeestrong).toFixed(0);
        console.log('aeropressCoffeegram:', aeropressCoffeegram);
        setWater(aeropressWater.toString());
        setCoffeegram(aeropressCoffeegram.toString());
        break;
      case 'chemex':
        const chemexWater = coffeecup * 165;
        const chemexCoffeegram = (coffeecup * 11 * coffeestrong).toFixed(0);
        setWater(chemexWater.toString());
        setCoffeegram(chemexCoffeegram.toString());
        break;
      case 'v60':
        const v60Water = coffeecup * 175;
        const v60Coffeegram = (coffeecup * 11 * coffeestrong).toFixed(0);
        setWater(v60Water.toString());
        setCoffeegram(v60Coffeegram.toString());
        break;
      case 'frenchpress':
        const frenchpressWater = coffeecup * 105;
        const frenchpressCoffeegram = (coffeecup * 11 * coffeestrong).toFixed(0);
        setWater(frenchpressWater.toString());
        setCoffeegram(frenchpressCoffeegram.toString());
        break;
      case 'coldbrew':
        const coldbrewWater = coffeecup * 160;
        const coldbrewCoffeegram = (coffeecup * 11 * coffeestrong).toFixed(0);
        setWater(coldbrewWater.toString());
        setCoffeegram(coldbrewCoffeegram.toString());
        break;
      default:
        Alert.alert('Selecciona el tipo de cafetera');
        return;
    }
  };
  const handleCoffeeCup = (e: number) => setCoffeecup(e);

  const strongRangeData : StrongRangeData = [
    {key: '0.75', value: 'Muy suave'},
    {key: '0.85', value: 'Suave'},
    {key: '1', value: 'Normal'},
    {key: '1.2', value: 'Un poco fuerte'},
    {key: '1.5', value: 'Fuerte'},
    {key: '2', value: 'Muy fuerte'},
  ];
  const handleBrewingSelect = (brewingId: string) => {
    console.log('handleBrewingSelect:', brewingId )
    setActiveBrewing(brewingId);
  };

  useEffect(() => {
    handleSaveChanges();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[coffeecup,coffeestrong,activeBrewing])

  const styles = StyleSheet.create({
    section: {
      position: 'relative',
      marginBottom: 20,
    },
    heading: {
      textAlign: 'center',
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    brewingMethodContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: 10,
    },
    brewingElement: {
      height: 80,
      alignItems: 'center',
    },
    activeBrewingElement: {
      height: 80,
      alignItems: 'center',
      borderWidth: 2,
      borderColor: 'blue',
    },
    sliderContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    sliderInput: {
      width: 50,
      borderWidth: 1,
      borderColor: 'gray',
      marginRight: 10,
      textAlign: 'center',
    },
    sliderImage: {
      height: 38,
      marginLeft: 2,
      tintColor: '#E5810E',
    },
    selectContainer: {
      alignItems: 'center',
    },
    select: {
      width: '60%',
      marginTop: 10,
      padding: 10,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 5,
    },
    saveButton: {
      alignItems: 'center',
      backgroundColor: 'blue',
      padding: 10,
      borderRadius: 5,
      marginBottom: 10,
    },
    saveButtonText: {
      color: 'white',
      fontWeight: 'bold',
    },
    resultsContainer: {
      alignItems: 'center',
    },
    resultText: {
      fontWeight: 'bold',
    },
    methodImage: {
      height: 75,
      width: 70,
    },
  });
  return (
    <View>
      <View style={styles.section}>
        <Text style={styles.heading}>Tipo de cafetera: {activeBrewing}</Text>
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity
            style={
              activeBrewing === 'aeropress'
                ? styles.activeBrewingElement
                : styles.brewingElement
            }
            onPress={() => handleBrewingSelect('aeropress')}>
            <Image
              style={styles.methodImage}
              source={require('../../public/assets/aeropress.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={
              activeBrewing === 'chemex'
                ? styles.activeBrewingElement
                : styles.brewingElement
            }
            onPress={() => handleBrewingSelect('chemex')}>
            <Image
              style={styles.methodImage}
              source={require('../../public/assets/chemex.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={
              activeBrewing === 'v60'
                ? styles.activeBrewingElement
                : styles.brewingElement
            }
            onPress={() => handleBrewingSelect('v60')}>
            <Image
              style={styles.methodImage}
              source={require('../../public/assets/v60.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={
              activeBrewing === 'frenchpress'
                ? styles.activeBrewingElement
                : styles.brewingElement
            }
            onPress={() => handleBrewingSelect('frenchpress')}>
            <Image
              style={styles.methodImage}
              source={require('../../public/assets/french-press.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={
              activeBrewing === 'coldbrew'
                ? styles.activeBrewingElement
                : styles.brewingElement
            }
            onPress={() => handleBrewingSelect('coldbrew')}>
            <Image
              style={styles.methodImage}
              source={require('../../public/assets/siphon.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>Número de tazas: {coffeecup}</Text>
        <View style={styles.sliderContainer}>
          <RangeSlider handleCup={handleCoffeeCup} />
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>¿Cómo te gusta el café?</Text>
        <View style={styles.selectContainer}>
          <SelectList
            data={strongRangeData}
            save="value"
            defaultOption={{ key: '1', value: 'Normal' }}
            search={false}
            // eslint-disable-next-line prettier/prettier
            setSelected={(itemValue: string) => {
                const selectedOption = strongRangeData.find((e) => e.value === itemValue);
                if (selectedOption) {
                  const { key } = selectedOption;
                  setCoffeestrong(parseFloat(key));
                }
            }}
          />
        </View>
      </View>
      <View style={styles.section}>
        <View style={styles.resultsContainer}>
          <Text>
            Café (gramos): <Text style={styles.resultText}>{coffeegram}</Text>
          </Text>
          <Text>
            Agua (mililitros): <Text style={styles.resultText}>{water}</Text>
          </Text>
        </View>
      </View>
    </View>
  );
}
export default Home;
