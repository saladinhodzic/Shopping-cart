import { Notification } from "@mantine/core";
import "@mantine/core/styles/global.css";
import "@mantine/core/styles/Notification.css";

export default function Pop({ added }) {
  return (
    <Notification
      style={{ position: "fixed", right: 0, bottom: 0 }}
      title={added}
    ></Notification>
  );
}
