import React from 'react';
import { View, FlatList, Text } from 'react-native';

//Hooks
import { useFetchPlaysFragment } from '../hooks/useFetch';

//Components
import { HeaderApp } from './HeaderApp';

export const ListPlaysDetails = ({ navigation, route }) => {

  const playsDetails = useFetchPlaysFragment(route.params.item);

  console.log(playsDetails);

  return (
    <View>
        <HeaderApp nav={ navigation } title={ 'Lists Plays Details' } screen={ 'ListPlays' } icon={ 'arrow-left-bold-box' }/>
        <FlatList
            data={ playsDetails }  
            renderItem={ getPlaysDetails }
        />
    </View>
  )
}
