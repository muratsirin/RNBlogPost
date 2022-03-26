import React, { useEffect } from "react";
import { Box } from "native-base";
import { ProfileInfo } from "../components/profile-screen/profile-info.component";
import { Auth } from "../components/auth/auth.component";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { onAuthStateChange } from "../../../redux/authentication/authentication.slice";

export const ProfileScreen = ({ navigation }) => {
  const currentUser = "";
  const auth = getAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch(onAuthStateChange(JSON.stringify(user.providerData)));
    });
  }, [auth, dispatch]);

  return (
    <Box
      _dark={{ bg: "dark.50" }}
      _light={{ bg: "blueGray.50" }}
      px={2}
      py={2}
      flex={1}
      alignItems={!currentUser ? "center" : "stretch"}
      justifyContent="center"
    >
      {currentUser ? (
        <ProfileInfo
          onSignOut={() => {}}
          user="Murat Sirin"
          isLoading={false}
          error={""}
        />
      ) : (
        <Auth navigation={navigation} />
      )}
    </Box>
  );
};
