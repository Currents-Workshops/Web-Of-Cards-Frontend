import { useToast } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import React from "react";
export default function Notification(props) {
  const toast = useToast();
  return (
    <Button
      onClick={() =>
        toast({
          variant: props.variant,
          position: props.position,
          title: props.title,
          description: props.desc,
          status: props.status,
          duration: props.duration,
          isClosable: props.isClosable,
        })
      }
    >
      Show Toast
    </Button>
  );
}
