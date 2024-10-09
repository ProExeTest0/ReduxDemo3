import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const Header = props => {
  const cartItem = useSelector(state => state.AddProductReducer.initialCart);

  const {screen} = props;
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.headerContainer}>
      <TouchableOpacity
        style={styles.headerBtn}
        onPress={() => {
          navigation.navigate('User');
        }}>
        <Text>User's</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.headerBtn}
        onPress={() => navigation.navigate(screen)}>
        <Text style={styles.headerBtnTxt}>{cartItem.length}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    // backgroundColor: 'yellow',
    justifyContent: 'space-between',
  },
  headerBtn: {
    marginHorizontal: 10,
    backgroundColor: 'skyblue',
    paddingHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
  },
  headerBtnTxt: {
    color: 'black',
    fontSize: 20,
    padding: 5,
  },
});
