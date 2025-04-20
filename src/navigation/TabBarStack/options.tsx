import {Text, View} from 'react-native';
import {HeartIcon, LabelIcon, PawIcon} from '../../assets/icons';
import {ScreenNames} from '../../constants/screenNames';
import {fonts} from '../../constants/fonts';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/native';

const getName = (name: string) => {
    switch (name) {
        case ScreenNames.FAVORITE_PAGE:
            return 'Улюблені';
        case ScreenNames.HOME_PAGE:
            return 'Пухнастики';
        default:
            return 'Екран';
    }
};

const getIcon = (name: string, focused: boolean) => {
    switch (name) {
        case ScreenNames.FAVORITE_PAGE:
            return <HeartIcon isFocused={focused} color={'#0B0B0B'} />;
        case ScreenNames.HOME_PAGE:
            return <PawIcon isFocused={focused} color={'#0B0B0B'} />;
    }
};

export default function getTabOptions(
    route: RouteProp<Record<string, object | undefined>, string>
): BottomTabNavigationOptions {
    return {
        tabBarStyle: {
            height: 60,
            // width: '100%',
            backgroundColor: '#E5F3F5',
            borderTopRightRadius: 50,
            borderTopLeftRadius: 50,
            paddingTop: 10,
        },
        tabBarShowLabel: false,
        header: () => {
            return (
                <View
                    style={{
                        width: '100%',
                        height: 70,
                        padding: 10,
                    }}>
                    <LabelIcon />
                </View>
            );
        },
        tabBarIcon: ({ focused }) => {
            return (
                <View style={{
                    alignItems: 'center',
                    gap: 4,
                    width: 100,
                }}>
                    {getIcon(route.name, focused)}
                    <Text
                        numberOfLines={1}
                        ellipsizeMode="tail"
                        style={{
                            fontFamily: fonts.MontserratRegular,
                            color: focused ? 'black' : '#838383',
                            maxWidth: 100,
                            textAlign: 'center',
                        }}>
                        {getName(route.name)}
                    </Text>
                </View>
            );
        },
    };
}
