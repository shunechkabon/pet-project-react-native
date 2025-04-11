import { Platform, StyleSheet } from 'react-native';
import { fonts } from '../../../constants/fonts';

export default StyleSheet.create({
    mainWrapper: {
        margin: 20,
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontFamily: fonts.ComfortaaRegular,
    },
    welcomeText: {
        fontSize: 18,
        fontFamily: fonts.MontserratRegular,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#EAE9FB',
        padding: 4,
        borderRadius: 20,
        marginTop: 30,
        marginBottom: 30,
    },
    loginBtn: {
        alignItems: 'center',
        backgroundColor: '#F8F8F9',
        padding: 10,
        borderRadius: 20,
        flex: 1,
    },
    registerBtn: {
        alignItems: 'center',
        padding: 10,
        borderRadius: 20,
        flex: 1,
    },
    titleContainer: {
        gap: 4,
    },
    inputContainer: {
        borderWidth: 1,
        borderRadius: 20,
        marginVertical: 4,
        paddingHorizontal: 24,
        paddingVertical: Platform.select({
            android: 12,
            ios: 14,
            default: 12,
        }),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    input: {
        padding: 0,
    },
    activePasswordBtn: {
        height: 20,
        width: 20,
        backgroundColor: '#6a932b',
    },
    disabledPasswordBtn: {
        height: 20,
        width: 20,
        backgroundColor: '#7a5143',
    },
    loginBtnContainer: {
        marginTop: 50,
        padding: 12,
        backgroundColor: '#C2A1F9',
        borderRadius: 20,
        alignItems: 'center',
        color: 'white',
    },
    loginText: {
        color: 'white',
    },
});
