import LottieView from 'lottie-react-native';

function ActivityIndicator({ visible = false }) {
    if (!visible) return null;

    return (
        <LottieView
            loop
            autoPlay
            style={{
                flex: 1,
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                zIndex: 10,
            }}
            source={require('../assets/animations/loader.json')} />)

}

export default ActivityIndicator