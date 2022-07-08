import { StyleSheet, Text, View, Dimensions, Pressable } from "react-native";
import React from "react";
import Modal from "react-native-modal";

ActionModal.defaultProps = {
  children: <Text>Welcome to the Action Modal</Text>,
  visible: true,
  toggleModal: () => {
    console.log("toggleModal");
  },
  modalHeight: 2,
  title: "Action Modal",
  duration: false,
  buttons: false,
  firstButtonText: "first button",
  secondButtonText: "second button",
};

const PAGE_HEIGHT = Dimensions.get("window").height;

export default function ActionModal({
  children,
  visible,
  toggleModal,
  modalHeight,
  title,
  duration,
  buttons,
  firstButtonText,
  secondButtonText,
}) {
  const disableModalHandler = () => {
    toggleModal();
  };
  return (
    <Modal
      isVisible={visible}
      animationIn={"slideInDown"}
      animationOut={"slideOutUp"}
      animationInTiming={500}
      animationOutTiming={500}
      style={styles.modal(duration)}
      onBackdropPress={disableModalHandler}
      onBackButtonPress={disableModalHandler}
      backdropOpacity={duration ? 0.6 : 0.1}
    >
      <View style={styles.modalContainer(modalHeight, duration)}>
        <View style={styles.titleTextContainer}>
          <Text style={styles.titleText}>{title}</Text>
          {duration && (
            <Text style={{ ...styles.titleText, color: "#909CC6" }}>
              ·select duration
            </Text>
          )}
        </View>
        <View style={styles.modalContents}>{children}</View>

        {buttons && (
          <View style={styles.buttonsContainer}>
            <Pressable>
              <Text style={{ ...styles.titleText, color: "#fff" }}>
                {firstButtonText}
              </Text>
            </Pressable>
            <Pressable>
              <View style={styles.addTaskButton}>
                <Text style={styles.titleText}>{secondButtonText}</Text>
              </View>
            </Pressable>
          </View>
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: (duration) => {
    const modalPosition = duration ? "center" : "flex-end";
    return {
      backgroundColor: "transparent",
      justifyContent: modalPosition,
      margin: 0,
    };
  },
  modalContainer: (modalHeight, duration) => {
    const containerHeight = PAGE_HEIGHT / modalHeight;
    const containerRadius = duration ? 50 : 0;
    return {
      width: "100%",
      height: containerHeight,
      borderRadius: containerRadius,

      borderTopEndRadius: 50,
      borderTopStartRadius: 50,
      backgroundColor: "#01D9F7",
      // borderWidth: 2,
      // borderColor: "blue",
    };
  },
  titleTextContainer: {
    // borderWidth: 2,
    // borderColor: "red",
    paddingTop: 20,
    paddingLeft: 20,
    backgroundColor: "#fff",
    borderTopEndRadius: 50,
    borderTopStartRadius: 50,
    flexDirection: "row",
  },
  titleText: {
    fontSize: 21,
    fontFamily: "Poppins_500Medium",
    color: "#01D9F7",
    textTransform: "uppercase",
  },
  modalContents: {
    flex: 7,
    backgroundColor: "#fff",
    // borderWidth: 2,
    // borderColor: "black",
    borderBottomEndRadius: 50,
    borderBottomStartRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  buttonsContainer: {
    flex: 1,
    // borderRadius: 50,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: "#01D9F7",
  },
  addTaskButton: {
    backgroundColor: "#fff",
    paddingVertical: 5,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
});