import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Button,
  TextInput,
} from "react-native";

const AddNewUser = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.textinput}>USER LOGIN</Text>
        <Image
          style={{
            height: 170,
            width: 170,
            alignItems: "center",
            marginLeft: 35,
            marginBottom: 0,
          }}
          source={require("../images/user.png")}
        />
        <View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Email"
              placeholderTextColor="#003f5c"
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="First Name"
              placeholderTextColor="#003f5c"
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Last Name"
              placeholderTextColor="#003f5c"
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Password"
              placeholderTextColor="#003f5c"
              secureTextEntry={true}
            />
          </View>
          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 120,

  },
  textinput: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 5,
    color: "red",
  },
  inputView: {
    backgroundColor: "#b3defc",
    borderRadius: 10,
    width: "100%",
    height: 45,
    marginBottom: 15,
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  loginBtn: {
    width: 250,
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#6cb4df",
    fontWeight: "bold",
  },
});

export default AddNewUser;
