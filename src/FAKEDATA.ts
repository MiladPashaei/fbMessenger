export interface CHAT_LIST {
  name: string;
  id: number;
  avatar: string;
  unreadMessage: number;
}
export interface MESSAGES {
  id: number;
  sender_id: number;
  recived_id: number;
  type: string;
  content: any;
  date: Date;
}
export interface IDATA {
  name: string;
  userId: number | null;
  chatList: CHAT_LIST[];
  messages: MESSAGES[];
  selectedChatId: number | null;
  contacts: [];
  loading: boolean;
  waitingForMessages: boolean;
}
export const FakeData: IDATA = {
  name: "Milad",
  userId: 1,
  chatList: [
    { name: "esmaeil", unreadMessage: 0, id: 2, avatar: "./avatar_m.png" },
    { name: "mohana", unreadMessage: 3, id: 3, avatar: "./avatar_f.png" },
    { name: "hana", unreadMessage: 25, id: 4, avatar: "./avatar_f.png" },
    { name: "marjan", unreadMessage: 7, id: 5, avatar: "./avatar_m.png" },
    { name: "mohammad", unreadMessage: 5, id: 6, avatar: "./avatar_m.png" },
    { name: "nazanin", unreadMessage: 1, id: 7, avatar: "./avatar_f.png" },
    { name: "elika", unreadMessage: 2, id: 8, avatar: "./avatar_f.png" },
    { name: "sara", unreadMessage: 6, id: 9, avatar: "./avatar_f.png" },
    { name: "ali", unreadMessage: 9, id: 10, avatar: "./avatar_m.png" },
  ],
  messages: [
    {
      id: 59,
      sender_id: 2,
      recived_id: 1,
      type: "txt",
      content: "hello",
      date: new Date(),
    },
    {
      id: 5678,
      sender_id: 4,
      recived_id: 1,
      type: "txt",
      content: "hello",
      date: new Date(),
    },
    {
      id: 592314,
      sender_id: 5,
      recived_id: 1,
      type: "txt",
      content: "hello",
      date: new Date(),
    },
    {
      id: 59435,
      sender_id: 2,
      recived_id: 1,

      type: "txt",
      content: "hello",
      date: new Date(),
    },
    {
      id: 5954763,
      sender_id: 2,
      recived_id: 1,

      type: "txt",
      content: "hello",
      date: new Date(),
    },
    {
      id: 59346,
      sender_id: 2,
      recived_id: 1,

      type: "txt",
      content: "hello",
      date: new Date(),
    },
    {
      id: 591324,
      sender_id: 4,
      recived_id: 1,
      type: "txt",
      content: "hello",
      date: new Date(),
    },
    {
      id: 595,
      sender_id: 3,
      recived_id: 1,
      type: "txt",
      content: "hello",
      date: new Date(),
    },
    {
      id: 594,
      sender_id: 3,
      recived_id: 1,
      type: "txt",
      content: "hello",
      date: new Date(),
    },
    {
      id: 593,
      sender_id: 2,
      recived_id: 1,

      type: "txt",
      content: "hello",
      date: new Date(),
    },
    {
      id: 597,
      sender_id: 2,
      recived_id: 1,

      type: "txt",
      content: "hello",
      date: new Date(),
    },
    {
      id: 5945,
      sender_id: 3,
      recived_id: 1,
      type: "txt",
      content: "hello",
      date: new Date(),
    },
    {
      id: 59322,
      sender_id: 3,
      recived_id: 1,
      type: "txt",
      content: "hello",
      date: new Date(),
    },
    {
      id: 59444,
      sender_id: 3,
      recived_id: 1,
      type: "txt",
      content: "hello",
      date: new Date(),
    },
    {
      id: 5933,
      sender_id: 5,
      recived_id: 1,
      type: "txt",
      content: "hello",
      date: new Date(),
    },
    {
      id: 59563,
      sender_id: 5,
      recived_id: 1,
      type: "txt",
      content: "hello",
      date: new Date(),
    },
  ],
  selectedChatId: null,
  contacts: [],
  loading: false,
  waitingForMessages: false,
};
