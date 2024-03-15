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
export default function TasksAdmin(props) {
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
      title: "Task Title 1",
      //date: new Date.now(),
    },
    {
      id: 2,
      title: "Task Title 2",
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
        There are no tasks.
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
          marginTop: -height / 7,
          marginStart: -width / 3,
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
              STAGE
            </Text>
            <TouchableOpacity onPress={() => setShowFilter(false)}>
              <MaterialCommunityIcons
                name="close-circle-outline"
                color={colors.GRAY}
                size={height / 40}
              />
            </TouchableOpacity>
          </View>

          <Text
            style={[styles.filterText, { fontWeight: "bold", marginStart: 14 }]}
          >
            All
          </Text>
          <Divider style={{ backgroundColor: "gray" }} />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 5,
            }}
          >
            <View>
              <Badge
                size={height / 70}
                style={{ backgroundColor: colors.GREENTYPE }}
              ></Badge>
            </View>

            <Text style={[styles.filterText, { marginTop: 2 }]}>Open</Text>
          </View>
          <Divider style={{ backgroundColor: "gray" }} />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 5,
            }}
          >
            <View>
              <Badge
                size={height / 70}
                style={{ backgroundColor: colors.YELLOWTYPE }}
              ></Badge>
            </View>

            <Text style={[styles.filterText, { marginTop: 2 }]}>
              In Progress
            </Text>
          </View>
          <Divider style={{ backgroundColor: "gray" }} />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 5,
            }}
          >
            <View>
              <Badge
                size={height / 70}
                style={{ backgroundColor: colors.REDTYPE }}
              ></Badge>
            </View>

            <Text style={[styles.filterText, { marginTop: 2 }]}>Delayed</Text>
          </View>
          <Divider style={{ backgroundColor: "gray" }} />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 5,
            }}
          >
            <View>
              <Badge
                size={height / 70}
                style={{ backgroundColor: colors.BLUETYPE }}
              ></Badge>
            </View>

            <Text style={[styles.filterText, { marginTop: 2 }]}>Completed</Text>
          </View>
          <Divider style={{ backgroundColor: "gray" }} />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 5,
            }}
          >
            <View>
              <Badge
                size={height / 70}
                style={{ backgroundColor: colors.BLACKTYPE }}
              ></Badge>
            </View>

            <Text style={[styles.filterText, { marginTop: 2 }]}>Cancelled</Text>
          </View>
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
        <FilterPOPUP />
        <ExportPOPUP />
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
                height: height / 10,
                width: width / 10,
                resizeMode: "contain",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setShowExport(true)}>
            <Image
              source={require("../../assets/sort.png")}
              style={{
                height: height / 10,
                width: width / 10,
                resizeMode: "contain",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setShowExport(true)}>
            <Image
              source={require("../../assets/export.png")}
              style={{
                height: height / 10,
                width: width / 10,
                resizeMode: "contain",
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate("NewTask")}
          >
            <Image
              source={require("../../assets/newtask.png")}
              style={{
                height: height / 10,
                width: width / 10,
                resizeMode: "contain",
              }}
            />
          </TouchableOpacity>
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
          TASK LIST
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

                        marginHorizontal: height / 80,
                      }}
                    >
                      <View
                        style={{
                          alignItems: "center",
                        }}
                      >
                        <Text
                          numberOfLines={1}
                          style={{
                            fontSize: height / 65,
                          }}
                        >
                          {item.title}
                        </Text>
                        <Text
                          style={{
                            fontSize: height / 80,
                            fontWeight: "300",
                            marginTop: height / 120,
                          }}
                        >
                          {moment(Date.now()).format("ll")}
                        </Text>
                      </View>

                      <View style={{}}>
                        <View>
                          <Badge
                            size={height / 70}
                            style={{ backgroundColor: colors.GREENTYPE }}
                          ></Badge>
                        </View>
                        <Text
                          style={{
                            fontSize: height / 80,
                            fontWeight: "300",
                            marginTop: height / 120,
                            textAlign: "right",
                          }}
                        >
                          Musa Raza
                        </Text>
                      </View>
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
                          fontSize: height / 70,
                          fontWeight: "bold",
                          marginStart: 8,
                        }}
                      >
                        Status:
                      </Text>
                      <Text
                        style={{
                          fontSize: height / 70,
                          fontWeight: "300",
                          marginStart: height / 23,
                        }}
                      >
                        Complete
                      </Text>
                    </View>

                    <View
                      style={{
                        flexDirection: "row",
                        marginHorizontal: height / 40,
                        marginTop: 8,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: height / 70,
                          fontWeight: "bold",
                          marginStart: 8,
                        }}
                      >
                        Start Time:
                      </Text>
                      <Text
                        style={{
                          fontSize: height / 70,
                          fontWeight: "300",
                          marginStart: height / 55,
                        }}
                      >
                        01:43:42
                      </Text>

                      <Text
                        style={{
                          fontSize: height / 70,
                          fontWeight: "bold",
                          marginStart: height / 30,
                        }}
                      >
                        End Time:
                      </Text>
                      <Text
                        style={{
                          fontSize: height / 70,
                          fontWeight: "300",
                          marginStart: height / 55,
                        }}
                      >
                        01:43:42
                      </Text>
                    </View>

                    <View
                      style={{
                        flexDirection: "row",
                        marginHorizontal: height / 40,
                        marginTop: 8,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: height / 70,
                          fontWeight: "bold",
                          marginStart: 8,
                        }}
                      >
                        Duration:
                      </Text>
                      <Text
                        style={{
                          fontSize: height / 70,
                          fontWeight: "300",
                          marginStart: height / 32,
                        }}
                      >
                        01:43:42
                      </Text>
                    </View>

                    <View
                      style={{
                        flexDirection: "row",
                        marginHorizontal: height / 40,
                        marginTop: 8,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: height / 70,
                          fontWeight: "bold",
                          marginStart: 8,
                        }}
                      >
                        Notes:
                      </Text>
                      <Text
                        style={{
                          fontSize: height / 70,
                          fontWeight: "300",
                          marginStart: height / 19,
                        }}
                      >
                        N/A
                      </Text>
                    </View>

                    <View
                      style={{
                        flexDirection: "row",
                        marginHorizontal: height / 40,
                        marginTop: 8,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: height / 70,
                          fontWeight: "bold",
                          marginStart: 8,
                        }}
                      >
                        Location:
                      </Text>
                      <Text
                        style={{
                          fontSize: height / 70,
                          fontWeight: "300",
                          marginStart: height / 28,
                        }}
                      >
                        Sialkot Pakistan
                      </Text>
                    </View>
                    <Divider
                      style={{
                        backgroundColor: colors.GRAY,
                        margin: 10,
                        marginHorizontal: height / 32,
                      }}
                    />
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <TouchableOpacity
                        onPress={() =>
                          props.navigation.navigate("AdminStartTask")
                        }
                      >
                        <Image
                          source={require("../../assets/Startbtn.png")}
                          style={{
                            height: height / 27.5,
                            width: height / 7.5,
                            resizeMode: "contain",
                          }}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() =>
                          props.navigation.navigate("TaskDetailsAdmin")
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
