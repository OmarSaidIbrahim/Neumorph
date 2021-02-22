import React, { Component } from 'react'
import { View, StyleSheet, Dimensions, StatusBar, Animated } from 'react-native'
import dayjs from 'dayjs'

const {width} = Dimensions.get('screen');
const SIZE = width * 0.9;

export default class prova extends Component {
    state = {
        index: new Animated.Value(0),
        tick: new Animated.Value(0),
        scales: [...Array(4).keys()].map(() => new Animated.Value(0))
    }

    _timer = 0;
    _ticker = null;

    componentDidMount() {
        const current = dayjs();
        const diff = current.endOf('day').diff(current, 'seconds');
        const oneDay = 24 * 60 * 60;
        this._timer = oneDay - diff;
        this.state.tick.setValue(this._timer);
        this.state.index.setValue(this._timer - 100);

        this._animate();

        this._ticker = setInterval(() => {
            this._timer += 1;
            this.state.tick.setValue(this._timer);
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this._ticker);
        this._ticker = null;
    }

    _animate = () => {
        const scaleStaggerAnimation = this.state.scales.map((animated => {
            return Animated.spring(animated, {
                toValue: 1,
                tension: 18,
                friction: 3,
                useNativeDriver: true
            });
        }));

        Animated.parallel([
            Animated.stagger(
                1000/this.state.scales.length, 
                scaleStaggerAnimation
            ),
            Animated.timing(this.state.index, {
                toValue: this.state.tick,
                duration: 500,
                useNativeDriver: true
            })
        ]).start();
    }

    render() {
        const {index, scales: [smallQuadranScale, secondsScale, minutesScale, hoursScale]} = this.state;

        const secondDegrees = Animated.multiply(index, 6)
        const interpolated = {
            inputRange: [0,360],
            outputRange: ['0deg', '360deg']
        };
        const transformSeconds = {
            transform: [{rotate: secondDegrees.interpolate(interpolated)}, {scale: secondsScale}]
        };

        const rotateMinutes = Animated.divide(
            secondDegrees,
            new Animated.Value(60)
        );
        const transformMinutes = {
            transform: [{rotate: rotateMinutes.interpolate(interpolated)}, {scale: minutesScale}]
        };

        const rotateHours = Animated.divide(
            rotateMinutes,
            new Animated.Value(12)
        );
        const transformHours = {
            transform: [{rotate: rotateHours.interpolate(interpolated)}, {scale: hoursScale}]
        };
        return (
            <View style={styles.container}>
                <StatusBar hidden={true}/>
                <Animated.View style={[styles.mover, transformHours]}>
                    <View style={[styles.hours]}/>
                </Animated.View>
                <Animated.View style={[styles.mover, transformMinutes]}>
                    <View style={[styles.minutes]}/>
                </Animated.View>
                <Animated.View style={[styles.mover, transformSeconds]}>
                    <View style={[styles.seconds]}/>
                </Animated.View>
                <Animated.View style={[styles.smallQuadran, {transform: [{scale: smallQuadranScale}]}]}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center"
    },
    mover: {
        position: "absolute",
        width: SIZE,
        height: SIZE,
        borderRadius: SIZE / 2,
        alignItems: "center",
        justifyContent: "flex-start"
    },
    hours: {
        backgroundColor: 'rgba(0,0,0,0.4)',
        height: '15%',
        marginTop: '35%',
        width: 4,
        borderRadius: 4
    },
    minutes: {
        backgroundColor: 'rgba(0,0,0,0.8)',
        height: '25%',
        marginTop: '25%',
        width: 3,
        borderRadius: 3
    },
    seconds: {
        backgroundColor: 'rgba(227,71,134,1)',
        height: '28%',
        marginTop: '22%',
        width: 2,
        borderRadius: 2
    },
    smallQuadran: {
        width: 10,
        height: 10,
        position: "absolute",
        borderRadius: 5,
        backgroundColor: 'rgba(227,71,134,1)'
    },

})
