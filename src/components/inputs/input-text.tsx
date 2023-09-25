

import { StyleSheet, TextInput, TextInputProps } from 'react-native'
import { colors } from '../../config/colors';

export default function InputText(props: TextInputProps) {
    return (
        <TextInput style={styles.input_text} {...props} />
    );

}

const styles = StyleSheet.create({
    input_text: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 16,
        fontSize: 16,
        color: colors.text,
        borderColor: colors.border,
    }
})