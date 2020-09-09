import React, { ReactElement } from "react";
import style from "./messageEnv.module.scss";
import { IDATA } from "../../../FAKEDATA";
import { useSelector } from "react-redux";
interface Props {}

export default function MessageEnv({}: Props): ReactElement {
  const selectedChat = useSelector((state: IDATA) => state.selectedChatId);
  console.log(selectedChat);
  return <div></div>;
}
