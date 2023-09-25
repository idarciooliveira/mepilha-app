import { Text, Image, StyleSheet } from 'react-native'
import OnBoarding from 'react-native-onboarding-swiper'
import { router } from 'expo-router'
import Screen from '../../components/screen'

export default function Welcome() {
    return (
        <Screen>
            <OnBoarding
                onDone={() => router.replace('/auth/signin')}
                controlStatusBar={false}
                containerStyles={{ flex: 1 }}
                showSkip={false}
                nextLabel={'Próximo'}
                pages={[
                    {
                        backgroundColor: '#0BA4FF',
                        image: <Image style={styles.img}
                            source={require('../../assets/onboarding02-min.jpg')} />
                        ,
                        title: <Text style={styles.text}>
                            Descubra projetos emocionantes e seja um apoiador.
                        </Text>,
                        subtitle: ''
                    },
                    {
                        backgroundColor: '#0BA4FF',
                        image: <Image style={styles.img}
                            source={require('../../assets/onboarding01-min.jpg')} />
                        ,
                        title: <Text style={styles.text}>
                            Explore, apoie e seja parte da mudança que deseja ver.
                        </Text>,
                        subtitle: ''
                    },
                    {
                        backgroundColor: '#0BA4FF',
                        image: <Image style={styles.img}
                            source={require('../../assets/onboarding03-min.jpg')} />
                        ,
                        title: <Text style={styles.text}>
                            Entre na ação! Apoiar nunca foi tão fácil.
                        </Text>,
                        subtitle: ''
                    }
                ]}
            />
        </Screen>
    )
}
const styles = StyleSheet.create({
    img: {
        width: '100%',
        height: '100%',
        opacity: 0.5,
    },
    text: {
        position: 'absolute',
        color: '#fff',
        fontWeight: '500',
        fontSize: 20,
        width: '90%',

    }
})