import {
  Button,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ImageIndex from '../helper/ImageIndex';
import {
  EditCartProductAction,
  EdtCartProductAction,
  RemoveCartProductAction,
} from '../../redux/actions/AddProductAction';
import {useNavigation} from '@react-navigation/native';

const CartItem = () => {
  const cartList = useSelector(state => state.AddProductReducer.initialCart);
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const HandleCartItems = index => {
    // console.log(index);
    dispatch(RemoveCartProductAction(index));
  };

  const IncDecItemQuantity = (index, op) => {
    dispatch(EditCartProductAction(index, op));
  };

  return (
    <SafeAreaView style={styles.container}>
      {cartList.length === 0 ? (
        <View style={styles.noItemContainer}>
          <Text style={{color: 'black', fontSize: 18}}>No Item's In Cart</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ShowProduct');
            }}>
            <Text>Go Back</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={cartList}
          renderItem={({item, index}) => {
            return (
              <View style={styles.productContainer}>
                <View style={styles.cardInnerContainer}>
                  <View>
                    <Text style={styles.productText}>{item.name}</Text>
                    <Text style={styles.productText}>{item.brand}</Text>
                    <Text style={styles.productText}>{item.price}</Text>
                    {/* <Image source={{uri: item.img}} style={styles.img} /> */}
                  </View>
                  <View style={styles.editDeleteBtnContainer}>
                    <TouchableOpacity
                      style={styles.binContainer}
                      onPress={() => {
                        // dispatch(RemoveProductAction(index));
                        HandleCartItems(index);
                      }}>
                      <Image
                        source={ImageIndex.BinIcon}
                        style={styles.binIcon}
                      />
                    </TouchableOpacity>
                    <View style={styles.incDecContainer}>
                      <TouchableOpacity
                        style={styles.increaseDecreaseBtn}
                        onPress={() => {
                          IncDecItemQuantity(index, item.quantity + 1);
                        }}>
                        <Text
                          style={{
                            color: 'white',
                            fontWeight: 700,
                            fontSize: 24,
                          }}>
                          +
                        </Text>
                      </TouchableOpacity>
                      <Text style={styles.quantityTxt}>{item.quantity}</Text>
                      <TouchableOpacity
                        style={styles.increaseDecreaseBtn}
                        onPress={() => {
                          IncDecItemQuantity(index, item.quantity - 1);
                          // DecreaseItemQuantity(index);
                        }}>
                        <Text
                          style={{
                            color: 'white',
                            fontWeight: 700,
                            fontSize: 24,
                          }}>
                          -
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>

                <Button
                  title="Add More"
                  onPress={() => {
                    navigation.navigate('ShowProduct');
                  }}
                />
              </View>
            );
          }}
        />
      )}
    </SafeAreaView>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
  },
  noItemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartItemCart: {
    borderWidth: 1,
  },
  productContainer: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 15,
    marginHorizontal: 15,
    marginVertical: 15,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  cardInnerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productText: {
    color: 'black',
    fontSize: 18,
    marginVertical: 5,
  },
  editDeleteBtnContainer: {
    // backgroundColor: 'pink',
    alignItems: 'center',
  },
  binContainer: {
    height: 40,
    width: 40,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 10,
  },
  binIcon: {
    height: 20,
    width: 20,
  },
  incDecContainer: {
    width: 100,
    height: 30,
    // backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  quantityTxt: {
    color: 'black',
    fontSize: 20,
  },
  increaseDecreaseBtn: {
    height: 30,
    width: 30,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});
