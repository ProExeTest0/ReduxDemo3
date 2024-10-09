import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  GetUserDetailAPI,
  saveUserDetail,
  UserDetailsAction,
} from '../../redux/actions/UserDetailAction';

const User = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetUserDetailAPI());
  }, []);

  const userDetail = useSelector(
    state => state.UserDetailReducer.initialUsers.users,
  );

  //   console.log('===============', userDetail);

  return (
    <SafeAreaView style={styles.container}>
      {/* <Text>User</Text> */}
      <FlatList
        data={userDetail}
        renderItem={({item}) => {
          //   console.log(item);
          return (
            <View style={styles.userDetailContainer}>
              <View style={styles.userDetailext}>
                <Text>
                  {item.firstName} {item.lastName}
                </Text>
                <Text>{item.age}</Text>
                <Text>{item.gender}</Text>
                <Text numberOfLines={1} style={{}}>
                  {item.address.city}, {item.address.state},{' '}
                  {item.address.country}.
                </Text>
              </View>
              <Image source={{uri: item.image}} style={styles.userImage} />
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default User;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userDetailContainer: {
    borderWidth: 1,
    alignItems: 'center',
    backgroundColor: 'pink',
    borderRadius: 15,
    marginHorizontal: 25,
    marginVertical: 10,
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userDetailext: {
    flex: 1,
    justifyContent: 'space-between',
    gap: 5,
    // backgroundColor: 'yellow',

    marginVertical: 10,
    marginHorizontal: 7,
  },
  userImage: {
    marginHorizontal: 7,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 15,
    resizeMode: 'contain',
    height: 100,
    width: 100,
  },
});
