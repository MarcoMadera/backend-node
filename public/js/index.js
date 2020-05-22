import messages from "./messages.js";

const renderChat = (data) => {
  let chat = document.createElement("div");

  document.body.lastElementChild.appendChild(chat);
  chat.innerHTML = `<h1>${data[0].chat.name}</h1>`;

  data.map((e, i) => {
    chat.innerHTML += `<p>${data[i].user.user} ${data[i].date}</p>`;
    chat.innerHTML += `<p>${data[i].message}</p>`;
    console.log(data[i]);
  });

  document.body.appendChild(chat);
};

messages
  .getMessagesByChat(procces.env.CHAT_ID)
  .then((data) => renderChat(data.body))
  .catch((e) => console.log(e));

let socket = io.connect("http://localhost:3000", {
  forceNew: true,
});

socket.on("message", function (data) {
  console.log(data);
  renderChat(data);
});
