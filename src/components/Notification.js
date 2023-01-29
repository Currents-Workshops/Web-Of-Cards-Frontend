import { useToast } from "@chakra-ui/react";

export default function Notification(props) {
  const toast = useToast();
  return toast({
    variant: props.variant,
    position: props.position,
    title: props.title,
    description: props.desc,
    status: props.status,
    duration: props.duration,
    isClosable: props.isClosable,
  });
}
