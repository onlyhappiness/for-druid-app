// import { COLOR } from "@/shared/consts/color";
// import { FONT } from "@/shared/consts/typography";
// import Button from "@/shared/ui/Button";
// import { Modal, StyleSheet, Text, View } from "react-native";
// import { useModalActions, useModalState } from "../store/modalStore";

// const ModalProvider = ({ id }: { id: string }) => {
//   const modal = useModalState({ id }) || false;

//   const { closeModal } = useModalActions();

//   return (
//     <Modal
//       visible={modal && modal?.isOpen}
//       transparent={true}
//       animationType="fade"
//     >
//       <View style={styles.container}>
//         <View style={styles.modal}>
//           <View style={styles.top}>
//             {modal?.title && <Text>{modal?.title}</Text>}
//             <Text>{modal?.content}</Text>
//           </View>

//           <View style={styles.footer}>
//             <Button
//               title={modal?.confirmText || "확인"}
//               onPress={
//                 modal?.onConfirm
//                   ? modal?.onConfirm
//                   : closeModal({ id: modal.id })
//               }
//               containerStyle={
//                 modal?.cancelText
//                   ? [styles.button, { marginRight: 10 }]
//                   : styles.button
//               }
//               textStyle={styles.buttonText}
//             />
//             {modal?.cancelText && (
//               <Button
//                 title={modal?.cancelText}
//                 onPress={modal?.onCancel}
//                 containerStyle={[styles.button]}
//                 textStyle={styles.buttonText}
//               />
//             )}
//           </View>
//         </View>
//       </View>
//     </Modal>
//   );
// };

// export default ModalProvider;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "rgba(0, 0, 0, 0.5)",
//   },
//   modal: {
//     width: 300,
//     backgroundColor: "white",
//     borderRadius: 20,
//     paddingVertical: 20,
//   },
//   top: {
//     paddingVertical: 20,
//     alignItems: "center",
//   },
//   footer: {
//     paddingTop: 20,
//     paddingHorizontal: 20,
//     flexDirection: "row",
//   },
//   button: {
//     flex: 1,
//     backgroundColor: COLOR.green,
//   },
//   buttonText: {
//     fontSize: FONT.base,
//     color: "white",
//   },
// });
