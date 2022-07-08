import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Container, Txt, TxtBold } from "./LandingStyles";
import Calendar from "../../components/Calendar";
import Tasks from "../../components/Tasks";
import CreateTaskModal from "../../components/CreateTaskModal";
import TimePickerModal from "../../components/TimePickerModal";
import Scroller from "../../components/Scroller";
import DateCard from "../../components/DateCard";
import ActionModal from "../../components/ActionModal";

export default function Landing() {
  const [showCreateTaskModalState, setShowCreateTaskModalState] =
    useState(true);
  const [showTimePickerModal, setShowTimePickerModal] = useState(true);
  const [selectedHourState, setSelectedHourState] = useState("03");
  const [selectedMinuteState, setSelectedMinuteState] = useState("30");

  const changeHourHandler = (val) => {
    setSelectedHourState(val);
  };

  const changeMinuteHandler = (val) => {
    setSelectedMinuteState(val);
  };

  const toggleCreateTaskModalHandler = () => {
    setShowCreateTaskModalState((prevState) => !prevState);
  };

  const toggleTimePickerModalHandler = () => {
    setShowTimePickerModal((prevState) => !prevState);
  };

  return (
    <Container>
      {/* <Txt>A clean slate!</Txt>
      <TxtBold>Let's find something to do...</TxtBold>
      <Calendar />
      <Tasks onPress={toggleCreateTaskModalHandler} /> */}
      <CreateTaskModal
        toggleCreateTaskModal={toggleCreateTaskModalHandler}
        visible={showCreateTaskModalState}
        toggleTimePickerModal={toggleTimePickerModalHandler}
        hour={selectedHourState}
        minute={selectedMinuteState}
      />
      <TimePickerModal
        visible={showTimePickerModal}
        toggleModal={toggleTimePickerModalHandler}
        onChangeHour={changeHourHandler}
        onChangeMinute={changeMinuteHandler}
      />
    </Container>
  );
}

const styles = StyleSheet.create({});