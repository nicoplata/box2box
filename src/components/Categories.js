import { View, Text, FlatList, StyleSheet } from 'react-native'
import { categories } from '../data/categories'
import React from 'react'
import CategoryItem from './CategoryItem'
import { colors } from '../theme/colors'

const Categories = ({navigation}) => {
  return (
    <View style={styles.container}>
        <FlatList
            data={categories}
            keyExtractor={key => key}
            renderItem={({item}) => (
              <CategoryItem  navigation={navigation} item={item} />
            )}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.heavyBlue,
  }
})

export default Categories