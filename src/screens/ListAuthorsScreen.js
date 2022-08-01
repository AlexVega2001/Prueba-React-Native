import React from 'react';
import { View } from 'react-native';

//AppBar
import { HeaderApp } from '../components/HeaderApp';
import { ListsAuthors } from '../components/ListsAuthors';

export const ListAuthorsScreen = ({ navigation }) => {
  return (
    <View>
      <HeaderApp nav={ navigation } title={ 'ListsAuthors' } />
      <ListsAuthors />
    </View>
  )
}
