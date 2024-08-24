import { View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons'

import Avatar from './../../assets/images/avatar.png';
import ImageSlider from '../components/ImageSlider';
import BodyParts from '../components/BodyParts';

export default function Home({ navigation }) {
  return (
    <SafeAreaView className='flex-1 bg-white flex space-y-5' edges={['top']}>
        <StatusBar style='dark'/>

        <View className='flex-row justify-between items-center mx-5'>
            <View className='space-y-2'>
                <Text style={{ fontSize: hp(4.5)}} className='font-bold tracking-wider text-neutral-700'>
                    READY TO
                </Text>
                <Text style={{ fontSize: hp(4.5)}} className='font-bold tracking-wider text-rose-500'>
                    WORKOUT
                </Text>
            </View>

            <View className='flex justify-center items-center space-y-2'>
                <Image source={Avatar} style={{ height: hp(6), width: hp(6) }} className='rounded-full' />

                <View className='bg-neutral-200 rounded-full flex justify-center items-center border-[3px] border-neutral-300' style={{ height: hp(5.5), width: hp(5.5)}}>
                    <Icon name='notifications' size={30} color='gray' />
                </View>
            </View>
        </View>

        {/* <View>
            <ImageSlider />
        </View> */}

        <View className='flex-1'>
            <BodyParts navigation={navigation} />
        </View>
    </SafeAreaView>
  )
}