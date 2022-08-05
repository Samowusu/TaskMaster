import { StyleSheet, Text, View, Dimensions, Pressable } from "react-native";
import React from "react";
import Modal from "react-native-modal";
import { Theme } from "../../config/theme";

BaseModal.defaultProps = {
  children: <Text>Welcome to the Action Modal</Text>,
  visible: true,
  toggleModal: () => {
    console.log("toggleModal");
  },
  modalHeight: 2,
  title: "Action Modal",
  duration: false,
  buttons: true,
  firstButtonText: "first button",
  secondButtonText: "second button",
};

const PAGE_HEIGHT = Dimensions.get("window").height;

export function BaseModal({
  children,
  visible,
  toggleModal,
  modalHeight,
  title,
  duration,
  buttons,
  firstButtonText,
  secondButtonText,
  onPressSecondButton,
}) {
  const disableModalHandler = () => {
    toggleModal();
  };
  return (
    <Modal
      isVisible={visible}
      animationIn={"slideInUp"}
      animationOut={"slideOutDown"}
      animationInTiming={500}
      animationOutTiming={500}
      style={styles.modal(duration)}
      onBackdropPress={disableModalHandler}
      onBackButtonPress={disableModalHandler}
      backdropOpacity={duration ? 0.6 : 0}
    >
      <View style={styles.modalContainer(modalHeight, duration)}>
        <View
          style={{
            backgroundColor: Theme.colors.monoLight,
            flex: 3,
            borderRadius: 50,
          }}
        >
          <View style={styles.titleTextContainer}>
            <Text style={styles.titleText}>{title}</Text>
            {duration && (
              <Text
                style={{
                  ...styles.titleText,
                  color: Theme.colors.secondaryDark200,
                }}
              >
                ·select duration
              </Text>
            )}
          </View>
          <View style={styles.modalContents}>{children}</View>
        </View>
        {buttons && (
          <View style={styles.buttonsContainer}>
            <Pressable onPress={disableModalHandler}>
              <Text
                style={{ ...styles.titleText, color: Theme.colors.monoLight }}
              >
                {firstButtonText}
              </Text>
            </Pressable>
            <Pressable onPress={onPressSecondButton}>
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
      backgroundColor: Theme.colors.primary,
      // borderWidth: 2,
      // borderColor: "blue",
    };
  },
  titleTextContainer: {
    // borderWidth: 2,
    // borderColor: "red",
    paddingTop: 20,
    paddingLeft: 20,
    backgroundColor: Theme.colors.monoLight,
    borderTopEndRadius: 50,
    borderTopStartRadius: 50,
    flexDirection: "row",
  },
  titleText: {
    fontSize: Theme.fonts.l,
    fontFamily: "Poppins_500Medium",
    color: Theme.colors.primary,
    textTransform: "uppercase",
  },
  modalContents: {
    flex: 1,
    backgroundColor: Theme.colors.monoLight,
    // borderWidth: 2,
    // borderColor: "black",
    borderBottomEndRadius: 50,
    borderBottomStartRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  buttonsContainer: {
    flex: 1,
    maxHeight: 80,

    // borderRadius: 50,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: Theme.colors.primary,
  },
  addTaskButton: {
    backgroundColor: Theme.colors.monoLight,
    paddingVertical: 8,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
});