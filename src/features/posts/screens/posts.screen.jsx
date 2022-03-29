import React from "react";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Box, FlatList, Fab, Icon } from "native-base";
import { SearchBar } from "../../../components/search-bar/search-bar.component";
import { PostInfoCard } from "../components/post-info-card/post-info-card.component";
import { LoadingSpinner } from "../../../components/utility/loading-spinner.component";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import {
  selectError,
  selectIsLoading,
  selectPosts,
} from "../../../redux/post/post.slice";
import { selectCurrentUser } from "../../../redux/authentication/authentication.slice";

export const PostsScreen = ({ navigation }) => {
  const currentUser = useSelector(selectCurrentUser);
  const posts = useSelector(selectPosts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <Box
      _dark={{ bg: "dark.50" }}
      _light={{ bg: "blueGray.50" }}
      px={2}
      py={2}
      flex={1}
      justifyContent="center"
      alignItems="center"
    >
      <SafeArea />
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <SearchBar />
          {currentUser !== "" && (
            <Fab
              renderInPortal={false}
              colorScheme="indigo"
              shadow={2}
              size="sm"
              icon={
                <Icon color="white" as={MaterialIcons} name="edit" size="sm" />
              }
              onPress={() => navigation.navigate("AddPost")}
            />
          )}

          <FlatList
            data={posts}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("PostDetailScreen", {
                      post: item,
                    })
                  }
                >
                  <PostInfoCard
                    key={item.id}
                    post={item}
                    navigation={navigation}
                  />
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item) => item.id}
          />
        </>
      )}
    </Box>
  );
};
