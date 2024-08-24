import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Animated, { FadeInDown } from 'react-native-reanimated';

const bodyParts =[
    {
        name: 'back',
        image: require('../../assets/images/back.png'),
    },
    {
        name: 'cardio',
        image: require('../../assets/images/cardio.png'),
    },
    {
        name: 'lower arms',
        image: require('../../assets/images/lowerArms.png'),
    },
    {
        name: 'lower legs',
        image: require('../../assets/images/lowerLegs.png'),
    },
    {
        name: 'chest',
        image: require('../../assets/images/chest.png'),
    },
    {
        name: 'neck',
        image: require('../../assets/images/neck.png'),
    },
    {
        name: 'shoulders',
        image: require('../../assets/images/shoulders.png'),
    },
    {
        name: 'upper arms',
        image: require('../../assets/images/upperArms.png'),
    },
    {
        name: 'upper leg',
        image: require('../../assets/images/upperLegs.png'),
    },
    {
        name: 'waist',
        image: require('../../assets/images/waist.png'),
    },
]

export default function BodyParts({ navigation }) {
  return (
    <View className='mx-4'>
      <Text style={{ fontSize: hp(3) }} className='font-semibold text-neutral-700'>Exercises</Text>

      <FlatList 
        data={bodyParts}
        numColumns={2}
        keyExtractor={item => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50, paddingTop: 20 }}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={({item, index}) => <BodyPartCard navigation={navigation} index={index} item={item} />}
      />
    </View>
  )
}

const BodyPartCard = ({navigation, item, index}) => {
    return (
        <Animated.View entering={FadeInDown.duration(400).delay(index*200).springify()}>
            <TouchableOpacity
                onPress={() => navigation.navigate('Exercise', { navigation: navigation, item: item })}
                style={{ width: wp(44), height: wp(52) }}
                className='flex justify-end p-4 mb-4'>
                    <Image
                        source={item.image}
                        resizeMode='cover'
                        style={{ width: wp(44), height: wp(52) }}
                        className='rounded-[35px] absolute'
                    />

                    <Text
                        style={{ fontSize: hp(2.3) }}
                        className='text-white font-semibold text-center tracking-wide'
                    >
                        {item?.name}
                    </Text>
            </TouchableOpacity>
        </Animated.View>
    )
}