import React from 'react';
import { View, FlatList, Text } from 'react-native';

//Hooks
import { useFetchPlays } from '../hooks/useFetch';

//Components
import { HeaderApp } from './HeaderApp';
import { ListPlaysItem } from './ListPlaysItem';

export const ListPlays = ({route, navigation}) => {
    
    const plays = useFetchPlays(route.params.item);

    const getPlays = ({ item }) => (
        <ListPlaysItem nav={navigation} resp={item} />
    )

    return (
        <View>
            <HeaderApp nav={ navigation } title={ 'Lists Plays' } screen={ 'ListAuthorsScreen' } icon={ 'arrow-left-bold-box' }/>
            <FlatList
                data={ plays }  
                renderItem={ getPlays }
            />
        </View>
    )
}
