import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import {Text} from 'react-native-elements';

import {Pressable} from 'react-native';
import styles from '../styles/styles';
import {list} from '../data/data';

export default function CategoryList(props) {
  const [selectedType, setSelectedType] = useState(0);
  const keyExtractor = (item, index) => index.toString();

  const renderItem = ({item, index}) => (
    <View style={[styles.typesView]}>
      <Pressable
        onPress={() => {
          setSelectedType(index);
          props.setAngles(list[index].angles);
        }}>
        <Text
          style={[
            styles.typesTet,
            index === selectedType && styles.selectedType,
          ]}>
          {item.title}
        </Text>
        {index === selectedType && <View style={styles.selectedTypeButtom} />}
      </Pressable>
    </View>
  );

  return (
    <View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        keyExtractor={keyExtractor}
        data={list}
        renderItem={renderItem}
      />
    </View>
  );
}
