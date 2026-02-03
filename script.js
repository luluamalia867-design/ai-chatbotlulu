let tema = ["pink", "blue", "purple"];
let indexTema = 0;

function sendMessage() {
  const input = document.getElementById("userInput");
  const chat = document.getElementById("chat");
  const userText = input.value.toLowerCase();

  if (userText === "") return;

  // bubble user
  chat.innerHTML += `<div class="bubble user">${input.value}</div>`;

  let response = "Maaf aku belum mengerti 😢, coba kata lain yaa, aku masih belajar 🙏";

  if (userText.includes("halo") || userText.includes("hai")) {
    const balasan = ["Halo juga 😊", "Haii 👋", "Halo Sayangg 💙"];
    response = balasan[Math.floor(Math.random() * balasan.length)];

  } else if (userText.includes("tanya")) {
    response = "Boleh banget, kamu mau tanya apa? 💙";

  } else if (userText.includes("nama")) {
    response = "Aku chatbot AI buatan Lulu, salam kenal ya 💙";

  } else if (userText.includes("kamu siapa")) {
    response = "Aku chatbot AI yang dibuat khusus untuk kamu 🤍";

  } else if (userText.includes("muhammad akbar alfares")) {
    response = "Hallo Pacar Luluu 😆💙 apa kabar?";

  } else if (userText.includes("cape")) {
    response = "Wajar kok itu manusiawi, aku paham banget apa yang kamu rasain 💙";

  } else if (userText.includes("gada yang ngertiin")) {
    response = "Pasti berat ya 😢 tapi kamu gak sendiri, aku di sini dengerin kamu 💙";

  } else if (userText.includes("terima kasih")) {
    response = "Sama-sama 💙";

  } else if (userText.includes("pesan dari lulu")) {
    response = "Hallo sayangg 🤍 happy aniv! Aku bangga banget sama kamu. Jangan pernah ngerasa sendiri yaa. Sama aku terus okee 💙 LOVE U SAYANG";
  
  } else if (userText.includes("apa kabar")) {
    response = "aku baikk kamu gimana? 💙";

  } else if (userText.includes("makanan favorit lulu ")) {
    response = "aku dimsum mentai, seblak, bakso, salad buah💙";
  
  } else if (userText.includes("hobi lulu")) {
    response = "nyanyi, satu lagii GANGGUIN ATTA WLEE💙";

  } else if (userText.includes("lagi apa")) {
    response = "hmm lagi chatting sama kamu💙";
}


  // bubble bot
  chat.innerHTML += `<div class="bubble bot">${response}</div>`;

  chat.scrollTop = chat.scrollHeight;
  input.value = "";
}

// tombol tema
function gantiTema() {
  const box = document.querySelector(".chat-container");
  box.className = "chat-container " + tema[indexTema];
  indexTema = (indexTema + 1) % tema.length;
}

// tekan Enter
function enterKirim(e) {
  if (e.key === "Enter") sendMessage();
}
