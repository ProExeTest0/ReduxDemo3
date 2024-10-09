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
import React, {useState} from 'react';
import Header from '../components/Header';
import ImageIndex from '../helper/ImageIndex';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  AddToCartAction,
  RemoveProductAction,
} from '../../redux/actions/AddProductAction';

const ShowProduct = () => {
  const dispatch = useDispatch();
  const ProductList = useSelector(
    state => state.AddProductReducer.initialProducts,
  );

  const navigation = useNavigation();
  const products = [
    {
      brand: 'Samsung',
      img: 'file:///storage/emulated/0/Android/data/com.redux/files/Pictures/29c77b4d-e938-4eb6-ac81-185c6db48ef4.jpg',
      name: 'S23',
      price: '120000',
    },
    {
      brand: 'Apple',
      img: 'file:///storage/emulated/0/Android/data/com.redux/files/Pictures/149ceded-f41e-49f6-a3e4-b2c878f2ff79.jpg',
      name: 'IPhone 14',
      price: '131235',
    },
  ];
  const [poductList, setProductList] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <Header screen={'CartItem'} />
      <FlatList
        data={ProductList}
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
                <View>
                  <TouchableOpacity
                    style={styles.binContainer}
                    onPress={() => {
                      dispatch(RemoveProductAction(index));
                    }}>
                    <Image source={ImageIndex.BinIcon} style={styles.binIcon} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.binContainer}
                    onPress={() => {
                      navigation.navigate('AddProduct', {
                        index: index,
                        item: item,
                      });
                    }}>
                    <Image
                      source={ImageIndex.EditIcon}
                      style={styles.binIcon}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <Button
                title="Add To Cart"
                onPress={() => {
                  dispatch(AddToCartAction(item));
                }}
              />
            </View>
          );
        }}
      />
      <TouchableOpacity
        style={styles.addProduct}
        onPress={() => {
          navigation.navigate('AddProduct');
        }}>
        <Text>Add Product</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ShowProduct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
  },
  flatListContainer: {
    backgroundColor: 'skyblue',
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
  addProduct: {
    marginVertical: 20,
    backgroundColor: 'pink',
    marginHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  productText: {
    color: 'black',
    fontSize: 18,
    marginVertical: 5,
  },
  img: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
  },
});
