import { View, Text, SafeAreaView, Image, StatusBar, StyleSheet, TextInput, ScrollView } from 'react-native';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { AdjustmentsVerticalIcon, ChevronDownIcon, MagnifyingGlassIcon, UserIcon } from 'react-native-heroicons/outline';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import createClient from '../sanity'

const HomeScreen = () => {
    const navigation = useNavigation();

    const[featuredCategories , setFeaturedCategories] = useState([])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);


    useEffect( () => {
        createClient.fetch(`
        *[_type == "featured"] {
            ...,
            restaurants[]->{
              ...,
              dishes[]->
            }
          }
        ` ).then(data => {
            setFeaturedCategories(data)
        })
    },[] )

    //console.log(featuredCategories)

    return (
        <SafeAreaView style={styles.container} className="bg-white pt-5">
            {/* Header */}
            <View style={styles.header}>
                <Image
                    source={{
                        uri: 'https://links.papareact.com/wru'
                    }}
                    style={styles.image} // Use style prop instead of className
                />
                <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row' }}>
                    <View style="flex-1 bg-orange-300">
                        <Text className="font-bold text-gray-400 text-xs">Deliver Now !</Text>
                        <Text className="font-bold text-xl">Current Location
                            <ChevronDownIcon size={20} color="#00CCBB" />
                        </Text>
                    </View>
                    <View style="bg-slate-200 w-10 h-full justify-center items-center">
                        <UserIcon size={30} color="#00CCBB" />
                    </View>
                </View>
            </View>
            

            {/* /** Search */}

            <View className='flex-row items-center space-x-2 pb-2 px-2'>
                <View className='flex-row flex-1 space-x-2  bg-gray-200 p-3 mt-2'>
                    <MagnifyingGlassIcon color='#00CCBB'  />
                    <TextInput placeholder='Restaurants and Cuisines' 
                    keyboardType='default' />
                </View>
                <AdjustmentsVerticalIcon color='#00CCBB'/>
            </View>

        {/* Body */}

        <ScrollView 
        className='bg-gray-100'
        contentContainerStyle={{
            paddingBottom:100
        }}>
        {/* Categeroies Components */}
        <Categories />

        {/* Features Rows */}

       {featuredCategories?.map((category) => (
       // console.log("Map items are " +JSON.stringify(category))

        <FeaturedRow
        key={category._id}
        id={category._id}
        title={category.name}
        description={category.short_description}
        // featuredCategory="featured"
         />
        
       ))}
       

        </ScrollView>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        marginTop: StatusBar.currentHeight
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 2
    },
    image: {
        height: 28,
        width: 28,
        borderRadius: 14,
        backgroundColor: '#CCCCCC',
        marginHorizontal: 10
    }
});

export default HomeScreen;
