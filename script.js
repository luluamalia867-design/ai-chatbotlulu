   function sendMessage() {
      const input = document.getElementById("userInput");
      const chat = document.getElementById("chat");
      const userText = input.value.toLowerCase();

      if (userText === "") return;

      chat.innerHTML += `<p><b>Kamu:</b> ${input.value}</p>`;

      let response = "Aku belum mengerti 😢";

      if (userText.includes("halo") || userText.includes("hai")) {
        response = "Halo juga 😊";
      } else if (userText.includes("nama")) {
        response = "Aku AI sederhana buatan Lulu";
      } else if (userText.includes("kamu siapa")) {
        response = "Aku chatbot AI yang dibuat khusus untuk kamu";
      } else if (userText.includes("muhammad akbar alfares")){
        response = "Hallo Pacar luluu apa kabar?";
      } else if (userText.includes("terima kasih")) {
        response = "Sama-sama 💙";
      } else {
        response = "Aku belum mengerti 😢";
      }
      chat.innerHTML += `<p><b>AI:</b> ${response}</p>`;
      chat.scrollTop = chat.scrollHeight;
      input.value = "";
}