import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { addPost } from "../../../redux/post/post.actions";
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
import * as ImagePicker from "expo-image-picker";

export const AddPostScreen = () => {
  const dispatch = useDispatch();
  const [post, setPost] = useState({});

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

    setPost({ ...post, image: pickerResult.uri });
  };

  const onPress = () => {
    dispatch(addPost(post));
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
        {post.image ? (
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image
              source={{
                uri: post.image,
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
          onChangeText={(title) => setPost({ ...post, postTitle: title })}
        />
        <TextArea
          h={20}
          placeholder="Your post content"
          onChangeText={(content) => setPost({ ...post, postContent: content })}
        />
        <Button colorScheme="indigo" onPress={onPress}>
          <Text fontSize={18}>Save</Text>
        </Button>
      </Stack>
    </Box>
  );
};
