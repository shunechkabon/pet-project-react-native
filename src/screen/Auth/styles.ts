import { Platform, StyleSheet } from 'react-native';
import { fonts } from '../../constants/fonts';

export default StyleSheet.create({
    mainWrapper: {
        margin: 20,
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        color: 'black',
        fontFamily: fonts.ComfortaaRegular,
    },
    welcomeText: {
        fontSize: 16,
        color: 'black',
        fontFamily: fonts.MontserratRegular,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#EAE9FB',
        padding: 4,
        borderRadius: 20,
        marginTop: 32,
        marginBottom: 30,
    },
    // loginBtn: {
    //     alignItems: 'center',
    //     backgroundColor: '#F8F8F9',
    //     padding: 10,
    //     borderRadius: 20,
    //     flex: 1,
    // },
    // registerBtn: {
    //     alignItems: 'center',
    //     padding: 10,
    //     borderRadius: 20,
    //     flex: 1,
    // },
    activeTab: {
        alignItems: 'center',
        backgroundColor: '#F8F8F9',
        padding: 10,
        borderRadius: 20,
        flex: 1,
    },
    disabledTab: {
        alignItems: 'center',
        padding: 10,
        borderRadius: 20,
        flex: 1,
        opacity: 0.7,
    },
    authText: {
        color: '#0B0B0B',
        fontSize: 14,
        fontFamily: fonts.MontserratRegular,
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
        flex: 1,
        fontFamily: fonts.MontserratRegular,
    },
    activePasswordBtn: {
        height: 15,
        width: 15,
        backgroundColor: '#6a932b',
    },
    disabledPasswordBtn: {
        height: 15,
        width: 15,
        backgroundColor: '#7a5143',
    },
    loginBtnContainer: {
        borderRadius: 25,
        backgroundColor: '#7A71BA',
        paddingVertical: 12,
        alignItems: 'center',
    },
    loginText: {
        color: 'white',
    },
    formContainer: {
        marginTop: 28,
        marginBottom: 68,
    },
});
