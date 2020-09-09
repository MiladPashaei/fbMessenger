import React, { ReactElement } from "react";
import style from "./chatSection.module.scss";
import { IDATA } from "../../../FAKEDATA";
import ChatItem from "../ChatItem/ChatItem";
import { useSelector } from "react-redux";
interface Props {}

export default function ChatContainer({}: Props): ReactElement {
  const chatList = useSelector((state: IDATA) => state.chatList);
  return (
    <div className={style["container"]}>
      <div className={style["header"]}>
        <h1>Dummy Messenger</h1>
      </div>
      <div className={style["body"]}>
        {chatList.map((item) => {
          return <ChatItem chatData={item} />;
        })}
      </div>
    </div>
  );
}
