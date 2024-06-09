import {TailwindProvider} from 'nativewind'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import { SafeAreaView, ScrollView } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';
import BasketScreen from './screens/BasketScreen';
import { TransitionPresets } from '@react-navigation/stack';
import PreparingOrderScreen from './screens/PreparingOrderScreen';
import DeliveryScreen from './screens/DeliveryScreen';




const Stack = createNativeStackNavigator();

// const Stack = createStackNavigator();


 

export default function App() {
  return (
    
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name='Restaurant' component={RestaurantScreen} />
          <Stack.Screen name='Basket' component={BasketScreen} 
          options={{headerShown:false ,  presentation:'modal',}} />
          <Stack.Screen name='PreparingOrderScreen' 
          component={PreparingOrderScreen}
          options={{ presentation:'fullScreenModal' , headerShown: false }} />

        <Stack.Screen name='Delivery' component={DeliveryScreen} 
        options={{ presentation: 'fullScreenModal' , headerShown:false,}}/>

        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  
  );
}

//presentation:'modal',
// ...TransitionPresets.RevealFromBottomAndroid


