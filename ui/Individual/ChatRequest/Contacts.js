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
import { colors } from "../../../assets/colors";
import {
  Avatar,
  Badge,
  Divider,
  Surface,
  Text,
  useTheme,
} from "react-native-paper";
import { Overlay } from "react-native-elements";

import moment from "moment";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useTheme } from "@react-navigation/native";

export const Contacts = (props) => {
  const { height, width } = useWindowDimensions();
  const { styles } = useStyle();
  const [email, setEmail] = useState("");

  const [showExport, setShowExport] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [listData, setListData] = useState([
    {
      id: 1,
      title: "Musa Raza",
      message: "Text Message Text Message",
      date: "04:30 pm",
    },
    {
      id: 2,
      title: "Contact 1",
      message: "Text Message Text Message",
      date: "04:30 pm",
    },
    {
      id: 3,
      title: "Contact 2",
      message: "Text Message Text Message",
      date: "04:30 pm",
    },
  ]);

  const EmptyList = () => {
    const { height, width } = useWindowDimensions();

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

  return (
    <View style={[{ backgroundColor: "white" }]}>
      <View
        style={[
          {
            paddingHorizontal: width / 20,
            width: width,
            height: height / 1,
            backgroundColor: "white",
            marginTop: 16,
            borderRadius: 30,
          },
        ]}
      >
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
              <View
                elevation={1}
                style={{
                  backgroundColor: "white",
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View
                      style={{
                        height: height / 22,
                        width: height / 22,
                        borderColor: colors.MAIN,
                        borderWidth: 0.8,
                        borderRadius: 50,
                      }}
                    ></View>
                    <View>
                      <Text
                        numberOfLines={1}
                        style={{
                          fontSize: height / 65,
                          marginStart: height / 80,
                        }}
                      >
                        {item.title}
                      </Text>
                      {/* <Text
                        numberOfLines={1}
                        style={{
                          fontSize: height / 75,
                          marginStart: height / 80,
                          marginTop: 6,
                          color: colors.GRAY,
                          fontWeight: "300",
                        }}
                      >
                        {item.message}
                      </Text> */}
                    </View>
                  </View>
                </View>

                <Divider
                  style={{ backgroundColor: colors.GRAY, marginVertical: 10 }}
                ></Divider>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};
const useStyle = () => {
  const { width, height } = useWindowDimensions();
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
