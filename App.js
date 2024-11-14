import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Button, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { WebView } from 'react-native-webview';
import { Ionicons } from '@expo/vector-icons';

function MainPage({ navigation }) {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainText}>
        A regular lifestyle,{"\n"}
        healthy eating habits,{"\n"}
        proper exercise,{"\n"}
        move your life forward
      </Text>
      <Text style={styles.paragraph}>Fill it up with healthy days</Text>

      <View style={styles.iconContainer}>
        <Ionicons name="heart" size={150} color="red" />
        <Text style={styles.countText}>{count}</Text>
      </View>

      <Text style={styles.basicText}>The day changes you</Text>
      <TouchableOpacity style={styles.eventButton} onPress={() => setCount(count + 1)}>
        <Text style={styles.eventButtonText}>Increase day</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.resetButton} onPress={() => setCount(0)}>
        <Text style={styles.eventButtonText}>Reset all</Text>
      </TouchableOpacity>

      <Text style={[styles.basicText, { marginTop: 30 }]}>Simple button!</Text>
      <Button
        title="Press me"
        color="grey"
        onPress={() => Alert.alert('You are healthy guys')}
      />
    </View>
  );
}

function FoodPage({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.foodContainer}>
      <Text style={styles.title}>Healthy Food</Text>
      
      <View style={styles.foodItem}>
        <Image style={styles.foodImage} source={require('./assets/blackbeen.png')} />
        <Text style={styles.foodText}>검은콩</Text>
      </View>
      
      <View style={styles.foodItem}>
        <Image style={styles.foodImage} source={require('./assets/vegetables.webp')} />
        <Text style={styles.foodText}>채소</Text>
      </View>
      
      <View style={styles.foodItem}>
        <Image style={styles.foodImage} source={require('./assets/beef.png')} />
        <Text style={styles.foodText}>소고기</Text>
      </View>
      
      <View style={styles.foodItem}>
        <Image style={styles.foodImage} source={require('./assets/blueberry.jfif')} />
        <Text style={styles.foodText}>블루베리</Text>
      </View>

      <View style={styles.foodItem}>
        <Image style={styles.foodImage} source={require('./assets/fish.jfif')} />
        <Text style={styles.foodText}>생선</Text>
      </View>

      <View style={styles.foodItem}>
        <Image style={styles.foodImage} source={require('./assets/nok.jpg')} />
        <Text style={styles.foodText}>녹용</Text>
      </View>
    </ScrollView>
  );
}

const ExercisePage = ({ navigation }) => {
  return (
    <View style={styles.webContainer}>
      <Text style={styles.webTitle}>Strength training</Text>
      <WebView source={{ uri: 'https://www.youtube.com/results?search_query=%EA%B7%BC%EB%A0%A5+%EC%9A%B4%EB%8F%99' }} style={styles.webView} />
    </View>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} style={styles.drawerContainer}>
      <DrawerItemList {...props} />
      <DrawerItem label="Contact us" onPress={() => alert("Contact: kimdaeun")} />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Main" drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Main" component={MainPage} />
        <Drawer.Screen name="Food" component={FoodPage} />
        <Drawer.Screen name="Exercise" component={ExercisePage} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  mainText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    lineHeight: 40,
    marginBottom: 20,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  countText: {
    position: 'absolute',
    fontSize: 60,
    fontWeight: 'bold',
    color: 'white',
    top: '32%',
  },
  eventButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#3378FF',
    borderRadius: 10,
  },
  eventButtonText: {
    fontSize: 20,
    color: 'white',
    alignSelf: 'center',
  },
  resetButton: {
    marginTop: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#800080',
    borderRadius: 30,
  },
  basicText: {
    fontSize: 20,
    color: 'hotpink',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  foodContainer: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  foodItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  foodImage: {
    width: 100,
    height: 100,
    marginRight: 16,
  },
  foodText: {
    fontSize: 20,
    color: 'black',
  },
  drawerContainer: {
    backgroundColor: 'grey',
  },
  paragraph: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'hotpink',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 16,
    textAlign: 'center',
  },
  webContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  webTitle: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
    textAlign: 'center',
  },
  webView: {
    flex: 1,
    margin: 10,
  },
});
