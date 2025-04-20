import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackNavigation } from '../../navigation/types';

export default function Home() {
    const navigation = useNavigation<StackNavigationProp<RootStackNavigation>>();

    return (
        <SafeAreaView>
            <TouchableOpacity onPress={() => {
                navigation.goBack();
            }}>
                <Text>Hello, world! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis maiores accusantium iste autem voluptatem quas itaque quam laboriosam aliquid, aspernatur provident doloremque nemo aut placeat, consequuntur fuga sequi reprehenderit recusandae velit, corrupti consectetur sint minus eligendi error! Magni soluta vitae sed error, eum, corrupti reprehenderit, esse totam in necessitatibus omnis.</Text>
            </TouchableOpacity>
        </SafeAreaView>);
}
