export const headerConfig = [
  {
    image: require("../../assets/icons/header/header-add.png"),
    onPress: (params) => {
        console.log("Header Add tapped")
    },
  },
  {
    image: require("../../assets/icons/header/header-like.png"),
    onPress: (params) => {
        console.log("Header like tapped ")
    },
  },
  {
    image: require("../../assets/icons/header/header-messages.png"),
    onPress: (params) => {
        console.log("Header Msgs tapped")
    },
    shouldShowBadge: true
  },
];

export const postConfig = [
  {
    image: require("../../assets/icons/header/header-like.png"),
    onPress:  (params) => {
        console.log("Post Like tapped")
    },
  },
  {
    image: require("../../assets/icons/post-icons/postMsg.png"),
    onPress:  (params) => {
        console.log("Post Msgs tapped")
    },
  },
  {
    image: require("../../assets/icons/post-icons/postSend.png"),
    onPress:  (params) => {
        console.log("Post Send tapped")
    },
  },
];
