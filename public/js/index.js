import messages from "./messages.js";

const renderChat = (data) => {
  const chat = document.createElement("div");
  chat.id = "chat";

  document.body.lastElementChild.appendChild(chat);
  chat.innerHTML = `<h1>${data[0]?.chat?.name ?? "Chat Name"}</h1>`;

  data.map((e, i) => {
    chat.innerHTML += `<p>${data[i].user.user} ${data[i].date}</p>`;
    chat.innerHTML += `<p>${data[i].message}</p>`;
  });

  document.body.appendChild(chat);
};

messages
  .getMessagesByChat("654dba33729fab06122ac596")
  .then((data) => renderChat(data.body))
  .catch((e) => console.log(e));

const socket = window.io.connect("http://localhost:3000", {
  forceNew: true,
});

socket.on("message", function (data) {
  const chat = document.getElementById("chat");
  chat.innerHTML += `<p>${data.user.name} ${data.date}</p>`;
  chat.innerHTML += `<p>${data.message}</p>`;
});
