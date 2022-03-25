import React from "react";
import { Box } from "native-base";
import { ProfileInfo } from "../components/profile-screen/profile-info.component";
import { Auth } from "../components/auth/auth.component";

export const ProfileScreen = ({ navigation }) => {
  const user = "";
  return (
    <Box
      _dark={{ bg: "dark.50" }}
      _light={{ bg: "blueGray.50" }}
      px={2}
      py={2}
      flex={1}
      alignItems={!user ? "center" : "stretch"}
      justifyContent="center"
    >
      {user ? (
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
