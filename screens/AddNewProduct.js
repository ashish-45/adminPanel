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

const AddNewProduct = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.textinput}>ADD NEW PRODUCT</Text>
        <Image
          style={{
            height: 170,
            width: 170,
            alignItems: "center",
            marginLeft: 50,
            marginBottom: 20,
          }}
          source={require("../images/product.jpg")}
        />
        <View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Product Code"
              placeholderTextColor="#003f5c"
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Product Name"
              placeholderTextColor="#003f5c"
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Product Price"
              placeholderTextColor="#003f5c"
            />
          </View>
          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginText}>SUBMIT</Text>
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
    fontSize: 25,
    marginBottom: 10,
    color: "red",
  },
  inputView: {
    backgroundColor: "#EBEBCC",
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
    backgroundColor: "#D6B8D8",
    fontWeight: "bold",
  },
});

export default AddNewProduct;
