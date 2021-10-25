import { TodoType } from "./types/todo";
import { FC } from "react";

export const Todo: FC<Omit<TodoType, "id">> = (props) => {
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[完]" : " [未]";
  return <p>{`${completeMark} ${title}(user : ${userId})`}</p>;
};
