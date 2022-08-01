import React from 'react';
import { Appbar } from 'react-native-paper';

export const HeaderApp = ({ nav, screen, title, icon }) => {

    const Nav = () => {
        nav.navigate(screen);
    };

    return (
        <Appbar.Header>
        <Appbar.Content title={ title } />
        <Appbar.Action icon={ icon } onPress={Nav} />
        </Appbar.Header>
    )
}
