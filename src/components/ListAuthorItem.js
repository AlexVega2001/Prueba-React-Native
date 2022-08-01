import React from 'react';
import { StyleSheet } from 'react-native';
import { Avatar, Card, Button } from 'react-native-paper';
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
            <Card.Actions>
                <Button style={ styles.button } icon="star-plus" mode="contained" onPress={ () => {console.log('Click')} }>Add Favorites</Button>
            </Card.Actions>
        </Card>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'green', 
        display: 'flex', 
        flex: 1
    },
    container: {
      margin: 20,
      padding: 5,
      borderStyle: 'solid',
      borderColor: 'black'
    }
});
