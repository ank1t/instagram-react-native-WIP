export const headerConfig = [
  {
    image: require("../../assets/icons/header/header-add.png"),
    id: "ADD-POST",
    onPress: (params) => {
        console.log("Header Add tapped")
    },
  },
  {
    image: require("../../assets/icons/header/header-like.png"),
    id: "HEADER-LIKE",
    onPress: (params) => {
        console.log("Header like tapped ")
    },
  },
  {
    image: require("../../assets/icons/header/header-messages.png"),
    id: "MESSAGES",
    onPress: (params) => {
        console.log("Header Msgs tapped")
    },
    shouldShowBadge: true
  },
];

export const postConfig = [
  {
    image: require("../../assets/icons/header/header-like.png"),
    id: "POST-LIKE",
    onPress:  (params) => {
        console.log("Post Like tapped")
    },
  },
  {
    image: require("../../assets/icons/post-icons/postMsg.png"),
    id: "COMMENT",
    onPress:  (params) => {
        console.log("Post Msgs tapped")
    },
  },
  {
    image: require("../../assets/icons/post-icons/postSend.png"),
    id:"SEND",
    onPress:  (params) => {
        console.log("Post Send tapped")
    },
  },
];
