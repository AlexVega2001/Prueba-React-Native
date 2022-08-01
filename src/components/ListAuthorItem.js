import React from 'react';
import { StyleSheet } from 'react-native';
import { Avatar, Card } from 'react-native-paper';
import { ListPlays } from './ListPlays';

export const ListAuthorItem = ({resp, nav}) => {

    const getObras = (item) => {
        nav.navigate('ListPlays',{item});
    }

    return (
        <Card style={ styles.container } onPress={()=> (getObras(resp))}>
            <Card.Title
                left={(props) => <Avatar.Icon {...props} icon="account-box" />}
                title={ resp }
            />
        </Card>
    )
}

const styles = StyleSheet.create({
    container: {
      margin: 20,
      padding: 5,
      borderStyle: 'solid',
      borderColor: 'black'
    }
});
