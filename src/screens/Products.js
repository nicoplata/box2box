import { View, FlatList } from 'react-native'
import React, {useEffect, useState} from 'react'
import Search from '../components/Search';
import Header from '../components/Header';
import ProductItem from '../components/ProductItem';
import { products } from '../data/products';

const Products = ({ category }) => {

  const [productFiltered, setProductFiltered] = useState([]);
  const [textInput, setTextInput] = useState(null);

  console.log(textInput)

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
    <View>
      <Header title="Productos" />
      <Search textInput={textInput} setTextInput={setTextInput}  />
      <FlatList
        data={productFiltered}
        keyExtractor={products.id}
        renderItem={({item}) => <ProductItem item={item} />}
      />
    </View>
  )
}

export default Products