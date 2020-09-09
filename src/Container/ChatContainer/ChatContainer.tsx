import React, { ReactElement } from "react";
import style from "./chatcontainer.module.scss";
import ChatSection from "../../Components/Chats/ChatSection/ChatSection";
import MessageEnv from "../../Components/Messages/MessageENV.tsx/MessageEnv";
interface Props {}

export default function ChatContainer({}: Props): ReactElement {
  return (
    <div className={style["container"]}>
      <div className={style["right"]}>
        <ChatSection />
      </div>

      <div className={style["middle"]}>
        <MessageEnv />
      </div>
      <div className={style["left"]}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, nisi
        in? Velit ullam aut, explicabo aliquid quis saepe ipsum esse.
      </div>
    </div>
  );
}
