import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Button
} from "react-native";

const AdminPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textinput}>Admin Panel</Text>
      <Image
        style={{
          height: 250,
          width: 250,
          alignItems: "center",
          marginLeft: 80,
          marginBottom:50
        }}
        source={require("../images/dmin_1.png")}
      />
      <View style={{ flexDirection: "row" }}>
    <View style={styles.buttonStyle}>
    <TouchableOpacity>
            <Text
              style={styles.btn1}
            //   onPress={() => navigation.navigate("signup")}
            >
              Add New User
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={styles.btn1}
            //   onPress={() => navigation.navigate("signup")}
            >
              Add New Product
            </Text>
          </TouchableOpacity>
    </View>
    <View style={styles.buttonStyle}>
    <TouchableOpacity>
            <Text
              style={styles.btn1}
            //   onPress={() => navigation.navigate("signup")}
            >
              Manage User
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={styles.btn1}
            //   onPress={() => navigation.navigate("signup")}
            >
              Manage Product
            </Text>
          </TouchableOpacity>
    </View>
</View>
    </View>
  );
};

const styles = StyleSheet.create({
    textinput:{
        textAlign:'center',
        fontWeight:'bold',
        fontSize:20
    },
    btn1: {
        backgroundColor: "#FFA500",
        textAlign: "center",
        color: "#fff",
        padding: 10,
        marginHorizontal: 15,
        borderRadius: 10,
        fontWeight: "bold",
        fontSize: 18,
        marginTop:50,
      },
      btn2: {
        backgroundColor: "#FFF",
        textAlign: "center",
        color: "#000000",
        padding: 10,
        marginHorizontal: 60,
        borderRadius: 20,
        fontWeight: "bold",
        fontSize: 18,
        borderColor: "#FFA500",
        borderWidth: 3,
      },
      panel1:{
          display:'flex',
          justifyContent:'space-around'
      }
});


export default AdminPage;
