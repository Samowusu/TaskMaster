import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import DraggableFlatList, {
  ScaleDecorator,
} from "react-native-draggable-flatlist";
import AddIcon from "../../../assets/svgs/addIcon";
import { TxtBold } from "../../screens/Landing/LandingStyles";
import { TaskItem, MovableTask, TASK_ITEM_HEIGHT } from "./TaskItem";
import { Theme } from "../../config/theme";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import DotIcon from "../../../assets/svgs/dotIcon";
import PlayIcon from "../../../assets/svgs/playIcon";
import { AddTaskImage } from "./AddTaskImage";
import { Button } from "../commons/Button";
import { TasksList } from "./TasksList";

Tasks.defaultProps = {
  onPress: () => {
    console.log("pressed");
  },
  newTasks: [
    { title: "Task 1", key: "one" },
    { title: "Task 2", key: "two" },
    { title: "Task 3", key: "three" },
  ],
};

export function Tasks({
  toggleCreateTaskModal,
  toggleStartSessionModal,
  newTasks,
}) {
  const [tasksDataState, setTasksDataState] = useState(newTasks);
  const [chooseTasksState, setChooseTasksState] = useState(false);
  const [selectedTasksState, setSelectedTasksState] = useState([]);

  // const selectTaskHandler = (value) => {
  //   setSelectedTasksState((prevState) => {
  //     const found = prevState.find((taskId) => taskId === value);
  //     if (found) {
  //       return prevState.filter((taskId) => taskId !== found);
  //     } else {
  //       return [...prevState, value];
  //     }
  //   });
  // };

  const togglePlayButton = (value) => {
    console.log("fired");
    setChooseTasksState(value);
    console.log({ chooseTasksState });
  };

  return (
    <>
      <AddTaskImage />

      {/* Tasks Lists */}
      <TasksList onTogglePlayButton={togglePlayButton} />

      {/* Add/Play Button */}

      {chooseTasksState ? (
        <Button onPress={toggleStartSessionModal}>
          <PlayIcon />
        </Button>
      ) : (
        <Button onPress={toggleCreateTaskModal}>
          <AddIcon />
        </Button>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    // borderWidth: 1,
    // borderColor: "red",
    flex: 1,
    position: "relative",
    backgroundColor: Theme.colors.monoLight200,
  },
  imageContainer: {
    width: 250,
    height: 250,
  },
  image: {
    width: "100%",
    height: "100%",
    flex: 1,
    resizeMode: "contain",
  },
  taskText: {
    marginTop: 10,
    textAlign: "center",
    color: Theme.colors.secondaryDark200,
    fontFamily: "Poppins_500Medium",
    fontSize: Theme.fonts.l,
  },
  tasksList: {
    // borderWidth: 1,
    // borderColor: "black",
    width: "100%",
    height: "100%",
    paddingHorizontal: 15,
  },
  tasksListTitles: {
    // borderWidth: 1,
    // borderColor: "green",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 5,
  },
  deleteButtonsContainer: {
    flexDirection: "row",

    width: 150,
    justifyContent: "space-between",
    alignItems: "center",
  },
  tasksContainer: {
    flex: 1,
    // borderWidth: 1,
    // borderColor: "green",
  },

  buttonContainer: {
    width: 60,
    height: 60,
    justifyContent: "center",
    // alignItems: "center",
    // borderWidth: 1,
    // borderColor: "black",
    position: "absolute",
    left: "40%",
    bottom: "5%",
    borderRadius: 100,
    zIndex: 100,
  },
  button: {
    backgroundColor: Theme.colors.primary,
    width: "100%",
    height: "100%",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: Theme.colors.monoLight,
  },
  boxWithShadow: {
    shadowColor: "rgba(5, 218, 247, 0.729)",
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 8,
  },
});
