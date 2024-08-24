import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeInDown, FadeOut } from 'react-native-reanimated';

import Welcome from './../../assets/images/welcome.png';


export default function Intro({ navigation }) {
    return (
        <View className='flex-1 flex justify-end'>
            <Image className='h-full w-full absolute' source={Welcome} />

            {/* <LinearGradient
                colors={['transparent', '#18181b']}
                style={{ width: wp(100), height: hp(70) }}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 0.8 }}
                className='flex justify-end pb-12 space-y-8'
            > */}
                <Animated.View entering={FadeInDown.delay(100).springify()} className='flex items-center'>
                    <Text style={{ fontSize: hp(5) }} className='text-white font-bold tracking-wide'>
                        Best <Text className='text-rose-500'>Workouts</Text>
                    </Text>
                    <Text style={{ fontSize: hp(5) }} className='text-white font-bold tracking-wide'>
                        For You
                    </Text>
                </Animated.View>

                <Animated.View entering={FadeInDown.delay(200).springify()}>
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('Home')}
                        style={{ height: hp(7), width: wp(80) }} 
                        className='bg-rose-500 flex items-center justify-center mx-auto rounded-full border-[2px] border-neutral-200'
                    >
                        <Text style={{ fontSize: hp(3) }} className={'text-white font-bold tracking-widest'}>
                            Get Started
                        </Text>
                    </TouchableOpacity>
                </Animated.View>
            {/* </LinearGradient> */}
        </View>
  )
};
