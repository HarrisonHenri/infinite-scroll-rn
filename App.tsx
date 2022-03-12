import { SafeAreaView } from 'react-native';
import { List } from './screen/List';

export default function App() {
  return (
    <SafeAreaView style={{ flex:1, backgroundColor: "#222222" }}>
      <List />
    </SafeAreaView>
  );
}