import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Linking,
  useWindowDimensions,
  TextInput,
  ScrollView,
  ImageBackground,
  FlatList,
} from "react-native";
import {
  MaterialCommunityIcons,
  AntDesign,
  FontAwesome5,
} from "@expo/vector-icons";
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from "accordion-collapse-react-native";
import { colors } from "../../assets/colors";
import {
  Avatar,
  Badge,
  Divider,
  Surface,
  Text,
  useTheme,
} from "react-native-paper";
import moment from "moment";
import { Overlay } from "react-native-elements";

import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useTheme } from "@react-navigation/native";
export default function Employees(props) {
  const { height, width } = useWindowDimensions();
  const [data, setData] = React.useState(null);
  const [greetMsg, setGreetMsg] = useState("");
  const [username, setUsername] = useState("Musa Raza");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [value, setValue] = useState("");
  const [code, setCode] = useState("CA");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [pwdIcon, setPwdIcon] = useState("eye");
  const [visibility, setVisivility] = useState(true);
  const [loading, setLoading] = useState(false);
  const [showExport, setShowExport] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const { styles } = useStyle();
  const [listData, setListData] = useState([
    {
      id: 1,
      title: "Musa Raza",
      //date: new Date.now(),
    },
    {
      id: 2,
      title: "Employee 2",
      //date: new Date.now(),
    },
  ]);
  useEffect(() => {
    const unsubscribe = props.navigation.addListener("focus", () => {
      getSaveData();
    });
    return unsubscribe;
  }, []);

  const getSaveData = async () => {
    setLoading(true);

    //await AsyncStorage.removeItem("@purchase");
    var checks = await AsyncStorage.getItem("@purchase");
    var settings = await AsyncStorage.getItem("@settings");
    var jsonDatas = JSON.parse(checks);
    var setJsonData = JSON.parse(settings);
    if (setJsonData != null) {
      setHaptic(setJsonData.haptic);
    }
    console.log(jsonDatas);
    if (jsonDatas !== null) {
      setPre(jsonDatas.purchased);
    }
    const day = new Date();
    const hr = day.getHours();
    const msgGreet =
      hr >= 0 && hr < 12
        ? "Good Morning!"
        : hr === 12
        ? "Good Noon!"
        : hr >= 12 && hr <= 17
        ? "Good Afternoon!"
        : hr > 17 && hr <= 20
        ? "Good Evening!"
        : "Good Night!";
    setGreetMsg(msgGreet);
    setLoading(false);
  };

  const EmptyList = () => {
    return (
      <Text
        style={{
          fontSize: height / 70,
          color: colors.GRAY,
          fontWeight: "300",
          marginTop: height / 45,
          marginStart: 30,
        }}
      >
        Uh Oh! Your Employee List is Empty.
      </Text>
    );
  };

  const ExportPOPUP = () => {
    return (
      <Overlay
        visible={showExport}
        overlayStyle={{
          backgroundColor: theme.colors.background,
        }}
      >
        <View style={{ padding: 10, width: height / 5 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: height / 60,
                color: colors.GRAY,
                fontWeight: "400",
                marginVertical: height / 200,
              }}
            >
              EXPORT AS
            </Text>
            <TouchableOpacity onPress={() => setShowExport(false)}>
              <MaterialCommunityIcons
                name="close-circle-outline"
                color={colors.GRAY}
                size={height / 40}
              />
            </TouchableOpacity>
          </View>

          <View style={{ alignItems: "center", marginTop: 13 }}>
            <TouchableOpacity>
              <Image
                source={require("../../assets/PDF.png")}
                style={{
                  height: height / 16.5,
                  width: height / 6.8,
                  resizeMode: "contain",
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require("../../assets/Excel.png")}
                style={{
                  height: height / 16.5,
                  width: height / 6.8,
                  resizeMode: "contain",
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </Overlay>
    );
  };

  const FilterPOPUP = () => {
    return (
      <Overlay
        visible={showFilter}
        overlayStyle={{
          backgroundColor: theme.colors.background,
        }}
      >
        <View style={{ padding: 10, width: height / 5 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: height / 60,
                color: colors.GRAY,
                fontWeight: "bold",
                marginVertical: height / 200,
              }}
            >
              FILTER
            </Text>
            <TouchableOpacity onPress={() => setShowFilter(false)}>
              <MaterialCommunityIcons
                name="close-circle-outline"
                color={colors.GRAY}
                size={height / 40}
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.filterText}>All</Text>
          <Divider style={{ backgroundColor: "gray" }} />
          <Text style={styles.filterText}>Active</Text>
          <Divider style={{ backgroundColor: "gray" }} />
          <Text style={styles.filterText}>Inactive</Text>
          <Divider style={{ backgroundColor: "gray" }} />
          <Text style={styles.filterText}>Deleted</Text>
        </View>
      </Overlay>
    );
  };

  const theme = useTheme();
  return (
    <View style={[{ backgroundColor: theme.colors.background }]}>
      <StatusBar style="auto" />
      <ImageBackground
        source={require("../../assets/header.png")}
        style={{
          width: width,
          height: height / 5,
          paddingHorizontal: width / 20,
          paddingTop: height / 10,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: height / 65, color: "white" }}>
            {greetMsg}
          </Text>
          <Text style={{ fontSize: height / 65, color: "white" }}>
            {moment(Date.now()).format("ll")}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: height / 40,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Avatar.Image
              size={height / 34}
              source={require("../../assets/profPic.png")}
              style={{ backgroundColor: "white" }}
            />
            <Text
              style={{ fontSize: height / 65, color: "white", marginStart: 10 }}
            >
              {username}
            </Text>
          </View>

          <MaterialCommunityIcons
            name="bell-outline"
            color={"white"}
            size={height / 43}
          />
        </View>
      </ImageBackground>

      <View
        style={[
          {
            paddingHorizontal: width / 20,
            width: width,
            height: height / 1.2,
          },
        ]}
      >
        <ExportPOPUP />
        <FilterPOPUP />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => setShowFilter(true)}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../assets/filter.png")}
              style={{
                height: height / 11,
                width: width / 11,
                resizeMode: "contain",
              }}
            />
            <Text
              style={{
                fontSize: height / 55,
                color: colors.GRAY,
                fontWeight: "400",
                textAlign: "center",
                marginStart: 8,
              }}
            >
              All
            </Text>
          </TouchableOpacity>
          {/* <TouchableOpacity
            onPress={() => props.navigation.navigate("RequestsAdmin")}
          >
            <Image
              source={require("../../assets/Request.png")}
              style={{
                height: height / 27.5,
                width: height / 7.5,
                resizeMode: "contain",
              }}
            />
          </TouchableOpacity> */}

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity onPress={() => setShowExport(true)}>
              <Image
                source={require("../../assets/export.png")}
                style={{
                  height: height / 11,
                  width: width / 11,
                  resizeMode: "contain",
                  marginEnd: width / 7,
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => props.navigation.navigate("AddEmployeeAadmin")}
            >
              <Image
                source={require("../../assets/newtask.png")}
                style={{
                  height: height / 11,
                  width: width / 11,
                  resizeMode: "contain",
                }}
              />
            </TouchableOpacity>
          </View>
        </View>

        <Text
          style={{
            fontSize: height / 45,
            color: colors.GRAY,
            fontWeight: "300",
            textAlign: "center",
            marginBottom: height / 40,
            marginTop: -5,
          }}
        >
          EMPLOYEES
        </Text>

        <View
          style={[
            styles.txtContainer,
            {
              borderWidth: 0.5,
              borderRadius: 30,
              borderColor: colors.textColor1,
            },
          ]}
        >
          <View style={{ alignItems: "flex-end", marginStart: 13 }}>
            <AntDesign
              name="search1"
              color={colors.textColor}
              size={height / 37}
            />
          </View>
          <TextInput
            style={{
              flex: 1,
              paddingHorizontal: 16,
              fontSize: height / 55,
            }}
            onChangeText={(val) => {
              setEmail(val), setError("");
            }}
            value={email}
            placeholderTextColor={colors.GRAY}
            cursorColor="#fff"
            placeholder="Search"
            autoCorrect={false}
            returnKeyType="done"
          />
        </View>

        <FlatList
          data={listData}
          ListEmptyComponent={EmptyList()}
          style={{ marginTop: height / 70 }}
          renderItem={({ item }) => {
            return (
              <Collapse>
                <CollapseHeader>
                  <Surface
                    elevation={1}
                    style={{
                      backgroundColor: "white",
                      height: height / 15,
                      marginVertical: 10,
                      marginHorizontal: height / 180,
                      justifyContent: "center",
                      paddingHorizontal: height / 60,
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <View
                          style={{
                            height: height / 35,
                            width: 5,
                            backgroundColor: colors.green,
                          }}
                        ></View>
                        <Text
                          numberOfLines={1}
                          style={{
                            fontSize: height / 65,
                            marginStart: height / 80,
                          }}
                        >
                          {item.title}
                        </Text>
                      </View>

                      <Image
                        source={require("../../assets/Active.png")}
                        style={{
                          height: height / 43.5,
                          width: height / 14.5,
                          resizeMode: "contain",
                        }}
                      />
                    </View>
                  </Surface>
                </CollapseHeader>
                <CollapseBody>
                  <Surface
                    elevation={1}
                    style={{
                      backgroundColor: "white",
                      marginHorizontal: height / 180,
                      justifyContent: "center",
                      marginTop: -10,
                      paddingVertical: height / 60,
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        marginHorizontal: height / 40,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: height / 80,
                          fontWeight: "bold",
                          marginStart: 8,
                        }}
                      >
                        Email:
                      </Text>
                      <Text
                        style={{
                          fontSize: height / 80,
                          fontWeight: "300",
                          marginStart: 10,
                        }}
                      >
                        musaraza67@gmail.com
                      </Text>
                    </View>

                    <View
                      style={{
                        flexDirection: "row",
                        marginHorizontal: height / 40,
                        marginTop: 7,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: height / 80,
                          fontWeight: "bold",
                          marginStart: 8,
                        }}
                      >
                        Phone No:
                      </Text>
                      <Text
                        style={{
                          fontSize: height / 80,
                          fontWeight: "300",
                          marginStart: 8,
                        }}
                      >
                        +923024058011
                      </Text>
                    </View>

                    <View
                      style={{
                        flexDirection: "row",
                        marginHorizontal: height / 40,
                        marginTop: 7,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: height / 80,
                          fontWeight: "bold",
                          marginStart: 8,
                        }}
                      >
                        Start Date:
                      </Text>
                      <Text
                        style={{
                          fontSize: height / 80,
                          fontWeight: "300",
                          marginStart: 10,
                        }}
                      >
                        {moment(Date.now()).format("ll")}
                      </Text>
                    </View>

                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: 10,
                      }}
                    >
                      <Image
                        source={require("../../assets/call.png")}
                        style={{
                          height: height / 30.5,
                          width: height / 9.5,
                          resizeMode: "contain",
                        }}
                      />
                      <Image
                        source={require("../../assets/emailicon.png")}
                        style={{
                          height: height / 30.5,
                          width: height / 30.5,
                          resizeMode: "contain",
                          marginStart: -10,
                        }}
                      />
                      <Image
                        source={require("../../assets/chaticon.png")}
                        style={{
                          height: height / 30.5,
                          width: height / 12.5,
                          resizeMode: "contain",
                        }}
                      />
                      <Image
                        source={require("../../assets/smsicon.png")}
                        style={{
                          height: height / 30.5,
                          width: height / 25.5,
                          resizeMode: "contain",
                        }}
                      />
                    </View>

                    <View
                      style={{
                        position: "absolute",
                        right: 0,
                        bottom: height / 70,
                      }}
                    >
                      <TouchableOpacity
                        style={{ alignSelf: "center" }}
                        onPress={() =>
                          props.navigation.navigate("TaskDetailsAdmin")
                        }
                      >
                        <Image
                          source={require("../../assets/Assigntask.png")}
                          style={{
                            height: height / 27.5,
                            width: height / 7.5,
                            resizeMode: "contain",
                          }}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={{ alignSelf: "center", marginTop: 5 }}
                        onPress={() =>
                          props.navigation.navigate("ViewEmployeeDetails")
                        }
                      >
                        <Image
                          source={require("../../assets/View.png")}
                          style={{
                            height: height / 27.5,
                            width: height / 7.5,
                            resizeMode: "contain",
                          }}
                        />
                      </TouchableOpacity>
                    </View>
                  </Surface>
                </CollapseBody>
              </Collapse>
            );
          }}
        />
      </View>
    </View>
  );
}

const useStyle = () => {
  const { height, width } = useWindowDimensions();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    centerItems: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    centerText: {
      textAlign: "center",
      color: colors.WHITE,
      fontSize: 22,
    },
    btnStyle: {
      backgroundColor: colors.MAIN,
      padding: 50,
    },

    txtBack: {
      marginBottom: 10,
      overflow: "hidden",
      resizeMode: "contain",
      borderRadius: 10,
    },
    txtContainer: {
      padding: 7,
      paddingVertical: 13,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    filterText: {
      fontSize: height / 60,
      color: colors.GRAY,
      fontWeight: "400",
      marginVertical: height / 200,
      marginTop: 10,
      paddingStart: 10,
    },
  });
  return { styles };
};
