import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const Header = ({
    title, 
    rigthIcon, 
    leftIcon, 
    rigthIconAction, 
    leftIconAction,
    color,
    size,
}) => {
  return (
    <View style={[
        styles.container,
        (leftIcon && rigthIcon) && {justifyContent: 'space-between'}
    ]}> 
        <TouchableOpacity onPress={leftIconAction}>
            {leftIcon && (
                <Icon name={leftIcon} size={size ? size : 30} color={color} />
                
            )}
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={rigthIconAction}>
            {rigthIcon && (
                <Icon name={rigthIcon} size={size ? size : 30} color={color} />
            )}
        </TouchableOpacity>
    </View>
  )
}

export default Header;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#CF4C6C',
        padding: 10,
    },
    title: {
        fontSize: 32,
        color: '#FFF',
        fontWeight: '700',
        textAlign: 'center',
    }
});