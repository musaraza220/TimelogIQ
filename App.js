import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./ui/Login";
import GetStarted from "./ui/GetStarted";
import AccountType from "./ui/AccountType";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { Image, useColorScheme, useWindowDimensions } from "react-native";
import { colors } from "./assets/colors";
import {
  Card,
  Title,
  Paragraph,
  List,
  MD2DarkTheme,
  MD3LightTheme,
  MD3DarkTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import IndRegistration from "./ui/Individual/IndRegistration";
import ComRegistration from "./ui/company/ComRegistration";
import PayType from "./ui/company/PayType";
import EmpHome from "./ui/Individual/EmpHome";
import Tasks from "./ui/Individual/Tasks";
import Chat from "./ui/Individual/Chat";
import Attendance from "./ui/Individual/Attendance";
import Settings from "./ui/Individual/Settings";
import NewTask from "./ui/Individual/NewTask";
import TaskDetails from "./ui/Individual/TaskDetails";
import EditTask from "./ui/Individual/EditTask";
import AdminHome from "./ui/adminuser/AdminHome";
import TasksAdmin from "./ui/adminuser/TasksAdmin";
import TaskDetailsAdmin from "./ui/adminuser/TaskDetailsAdmin";
import Employees from "./ui/adminuser/Employees";
import AddEmployeeAadmin from "./ui/adminuser/AddEmployeeAdmin";
import EditTaskAdmin from "./ui/adminuser/EditTaskAdmin";
import AttendnaceAdmin from "./ui/adminuser/Attendance/AttendanceAdmin";
import RequestsAdmin from "./ui/adminuser/RequestsAdmin";
import RequestDetails from "./ui/adminuser/RequestDetails";
import AdminTeam from "./ui/adminuser/AdminTeam";
import EditAttendanceAdmin from "./ui/adminuser/Attendance/EditAttendanceAdmin";
import StartTask from "./ui/Individual/StartTask";
import AttendanceHistory from "./ui/adminuser/Attendance/AttendanceHistory";
import AttendanceDetailsAdmin from "./ui/adminuser/Attendance/AttendanceDetailsAdmin";
import ChatAdmin from "./ui/adminuser/ChatRequest/ChatAdmin";
import ViewEmployeeDetails from "./ui/adminuser/ViewEmployeeDetails";

const Tab = createMaterialBottomTabNavigator();

const Stack = createStackNavigator();

function MyTabs() {
  const scheme = useColorScheme();
  const { height, width } = useWindowDimensions();
  return (
    <Tab.Navigator labeled={false} initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={EmpHome}
        options={{
          tabBarIcon: ({ size, focused, color }) => {
            return focused ? (
              <Image
                style={{
                  width: height / 10,
                  height: height / 22,
                  tintColor: null,
                  resizeMode: "contain",
                }}
                source={require("./assets/Home.png")}
              />
            ) : (
              <Image
                style={{
                  width: height / 13,
                  height: height / 30,
                  tintColor: null,
                  resizeMode: "contain",
                }}
                source={require("./assets/homedark.png")}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Tasks"
        component={Tasks}
        options={{
          tabBarIcon: ({ size, focused, color }) => {
            return focused ? (
              <Image
                style={{
                  width: height / 10,
                  height: height / 22,
                  tintColor: null,
                  resizeMode: "contain",
                }}
                source={require("./assets/Task.png")}
              />
            ) : (
              <Image
                style={{
                  width: height / 13,
                  height: height / 30,
                  tintColor: null,
                  resizeMode: "contain",
                }}
                source={require("./assets/taskblack.png")}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarIcon: ({ size, focused, color }) => {
            return focused ? (
              <Image
                style={{
                  width: height / 10,
                  height: height / 22,
                  tintColor: null,
                  resizeMode: "contain",
                }}
                source={require("./assets/Chat.png")}
              />
            ) : (
              <Image
                style={{
                  width: height / 13,
                  height: height / 30,
                  tintColor: null,
                  resizeMode: "contain",
                }}
                source={require("./assets/chatblack.png")}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Attendance"
        component={Attendance}
        options={{
          tabBarIcon: ({ size, focused, color }) => {
            return focused ? (
              <Image
                style={{
                  width: height / 10,
                  height: height / 22,
                  tintColor: null,
                  resizeMode: "contain",
                }}
                source={require("./assets/Attendance.png")}
              />
            ) : (
              <Image
                style={{
                  width: height / 13,
                  height: height / 30,
                  tintColor: null,
                  resizeMode: "contain",
                }}
                source={require("./assets/attendanceblack.png")}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ size, focused, color }) => {
            return focused ? (
              <Image
                style={{
                  width: height / 10,
                  height: height / 22,
                  tintColor: null,
                  resizeMode: "contain",
                }}
                source={require("./assets/Settings.png")}
              />
            ) : (
              <Image
                style={{
                  width: height / 13,
                  height: height / 30,
                  tintColor: null,
                  resizeMode: "contain",
                }}
                source={require("./assets/settingsblack.png")}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
    // <NavigationContainer
    //   theme={scheme === "dark" ? DarkTheme : DefaultTheme}
    //   independent={true}
    // >

    // </NavigationContainer>
  );
}

function CompanyTabs() {
  const scheme = useColorScheme();
  const { height, width } = useWindowDimensions();
  return (
    <Tab.Navigator labeled={false} initialRouteName="Home">
      <Tab.Screen
        name="AdminHome"
        component={AdminHome}
        options={{
          tabBarIcon: ({ size, focused, color }) => {
            return focused ? (
              <Image
                style={{
                  width: height / 10,
                  height: height / 22,
                  tintColor: null,
                  resizeMode: "contain",
                }}
                source={require("./assets/Home.png")}
              />
            ) : (
              <Image
                style={{
                  width: height / 13,
                  height: height / 30,
                  tintColor: null,
                  resizeMode: "contain",
                }}
                source={require("./assets/homedark.png")}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="ChatAdmin"
        component={ChatAdmin}
        options={{
          tabBarIcon: ({ size, focused, color }) => {
            return focused ? (
              <Image
                style={{
                  width: height / 10,
                  height: height / 22,
                  tintColor: null,
                  resizeMode: "contain",
                }}
                source={require("./assets/Requestblue.png")}
              />
            ) : (
              <Image
                style={{
                  width: height / 13,
                  height: height / 30,
                  tintColor: null,
                  resizeMode: "contain",
                }}
                source={require("./assets/Chatrequest.png")}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="TasksAdmin"
        component={TasksAdmin}
        options={{
          tabBarIcon: ({ size, focused, color }) => {
            return focused ? (
              <Image
                style={{
                  width: height / 10,
                  height: height / 22,
                  tintColor: null,
                  resizeMode: "contain",
                }}
                source={require("./assets/Task.png")}
              />
            ) : (
              <Image
                style={{
                  width: height / 13,
                  height: height / 30,
                  tintColor: null,
                  resizeMode: "contain",
                }}
                source={require("./assets/taskblack.png")}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Employees"
        component={Employees}
        options={{
          tabBarIcon: ({ size, focused, color }) => {
            return focused ? (
              <Image
                style={{
                  width: height / 10,
                  height: height / 22,
                  tintColor: null,
                  resizeMode: "contain",
                }}
                source={require("./assets/Employees.png")}
              />
            ) : (
              <Image
                style={{
                  width: height / 13,
                  height: height / 30,
                  tintColor: null,
                  resizeMode: "contain",
                }}
                source={require("./assets/Employeesblack.png")}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="AttendnaceAdmin"
        component={AttendnaceAdmin}
        options={{
          tabBarIcon: ({ size, focused, color }) => {
            return focused ? (
              <Image
                style={{
                  width: height / 10,
                  height: height / 22,
                  tintColor: null,
                  resizeMode: "contain",
                }}
                source={require("./assets/adminattendance.png")}
              />
            ) : (
              <Image
                style={{
                  width: height / 13,
                  height: height / 30,
                  tintColor: null,
                  resizeMode: "contain",
                }}
                source={require("./assets/adminattendanceblack.png")}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ size, focused, color }) => {
            return focused ? (
              <Image
                style={{
                  width: height / 10,
                  height: height / 22,
                  tintColor: null,
                  resizeMode: "contain",
                }}
                source={require("./assets/Settings.png")}
              />
            ) : (
              <Image
                style={{
                  width: height / 13,
                  height: height / 30,
                  tintColor: null,
                  resizeMode: "contain",
                }}
                source={require("./assets/settingsblack.png")}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
    // <NavigationContainer
    //   theme={scheme === "dark" ? DarkTheme : DefaultTheme}
    //   independent={true}
    // >

    // </NavigationContainer>
  );
}

export default function App() {
  const scheme = useColorScheme();
  return (
    <PaperProvider theme={scheme === "dark" ? MD3DarkTheme : MD3LightTheme}>
      <NavigationContainer independent={true}>
        <Stack.Navigator>
          <Stack.Screen
            name="GetStarted"
            component={GetStarted}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AccountType"
            component={AccountType}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="IndRegistration"
            component={IndRegistration}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PayType"
            component={PayType}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ComRegistration"
            component={ComRegistration}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="NewTask"
            component={NewTask}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="TaskDetails"
            component={TaskDetails}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="TaskDetailsAdmin"
            component={TaskDetailsAdmin}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="EditTask"
            component={EditTask}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Employees"
            component={Employees}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AddEmployeeAadmin"
            component={AddEmployeeAadmin}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="EditTaskAdmin"
            component={EditTaskAdmin}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RequestsAdmin"
            component={RequestsAdmin}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RequestDetails"
            component={RequestDetails}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AdminTeam"
            component={AdminTeam}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="EditAttendanceAdmin"
            component={EditAttendanceAdmin}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="StartTask"
            component={StartTask}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AttendanceHistory"
            component={AttendanceHistory}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AttendanceDetailsAdmin"
            component={AttendanceDetailsAdmin}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ViewEmployeeDetails"
            component={ViewEmployeeDetails}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MyTabs"
            component={MyTabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CompanyTabs"
            component={CompanyTabs}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
