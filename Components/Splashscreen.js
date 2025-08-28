import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator, Animated, ImageBackground } from 'react-native';

const SplashScreen = ({ navigation }) => {
    // Animated values for fade-in effects
    const fadeAnim = new Animated.Value(0);
    const fadeFooter = new Animated.Value(0);

    useEffect(() => {
        // Start fade-in animations
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
        }).start();

        Animated.timing(fadeFooter, {
            toValue: 1,
            duration: 3000,
            useNativeDriver: true,
        }).start();

        // Navigate to Home screen after 3 seconds
        const timer = setTimeout(() => {
            navigation.replace('Home');
        }, 1000);
        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <ImageBackground source={require('./College/assets/lxbackground.jpg')} style={styles.background}>
            <View style={styles.container}>
                <Animated.Image
                    source={require('./College/assets/Lxorxos.jpg')}
                    style={[styles.logo, { opacity: fadeAnim }]}
                />
                
                {/* Custom loader with a golden color for premium feel */}
                <ActivityIndicator size="large" color="#FFD700" style={styles.loader} />

                {/* Footer text: Powered by XORXOS */}
                <Animated.Text style={[styles.poweredBy, { opacity: fadeFooter }]}>
                    Powered by XORXOS
                </Animated.Text>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent overlay for sleek look
    },
    logo: {
        width: 180,
        height: 180,
        marginBottom: 20,
        borderRadius: 20,
    },
    loader: {
        marginTop: 20,
    },
    poweredBy: {
        position: 'absolute',
        bottom: 30,
        fontSize: 16,
        color: '#301500', // Gold color for elegance
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'uppercase',
        letterSpacing: 1,
        textShadowColor: 'rgba(255, 215, 0, 0.8)', // Subtle glow effect
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5,
    },
});

export default SplashScreen;
