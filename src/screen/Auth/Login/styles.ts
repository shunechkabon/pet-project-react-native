import { Platform, StyleSheet } from 'react-native';

export default StyleSheet.create({
    mainWrapper: {
        margin: 20,
        marginTop: 70,
    },
    title: {
        fontSize: 24,
    },
    welcomeText: {
        fontSize: 14,
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
    },
    input: {
        padding: 0,
    },
    enterBtn: {
        marginTop: 50,
        padding: 12,
        backgroundColor: '#C2A1F9',
        borderRadius: 20,
        alignItems: 'center',
        color: 'white',
    },
});