import React from 'react';
import { StyleSheet } from 'react-native';
import { Avatar, Card, Button } from 'react-native-paper';

export const ListPlaysItem = ({ nav, resp }) => {

    const getPlaysFragment = (item) => {
        nav.navigate('ListPlaysDetails',{item});
    }

    return (
        <Card style={ styles.container }>
            <Card.Title
                left={(props) => <Avatar.Icon {...props} icon="book-open-page-variant" />}
                title={ resp.title }
            />
            <Card.Actions>
                <Button style={ styles.button } icon="star-plus" mode="contained" onPress={ () => {console.log('Click')} }>Add Favorites</Button>
                <Button style={ styles.button_details } icon="alert-circle-outline" mode="contained" onPress={ () => {console.log('Click')} }>Details</Button>
            </Card.Actions>
        </Card>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'green', 
        display: 'flex', 
        flex: 1,
        margin: 10
    },
    button_details: {
        backgroundColor: '#9da7b0', 
        display: 'flex', 
        flex: 1
    },
    container: {
        alignContent: 'center',
        margin: 20,
        padding: 5,
        borderStyle: 'solid',
        borderColor: 'black',
        justifyContent: 'center'
    }
});