import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar, Card, Button } from 'react-native-paper';

export const ListPlaysDetailsItem = ({ resp }) => {

    console.log(resp);

    return (
        <View>
            <Text>Hola</Text>
        </View>
        // <Card style={ styles.container } onPress={()=> {console.log('Click')}}>
        //     <Card.Title
        //         left={(props) => <Avatar.Icon {...props} icon="book-open-page-variant" />}
        //         title={ resp.title }
        //     />
        //     <Card.Actions>
        //         <Button style={ styles.button } icon="star-plus" mode="contained" onPress={ () => {console.log('Click')} }>Add Favorites</Button>
        //         <Button style={ styles.button_details } icon="alert-circle-outline" mode="contained" onPress={ () => (getPlaysFragment(resp.title)) }>Details</Button>
        //     </Card.Actions>
        // </Card>
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
