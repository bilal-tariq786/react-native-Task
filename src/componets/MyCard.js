import React from 'react';
import {FlatList, View} from 'react-native';
import {Avatar, Button, Card, Icon, Image, Text} from 'react-native-elements';

import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {Pressable} from 'react-native';
import styles from '../styles/styles';
import img from '../assets/oval.jpg';

import {times} from '../data/data';

export default function Mycard(props) {
  const item = props.item;
  const index = props.index;
  const isSelected = props.isSelected;

  const keyExtractor = (item, index) => index.toString();

  const renderCardItem = ({item, index}) => (
    <View style={[isSelected ? styles.selectedTiming : styles.timings]}>
      <Text style={[isSelected ? styles.selectedTimeText : styles.timeText]}>
        {item}
      </Text>
    </View>
  );

  return (
    <Card
      containerStyle={[
        styles.cardContainer,
        isSelected && styles.selectedCard,
      ]}>
      <View style={[styles.cardRow]}>
        <View style={[styles.cardRightView]}>
          <Text
            style={isSelected ? styles.angleNameSelected : styles.angleName}>
            {item.name}
          </Text>
          <Text
            style={
              isSelected
                ? styles.angleDescriptionSelected
                : styles.angleDescription
            }>
            {item.description}
          </Text>
        </View>
        <View style={styles.angleAvatar}>
          <Avatar
            size="medium"
            containerStyle={[isSelected && styles.selectedAvatarStyle]}
            source={img}
            rounded
            activeOpacity={0.7}
          />
        </View>
      </View>
      <View style={styles.cardIconsRow}>
        <Text
          style={[
            {alignSelf: 'center', marginHorizontal: widthPercentageToDP(1)},
          ]}>
          gem
        </Text>
        <View style={[isSelected ? styles.ratingSelected : styles.rating]}>
          <Text style={[{fontSize: 10}]}>{item.rating}</Text>
        </View>
        <Text
          style={[
            {alignSelf: 'center', marginHorizontal: widthPercentageToDP(1)},
          ]}>
          heart
        </Text>
      </View>
      <Text
        style={[
          isSelected ? styles.selectedDayAvailability : styles.dayAvailability,
        ]}>
        {'Day availability: '}
        <Text style={styles.fontBold}> {item.availability}</Text>
      </Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        keyExtractor={keyExtractor}
        data={times}
        renderItem={renderCardItem}
      />
    </Card>
  );
}
