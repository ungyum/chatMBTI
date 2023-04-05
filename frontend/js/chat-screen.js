const chatInterface = document.querySelector(".chat-interface");
const sendBtn = document.querySelector(".send-btn");
const inputText = document.querySelector(".input-text");
const chatScrollbox = document.querySelector(".chat-scrollbox");
const mbtiBtnBoxChat = document.querySelector(".mbti-buttons-chat");
const ansBtn = document.querySelector(".ans-btn");
const quizUI = document.querySelector(".quiz-ui");


//스크롤 이벤트
chatScrollbox.addEventListener("scroll", (event) => {
  console.log(`scrollTop: ${chatScrollbox.scrollTop}`);
});




inputText.focus();

// 보내기 버튼
sendBtn.addEventListener("click", (e) => {
  e.preventDefault();
  inputText.focus();
  if (inputText.value === "") {
    return;
  }
  let message = inputText.value;
  inputText.value = "";
  addChatMessage(message, true);
  chatScrollbox.scrollTop = chatScrollbox.scrollHeight;
});
// 엔터키로도 보내기
inputText.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    sendBtn.click();
  }
});

// 임시 챗 생성 버튼
const assistantBtn = document.querySelector(".assistant-btn");
const userBtn = document.querySelector(".user-btn");
assistantBtn.addEventListener("click", () => {
  addChatMessage("Hello, how can I help you?", false);
  chatScrollbox.scrollTop = chatScrollbox.scrollHeight;
});
userBtn.addEventListener("click", () => {
  addChatMessage("I need help with my order", true);
  chatScrollbox.scrollTop = chatScrollbox.scrollHeight;
});

// 메시지 넣기 함수, message: 메시지내용, isUser: 사용자인지 아닌지
const addChatMessage = (message, isUser) => {
  const chatMessage = document.createElement("div");
  chatMessage.classList.add("chat-message");
  chatMessage.classList.add(isUser ? "user" : "assistant");
  if (isUser) {
    chatMessage.innerHTML = `<span class="chat"></span>`;
  } else {
    chatMessage.innerHTML = `<img
            class="profile-pic"
            src="./assets/profile-icon.png"
            alt="profile pic"
          />
          <span class="chat"
            ></span
          >`;
  }
  chatInterface.appendChild(chatMessage);
  addChatText(message);
};

// message를 .chat 중 가장 마지막거에 넣기
const addChatText = (message) => {
  const chatTexts = document.querySelectorAll(".chat");
  const lastChatText = chatTexts[chatTexts.length - 1];
  lastChatText.innerText = message;
};
