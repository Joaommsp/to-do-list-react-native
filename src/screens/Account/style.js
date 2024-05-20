import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 24,
    alignItems: "center",
  },

  userImageContainer: {
    width: "100%",
    alignItems: "center",
  },

  userImage: {
    width: 156,
    height: 156,
    marginBottom: 36,
  },

  userInfos: {
    width: "100%",
    alignItems: "center",
    marginBottom: 56,
  },

  userInfo: {
    fontSize: 18,
  },

  logoutBtn: {
    backgroundColor: "#C40C0C",
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 5,
  },

  logoutBtnText: {
    fontSize: 18,
    color: "#FFFFFF",
  },
});

export default styles;
