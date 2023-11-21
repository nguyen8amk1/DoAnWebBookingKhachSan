import React from "react";
import ChatBot from "react-simple-chatbot";
import "../../style/ChatbotComponent/Chatbot_web.scss";
import { ThemeProvider } from "styled-components";

const CHATBOT_THEME = {
  background: "#FFFEFC",
  headerBgColor: "#3abdfe",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "#fa7436",
  botFontColor: "#fff",
  userBubbleColor: "#3abdfe",
  userFontColor: "#fff",
};
const Chatbot_web = () => {
  const steps = [
    {
      id: "Greet",
      message: "Xin chào, chào mừng bạn đến với dịch vụ của chúng tôi!",
      trigger: "Done",
    },
    {
      id: "Done",
      message: "Vui lòng nhập tên của bạn!",
      trigger: "waiting1",
    },
    {
      id: "waiting1",
      user: true,
      trigger: "Name",
    },
    {
      id: "Name",
      message: "Xin chào {previousValue}, Bạn đang cần gì?",
      trigger: "issues",
    },
    {
      id: "issues",
      options: [
        {
          value: "Đặt phòng bị lỗi",
          label: "Đặt phòng bị lỗi",
          trigger: "room-error",
        },
        {
          value: "Tìm phòng giá rẻ",
          label: "Tìm phòng giá rẻ",
          trigger: "room-price",
        },
      ],
    },
    {
      id: "room-error",
      message:
        "Cảm ơn bạn đã hỏi, chúng tôi sẽ giải quyết vấn đề của bạn càng sớm càng tốt",
      end: true,
    },
    {
      id: "room-price",
      message:
        "Cảm ơn bạn đã hỏi, chúng tôi sẽ giải quyết vấn đề của bạn càng sớm càng tốt",
      end: true,
    },
  ];
  return (
    <div className="Chatbot_conponent">
      <ThemeProvider theme={CHATBOT_THEME}>
        <ChatBot steps={steps} floating={true} />
      </ThemeProvider>
    </div>
  );
};
export default Chatbot_web;
