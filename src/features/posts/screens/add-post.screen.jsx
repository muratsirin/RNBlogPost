import React, { useState, useContext } from "react";
import { AntDesign } from "@expo/vector-icons";
import {
  Box,
  VStack,
  Stack,
  Text,
  Button,
  Image,
  Input,
  TextArea,
  IconButton,
  AspectRatio,
} from "native-base";
import { PostsContext } from "../../../services/posts/posts.context";
import * as ImagePicker from "expo-image-picker";

export const AddPostScreen = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState();
  const { addPost, isLoading, error } = useContext(PostsContext);

  const selectImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      alert("Gallery permission is required for upload an image to your post");
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled) {
      return;
    }

    setImage({ localUri: pickerResult.uri });
  };

  const onPress = () => {
    addPost(title, content, image ? image.localUri : "");
  };

  return (
    <Box
      _dark={{ bg: "dark.50" }}
      _light={{ bg: "blueGray.50" }}
      px={2}
      py={2}
      flex={1}
      justifyContent="center"
    >
      <Box alignItems="center" mb="3">
        {image ? (
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image
              source={{
                uri: image.localUri,
              }}
              alt="Alternate Text"
            />
          </AspectRatio>
        ) : (
          <IconButton
            variant="solid"
            colorScheme="indigo"
            _icon={{ as: AntDesign, name: "picture", color: "white" }}
            onPress={selectImage}
          />
        )}
      </Box>
      <Stack space={3}>
        <Input
          size="md"
          placeholder="What about your post?"
          onChangeText={(value) => setTitle(value)}
        />
        <TextArea
          h={20}
          placeholder="Your post content"
          onChangeText={(value) => setContent(value)}
        />
        <Button colorScheme="indigo" onPress={onPress}>
          <Text fontSize={18}>Save</Text>
        </Button>
      </Stack>
    </Box>
  );
};
