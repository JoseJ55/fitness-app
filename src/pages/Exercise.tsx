import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { fetchBodyPart } from '../../api/exercise';
import { StatusBar } from 'expo-status-bar';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import ExerciseList from '../components/ExerciseList';
import { ScrollView } from 'react-native-virtualized-view';

export default function Exercise({ route }) {
    const { item } = route.params;

    const navigation = useNavigation();

    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        if (item) getExercise(item.name);
    }, [item]);

    const getExercise = async (bodypart) => {
        let data = await fetchBodyPart(bodypart);
        setExercises(data);
    }

    return (
        <ScrollView>
            <StatusBar style='light' />
            <Image
                source={item.image}
                style={{ width: wp(100), height: hp(45) }}
                className='rounded-b-[40px]'
            />

            <TouchableOpacity
                onPress={() => navigation.goBack()}
                className='bg-rose-500 mx-4 absolute flex justify-center items-center pr-1 rounded-full'
                style={{ height: hp(5.5), width: hp(5.5), marginTop: hp(7) }}
            >
                <Icon name='caret-back-outline' size={hp(4)} color='white' />
            </TouchableOpacity>

            <View className='mx-4 space-y-3 mt-4'>
                <Text style={{ fontSize: hp(3) }} className='font-semibold text-neutral-700'>
                    {item.name} exercises
                </Text>
                <View className='mb-10'>
                    <ExerciseList data={exercises} />
                </View>
            </View>
        </ScrollView>
    )
}