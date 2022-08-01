import React from 'react';
import { View, FlatList, Text } from 'react-native';

//Hook
import { useFetchAuthors } from '../hooks/useFetch';

//Components
import { ListAuthorItem } from './ListAuthorItem';

export const ListsAuthors = ({nav}) => {

    const {authors} = useFetchAuthors();

    const renderItem = ({ item }) => (
        <ListAuthorItem nav={nav} resp={item} />
      )

    return (
        <View>
            <FlatList
                data={ authors }  
                renderItem={ renderItem }
            />
        </View>
    )
}
