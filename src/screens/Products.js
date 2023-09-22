import { View, FlatList, SafeAreaView, Pressable, Text } from 'react-native'
import React, {useEffect, useState} from 'react'
import Search from '../components/Search';
import Header from '../components/Header';
import ProductItem from '../components/ProductItem';
import { products } from '../data/products';

const Products = ({ category, route, navigation }) => {

  const [productFiltered, setProductFiltered] = useState([]);
  const [textInput, setTextInput] = useState(null);

  const { item } = route.params;

  useEffect(() => {
    const filterByCategory = products.filter((e) => e.category === category);
    setProductFiltered(filterByCategory);

    if (textInput) {
      const prod = products.filter(
        (e) => e.title.toLowerCase() === textInput.toLowerCase()
      );
      setProductFiltered(prod);
    }
  }, [ category, textInput ]);

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