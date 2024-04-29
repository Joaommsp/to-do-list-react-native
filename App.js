import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Login from './src/screens/Login'
import CreateUser from './src/screens/CreateUser'
import Tasks from './src/screens/Tasks'
import Account from './src/screens/Account'
import About from './src/screens/About'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                // Abri a página inicial
                initialRouteName="Login"
                // Aplica estilo na barra de navegação
                screenOptions={{
                    headerTitleAlign: 'center',
                    headerTintColor: '#FFF',
                    headerStyle: { backgroundColor: '#F60' }
                }}
            >

                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />

                <Stack.Screen name="CreateUser" component={CreateUser} options={{ title: 'Cadastro de Usuário' }} />

                <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

// Cria o menu do rodapé do aplicativo
function Tabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: "#FFFFFF",
                tabBarInactiveTintColor: "#F60",
                tabBarActiveBackgroundColor: "#F60",
                tabBarStyle: { backgroundColor: "#070A52" },
                headerTitleAlign: "center",
                headerTintColor: "#FFFFFF",
                headerStyle: { backgroundColor: "#F60" }
            }}
        >
            <Tab.Screen name="Tasks" component={Tasks} options={{
                title: 'Tarefas',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="playlist-edit" size={32} color={color} />
                )
            }} />
            <Tab.Screen name="Account" component={Account} options={{
                title: 'Dados do usuário',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="account" size={32} color={color} />
                )
            }} />
            <Tab.Screen name="About" component={About} options={{
                title: 'Sobre o aplicativo',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="information-outline" size={32} color={color} />
                )
            }} />
        </Tab.Navigator>
    );
}