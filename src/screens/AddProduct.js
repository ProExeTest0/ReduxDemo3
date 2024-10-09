import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  addProduct,
  AddProductAction,
  EditProductAction,
} from '../../redux/actions/AddProductAction';
import {useDispatch} from 'react-redux';

const AddProduct = props => {
  const ProductDetail = props?.route?.params?.item;
  const ProductIndex = props?.route?.params?.index;

  const navigation = useNavigation();

  const dispatch = useDispatch();

  const [name, setName] = useState(
    ProductDetail !== undefined ? ProductDetail?.name : '',
  );
  const [brand, setBrand] = useState(
    ProductDetail !== undefined ? ProductDetail?.brand : '',
  );
  const [price, setPrice] = useState(
    ProductDetail !== undefined ? ProductDetail?.price : '',
  );

  const details = {
    name: name,
    brand: brand,
    price: price,
  };

  const HandleAddProduct = () => {
    dispatch(AddProductAction(details));
    navigation.navigate('ShowProduct');
  };

  const HandleEditProduct = () => {
    // console.log(name, brand, price, '-----------------------');
    dispatch(EditProductAction(details, ProductIndex));
    navigation.navigate('ShowProduct');
  };

  return (
    <SafeAreaView>
      <TextInput
        placeholder="Name"
        style={styles.textInput}
        value={name}
        onChangeText={txt => {
          setName(txt);
        }}
      />
      <TextInput
        placeholder="Brand"
        style={styles.textInput}
        value={brand}
        onChangeText={txt => {
          setBrand(txt);
        }}
      />
      <TextInput
        placeholder="Price"
        style={styles.textInput}
        value={price}
        onChangeText={txt => {
          setPrice(txt);
        }}
      />
      <TouchableOpacity
        style={styles.addBtn}
        onPress={() => {
          {
            ProductDetail !== undefined
              ? HandleEditProduct()
              : HandleAddProduct();
          }
        }}>
        {ProductDetail !== undefined ? <Text>Save</Text> : <Text>Add</Text>}
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default AddProduct;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    marginHorizontal: 15,
    marginVertical: 10,
    paddingVertical: 20,
    borderRadius: 15,
    paddingHorizontal: 10,
  },
  addBtn: {
    backgroundColor: 'pink',
    marginHorizontal: 15,
    marginVertical: 30,
    paddingVertical: 20,
    borderRadius: 15,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
});
