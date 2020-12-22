import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  typesView: {
    marginLeft: wp(5),
  },
  topHeading: {
    fontSize: 26,
    fontWeight: 'bold',
    marginVertical: hp(1),
    marginHorizontal: wp(3),
  },
  name: {
    fontSize: 20,
    fontWeight: 'normal',
    marginVertical: hp(0.5),
    marginHorizontal: wp(3),
  },
  description: {
    fontSize: 14,
    fontWeight: 'bold',
    marginVertical: hp(1),
    marginHorizontal: wp(3),
  },
  typesTet: {
    fontSize: 16,
    fontWeight: 'normal',
  },
  selectedType: {
    fontWeight: 'bold',
  },
  selectedTypeButtom: {
    alignSelf: 'center',
    width: wp(8),
    height: hp(0.5),
    backgroundColor: '#ffaea9',
  },
  cardContainer: {
    borderRadius: 12,
    elevation: 10,
    backgroundColor: 'white',
  },
  selectedCard: {
    backgroundColor: 'black',
  },
  cardRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardRightView: {alignSelf: 'flex-start'},
  angleNameSelected: {
    fontSize: 20,
    color: 'white',
  },
  angleName: {
    fontSize: 20,
  },
  angleDescriptionSelected: {
    fontSize: 12,
    color: 'white',
  },
  angleDescription: {
    fontSize: 12,
  },
  angleAvatar: {
    alignSelf: 'flex-end',
  },
  selectedAvatarStyle: {
    borderWidth: 2,
    borderColor: '#d4af37',
    borderStyle: 'solid',
  },
  cardIconsRow: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
  },

  rating: {
    backgroundColor: '#f0f3f8',
    borderRadius: 7,
    width: wp(5),
    height: wp(5),
    alignSelf: 'center',

    alignItems: 'center',
    justifyContent: 'center',
  },

  ratingSelected: {
    backgroundColor: '#a1a1a1',
    borderRadius: 7,
    width: wp(5),
    height: wp(5),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timings: {
    borderColor: '#a1a1a1',
    borderWidth: 1,
    borderRadius: 10,
    marginLeft: wp(3),
    width: wp(12),
    alignItems: 'center',
  },
  selectedTiming: {
    borderColor: '#d4af37',
    borderWidth: 1,
    borderRadius: 10,
    marginLeft: wp(3),
    width: wp(12),
    alignItems: 'center',
  },
  selectedTimeText: {
    fontSize: 15,
    color: '#d4af37',
  },
  timeText: {
    fontSize: 15,
    color: '#a1a1a1',
  },
  selectedDayAvailability: {
    fontSize: 12,
    color: 'white',
    marginVertical: hp(1),
  },
  dayAvailability: {
    fontSize: 12,
    color: '#a1a1a1',
    marginVertical: hp(1),
  },
  fontBold: {
    fontWeight: 'bold',
  },
});
