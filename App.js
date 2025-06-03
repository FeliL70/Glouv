import { NavigationContainer, useNavigation } from '@react-navigation/native';
import MyTabs from './src/navigation/tabs';



export default function App() {
  return (
    <NavigationContainer>
    <MyTabs />
  </NavigationContainer>
  );
}
