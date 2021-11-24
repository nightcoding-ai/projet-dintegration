import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer'

import DrawerContainer from '../screens/DrawnerContainer/DrawerContainer';

// Import the files for the navigation
import HomeScreen from '../screens/Home/HomeScreens';
import PartnersScreen from '../screens/Partners/PartnersScreen';
import ProductListScreen from '../screens/ProductList/ProductListScreen';
import ProductsScreen from '../screens/Products/ProductsScreen';
import SearchScreen from '../screens/Search/SearchScreen';
import LogRegScreen from '../screens/LogRegScreen/LogRegScreen'
import CartScreen from '../screens/Cart/Cart';

const Stack = createStackNavigator();

function MainNavigator() {
  return(
    <Stack.Navigator
      screenOptions={{
          headerTitleStyle: {
            fontWeight: 'bold',
            textAlign: 'center',
            alignSelf: 'center'

          }
      }}
    >
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Partners' component={PartnersScreen}/>
      <Stack.Screen name='Products' component={ProductsScreen}/>
      <Stack.Screen name='ProductList' component={ProductListScreen} />
      <Stack.Screen name='Search' component={SearchScreen} />
      <Stack.Screen name='LoginRegister' component={LogRegScreen} />
      <Stack.Screen name='Cart' component={CartScreen}/>
    </Stack.Navigator>
  )
}



 const Drawer = createDrawerNavigator();

function DrawerStack() {
  return(
    <Drawer.Navigator
      drawerPosition='left'
      initialRouteName='Main'
      drawerStyle={{
        width: 250
      }}
      screenOptions={{headerShown: false}}
      drawerContent={({navigation})=> <DrawerContainer navigation={navigation}/>}
    >
      <Drawer.Screen name='Main' component={MainNavigator} />
    </Drawer.Navigator>
  )
}


 export default function AppContainer() {
  return(
    <NavigationContainer>
      <DrawerStack/>
    </NavigationContainer>
  )
};


