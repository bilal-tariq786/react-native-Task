import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import {Card, Text} from 'react-native-elements';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {SafeAreaView} from 'react-native-safe-area-context';

import CategoryList from '../componets/CategoryList';
import {list, services} from '../data/data';

import styles from '../styles/styles';

export default function ProductDetail() {
  const [selectedAngle, setSelectedAngle] = useState(0);
  const [angles, setAngles] = useState(list[0].angles);
  const keyExtractor = (item, index) => index.toString();

  const renderCard = ({item, index}) => (
    <Card
      containerStyle={[
        {
          borderRadius: 12,
          elevation: 10,
        },
        selectedAngle === index && {
          backgroundColor: '#b6babf',
        },
      ]}>
      <View
        style={[
          {flex: 1, flexDirection: 'row', justifyContent: 'space-between'},
        ]}>
        <View
          style={[
            {alignSelf: 'flex-start', borderRadius: 12, borderColor: ''},
            index === 0
              ? {maxWidth: widthPercentageToDP(80)}
              : {maxWidth: widthPercentageToDP(90)},
          ]}>
          <Text style={[{fontSize: 15, fontWeight: '700'}]}>
            {'some random text'}{' '}
            <Text style={[{marginLeft: widthPercentageToDP(2)}]}>
              {'10 min'}
            </Text>
          </Text>
          <Text style={[{fontSize: 12}]}>
            {
              'Index of the currently active dot, Number. Index of the currently active dot, Number.'
            }
          </Text>
        </View>
        <View
          style={[
            {alignSelf: 'flex-end', height: '100%', backgroundColor: '#ffaea9'},
          ]}>
          {index === 0 && (
            <View>
              <Text>1+1</Text>
              <Text>12</Text>
              <Text>1-1</Text>
            </View>
          )}
        </View>
      </View>
    </Card>
  );

  return (
    <SafeAreaView>
      <Text style={[styles.name]}>Cardarion Hart</Text>
      <Text style={[styles.description]}>Make-Up Artist and Hair Designer</Text>
      <CategoryList setAngles={setAngles} />
      <FlatList
        keyExtractor={keyExtractor}
        data={services}
        renderItem={renderCard}
      />
    </SafeAreaView>
  );
}
