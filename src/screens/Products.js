import { View, FlatList, SafeAreaView, Pressable, Text } from 'react-native'
import React, {useEffect, useState} from 'react'
import Search from '../components/Search';
import Header from '../components/Header';
import ProductItem from '../components/ProductItem';
import { useSelector } from 'react-redux';

const Products = ({ route, navigation }) => {
  const [productFiltered, setProductFiltered] = useState([]);
  const [textInput, setTextInput] = useState(null);
  const { item } = route.params;

  const products = useSelector( state => state.homeSlice.allProducts )

  const productsFilteredByCategory = useSelector(
    (state) => state.homeSlice.productsFilteredByCategory
  );

  useEffect(() => {
    
    setProductFiltered(productsFilteredByCategory);

    if (textInput) {
      const prod = products.filter(
        (e) => e.title.toLowerCase() === textInput.toLowerCase()
      );
      setProductFiltered(prod);
    }
  }, [ textInput, item ]);

  return (
    <SafeAreaView>
      <View>
        <Header title={item} />
        <Pressable onPress={() => navigation.goBack()}>
          <Text>Ir Atras</Text>
        </Pressable>
        
        <Search textInput={textInput} setTextInput={setTextInput}  />
        <FlatList
          data={productFiltered}
          keyExtractor={products.id}
          renderItem={({item}) => (
            <ProductItem navigation={navigation} item={item} />
          )}
        />
      </View>
    </SafeAreaView>
  )
}

export default Products