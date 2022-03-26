import React from "react";
import { Box } from "native-base";
import { ProfileInfo } from "../components/profile-screen/profile-info.component";
import { Auth } from "../components/auth/auth.component";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentUser,
  selectLoading,
  selectError,
} from "../../../redux/authentication/authentication.slice";
import { signOut } from "../../../redux/authentication/authentication.actions";

export const ProfileScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  // const handleSignOut = () => {
  //   dispatch(signOut());
  //   if()
  // }

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
          onSignOut={() => {
            dispatch(signOut());
          }}
          user={currentUser[0].displayName}
          isLoading={isLoading}
          error={error}
        />
      ) : (
        <Auth navigation={navigation} />
      )}
    </Box>
  );
};
