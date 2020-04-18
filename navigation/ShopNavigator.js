import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
// import { createDrawerNavigator } from 'react-navigation-drawer';
// import { Text, Platform } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import React from 'react';
// import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { Platform } from 'react-native';

import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import Colors from '../constants/Colors';

const ProductsNavigator = createStackNavigator({
    ProductsOverview: ProductsOverviewScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform === 'android' ? Colors.primary : '',
        },
        headerTitntColor: Platform === 'android' ? 'white' : Colors.primary
    }
});

export default createAppContainer(ProductsNavigator);