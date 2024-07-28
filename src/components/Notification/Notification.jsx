import { Notification } from "@mantine/core";
import "@mantine/core/styles/global.css";
import "@mantine/core/styles/Notification.css";

export default function Pop({ added }) {
  return <Notification title={added}></Notification>;
}
