import useData from "@/hooks/useData";
import useGenres, { Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import { ul } from "framer-motion/client";
import React from "react";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();

  if (isLoading) return <Spinner></Spinner>;

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            ></Image>
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
