import { View, Text } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';

export default function ImageSlider() {
    const sliderImages = [
        require('../../assets/images/slide1.png'),
        require('../../assets/images/slide2.png'),
        require('../../assets/images/slide3.png'),
        require('../../assets/images/slide4.png'),
        require('../../assets/images/slide5.png'),
    ];

    const ItemCard = ({ item, index}, parallaxProps) => {
        return (
            <View style={{ width: wp(100)-70, height: hp(25) }}>
                {/* <ParallaxImage
                    source={item}
                    containerStyle={{ borderRadius: 30, flex: 1 }}
                    style={{ resizeMode: 'contain' }}
                    parallaxFactor={1}
                    {...parallaxProps}
                    /> */}
            </View>
        )
    };

    return (
        <>
            <Carousel
                data={sliderImages}
                // loop={true}
                // autoplay={true}
                renderItem={ItemCard}
                // hasParallaxImages={true}
                sliderWidth={wp(100)}
                // firstItem={1}
                // autoplayInterval={4000}
                itemWidth={wp(100)-70}
                // slideStyle={{ display: 'flex', alignItems: 'center' }}
                style={{ display: 'flex', alignItems: 'center' }}
            />
        </>
    );
};