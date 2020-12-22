import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import {Text} from 'react-native-elements';

import styles from '../styles/styles';

import {list} from '../data/data';
import Mycard from '../componets/MyCard';
import {SafeAreaView} from 'react-native-safe-area-context';
import CategoryList from '../componets/CategoryList';

export default function AnglesList() {
  const [selectedAngle, setSelectedAngle] = useState(0);
  const [angles, setAngles] = useState(list[0].angles);
  const keyExtractor = (item, index) => index.toString();

  return (
    <SafeAreaView>
      <Text style={[styles.topHeading]}>Select your angel</Text>
      <CategoryList setAngles={setAngles} />
      <FlatList
        keyExtractor={keyExtractor}
        data={angles}
        renderItem={({item, index}) => (
          <Mycard
            key={index}
            item={item}
            index={index}
            isSelected={index === selectedAngle ? true : false}
            setSelectedAngle={setSelectedAngle}
          />
        )}
      />
    </SafeAreaView>
  );
}
