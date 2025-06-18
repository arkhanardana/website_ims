// CHATBOT
const imsKnowledgeBase = {
  definition: {
    keywords: [
      "apa itu ims",
      "pengertian ims",
      "definisi ims",
      "ims adalah",
      "penyakit menular seksual",
      "pms",
    ],
    responses: [
      "IMS (Infeksi Menular Seksual) adalah infeksi yang ditularkan melalui kontak seksual, termasuk hubungan vaginal, anal, dan oral. IMS dapat disebabkan oleh bakteri, virus, parasit, atau jamur.",
      "Infeksi Menular Seksual (IMS) atau Penyakit Menular Seksual (PMS) adalah kondisi infeksi yang menyebar melalui aktivitas seksual. Lebih dari 30 bakteri, virus, dan parasit dapat menyebabkan IMS.",
    ],
  },
  types: {
    keywords: ["jenis ims", "macam ims", "tipe ims", "contoh ims"],
    responses: [
      "Jenis IMS yang umum: 1) Bakteri: Gonore, Sifilis, Klamidia, 2) Virus: HIV/AIDS, Herpes, HPV, Hepatitis B, 3) Parasit: Trikomoniasis, 4) Jamur: Kandidiasis. Setiap jenis memerlukan penanganan berbeda.",
    ],
  },
  symptoms: {
    keywords: [
      "gejala ims",
      "ciri ims",
      "tanda ims",
      "sakit",
      "nyeri",
      "gatal",
      "keputihan",
      "ruam",
    ],
    responses: [
      "Gejala IMS yang perlu diwaspadai: nyeri atau gatal pada area genital, keputihan abnormal (berbau, berwarna, atau berdarah), luka atau ruam pada alat kelamin, nyeri saat buang air kecil, demam, pembengkakan kelenjar getah bening, dan nyeri panggul.",
      "Beberapa IMS dapat tanpa gejala (asimptomatik), terutama pada tahap awal. Gejala umum meliputi: sensasi terbakar saat berkemih, discharge abnormal, nyeri saat berhubungan seksual, dan perdarahan di luar menstruasi.",
    ],
  },
  prevention: {
    keywords: [
      "pencegahan ims",
      "mencegah ims",
      "cara mencegah",
      "proteksi",
      "lindungi",
      "aman",
    ],
    responses: [
      "Cara pencegahan IMS yang efektif: 1) Gunakan kondom setiap kali berhubungan seksual, 2) Batasi jumlah pasangan seksual, 3) Lakukan tes IMS rutin, 4) Komunikasi terbuka dengan pasangan tentang riwayat kesehatan seksual, 5) Hindari berbagi jarum suntik, 6) Vaksinasi (HPV, Hepatitis B).",
      "Pencegahan terbaik adalah abstinence (tidak berhubungan seksual) atau monogami dengan pasangan yang tidak terinfeksi. Jika aktif secara seksual, gunakan barrier protection seperti kondom lateks atau dental dams.",
    ],
  },
  treatment: {
    keywords: [
      "pengobatan ims",
      "obat ims",
      "terapi ims",
      "mengobati",
      "sembuh",
      "penyembuhan",
    ],
    responses: [
      "Pengobatan IMS tergantung penyebabnya: 1) IMS bakteri (gonore, sifilis, klamidia) dapat DISEMBUHKAN dengan antibiotik yang tepat, 2) IMS virus (herpes, HIV) TIDAK dapat disembuhkan total namun dapat dikelola dengan obat antiviral, 3) Penting menyelesaikan pengobatan sesuai petunjuk dokter.",
      "Beberapa IMS seperti gonore dan sifilis dapat disembuhkan dengan antibiotik. Namun, infeksi virus seperti herpes dan HIV memerlukan pengobatan jangka panjang. Pengobatan dini sangat penting untuk mencegah komplikasi serius.",
    ],
  },
  condom: {
    keywords: ["kondom", "pengaman", "kontrasepsi", "barrier", "lateks"],
    responses: [
      "Kondom adalah alat pelindung yang sangat efektif mencegah IMS. Gunakan kondom lateks atau poliuretan setiap kali berhubungan seksual (vaginal, anal, oral). Pastikan kondom digunakan dengan benar dari awal hingga akhir aktivitas seksual.",
      "Tips penggunaan kondom: 1) Periksa tanggal kedaluwarsa, 2) Buka kemasan dengan hati-hati, 3) Pasang sebelum kontak genital, 4) Tinggalkan ruang di ujung, 5) Lepas dengan hati-hati setelah selesai, 6) Gunakan kondom baru untuk setiap aktivitas seksual.",
    ],
  },
  hiv: {
    keywords: ["hiv", "aids", "human immunodeficiency virus", "virus hiv"],
    responses: [
      "HIV (Human Immunodeficiency Virus) menyerang sistem kekebalan tubuh. Jika tidak diobati, HIV dapat berkembang menjadi AIDS. HIV dapat dicegah dengan safe sex, tidak berbagi jarum, dan tersedia obat PrEP untuk pencegahan. Pengobatan ARV membantu penderita HIV hidup normal.",
      "HIV ditularkan melalui: darah, semen, cairan vagina, dan ASI. TIDAK ditularkan melalui: air liur, keringat, urin, kontak kulit biasa, atau berbagi peralatan makan. Dengan pengobatan ARV yang tepat, viral load dapat tidak terdeteksi dan tidak menular.",
    ],
  },
  gonore: {
    keywords: ["gonore", "kencing nanah", "neisseria gonorrhoeae"],
    responses: [
      "Gonore adalah IMS yang disebabkan bakteri Neisseria gonorrhoeae. Gejala pada pria: kencing nanah, nyeri saat berkemih. Pada wanita: keputihan abnormal, nyeri panggul. Dapat diobati dengan antibiotik, namun beberapa strain sudah resisten obat.",
    ],
  },
  sifilis: {
    keywords: ["sifilis", "sipilis", "treponema pallidum", "raja singa"],
    responses: [
      "Sifilis disebabkan bakteri Treponema pallidum. Stadium: 1) Primer: luka tanpa nyeri (chancre), 2) Sekunder: ruam, demam, 3) Laten: tanpa gejala, 4) Tersier: kerusakan organ. Dapat disembuhkan dengan penisilin jika diobati dini.",
    ],
  },
  herpes: {
    keywords: ["herpes", "hsv", "herpes simplex"],
    responses: [
      "Herpes disebabkan virus HSV-1 atau HSV-2. Gejala: lepuh atau luka pada area genital atau mulut, gatal, nyeri. Virus akan menetap dalam tubuh seumur hidup, namun frekuensi dan keparahan serangan dapat berkurang dengan obat antiviral.",
    ],
  },
  chlamydia: {
    keywords: ["klamidia", "chlamydia", "chlamydia trachomatis"],
    responses: [
      "Klamidia disebabkan bakteri Chlamydia trachomatis. Sering tanpa gejala, terutama pada wanita. Gejala yang mungkin: nyeri berkemih, keputihan abnormal, nyeri panggul. Dapat menyebabkan infertilitas jika tidak diobati. Mudah disembuhkan dengan antibiotik.",
    ],
  },
  testing: {
    keywords: ["tes ims", "pemeriksaan ims", "cek ims", "screening", "laboratorium"],
    responses: [
      "Tes IMS penting untuk deteksi dini. Jenis tes: 1) Tes darah (HIV, sifilis, hepatitis), 2) Tes urin (gonore, klamidia), 3) Swab genital, 4) Pap smear untuk HPV. Lakukan tes rutin jika aktif secara seksual, terutama dengan pasangan baru.",
      "Kapan perlu tes IMS: 1) Sebelum berhubungan dengan pasangan baru, 2) Jika mengalami gejala, 3) Jika pasangan terdiagnosis IMS, 4) Tes rutin tahunan untuk yang aktif seksual, 5) Jika pernah berbagi jarum suntik.",
    ],
  },
  complications: {
    keywords: ["komplikasi ims", "bahaya ims", "akibat ims", "dampak"],
    responses: [
      "Komplikasi IMS jika tidak diobati: 1) Infertilitas (kemandulan), 2) Kehamilan ektopik, 3) Penyakit radang panggul (PID), 4) Kanker serviks (HPV), 5) Kerusakan jantung dan otak (sifilis), 6) Penularan ke bayi saat hamil/melahirkan.",
      "IMS dapat meningkatkan risiko penularan HIV. Beberapa IMS seperti HPV dapat menyebabkan kanker. Pada ibu hamil, IMS dapat menyebabkan keguguran, kelahiran prematur, atau infeksi pada bayi.",
    ],
  },
  myths: {
    keywords: ["mitos ims", "fakta ims", "salah kaprah", "tidak benar"],
    responses: [
      "Mitos tentang IMS: ❌ 'Oral seks aman dari IMS' - SALAH, IMS bisa menular melalui oral seks. ❌ 'Mencuci setelah seks mencegah IMS' - SALAH, pencucian tidak efektif. ✅ FAKTA: Kondom adalah cara terbaik mencegah IMS saat berhubungan seksual.",
      "Fakta penting: 1) IMS bisa menular meski tanpa gejala, 2) Seseorang bisa terkena IMS berkali-kali, 3) IMS tidak mengenal usia, jenis kelamin, atau status sosial, 4) Pengobatan dini sangat penting, 5) Beberapa IMS bisa sembuh total dengan pengobatan tepat.",
    ],
  },
};
let isChatbotOpen = false;
let conversationContext = [];

function toggleChatbot() {
  const chatbotWindow = document.getElementById("chatbotWindow");
  isChatbotOpen = !isChatbotOpen;
  if (isChatbotOpen) {
    chatbotWindow.style.display = "flex";
    document.getElementById("chatbotInput").focus();
  } else {
    chatbotWindow.style.display = "none";
  }
}

function handleKeyPress(event) {
  if (event.key === "Enter") {
    sendMessage();
  }
}

function sendMessage() {
  const input = document.getElementById("chatbotInput");
  const message = input.value.trim();
  if (!message) return;
  addMessage(message, "user");
  input.value = "";
  showTypingIndicator();
  const sendButton = document.getElementById("sendButton");
  sendButton.disabled = true;
  setTimeout(() => {
    const response = getChatbotResponse(message);
    hideTypingIndicator();
    addMessage(response, "bot");
    sendButton.disabled = false;
  }, 1000 + Math.random() * 1000);
}

function getChatbotResponse(message) {
  const lowerMessage = message.toLowerCase().trim();
  const MATCH_THRESHOLD = 2.0;

  if (isGreeting(lowerMessage)) {
    return getGreetingResponse();
  }
  if (isThanks(lowerMessage)) {
    return getThanksResponse();
  }
  if (isGoodbye(lowerMessage)) {
    return getGoodbyeResponse();
  }

  const bestMatch = findBestMatch(lowerMessage);

  if (bestMatch && bestMatch.score >= MATCH_THRESHOLD) {
    conversationContext.push(bestMatch.topic);
    const responses = bestMatch.responses;
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    return randomResponse + getFollowUpSuggestion(bestMatch.topic);
  } else {
    return getOutOfContextResponse();
  }
}

function getOutOfContextResponse() {
  const responses = [
    "Maaf, saya tidak begitu mengerti pertanyaan Anda. Topik saya terbatas pada Infeksi Menular Seksual (IMS).",
    "Sepertinya pertanyaan Anda di luar topik pembahasan saya. Saya adalah asisten AI yang fokus pada informasi seputar IMS. Ada yang bisa saya bantu terkait itu?",
    "Mohon maaf, saya hanya bisa menjawab pertanyaan yang berkaitan dengan IMS. Silakan coba tanyakan tentang gejala, pencegahan, atau jenis-jenis IMS.",
    "Topik tersebut di luar jangkauan pengetahuan saya. Saya dirancang untuk memberikan informasi akurat mengenai IMS.",
  ];
  return responses[Math.floor(Math.random() * responses.length)];
}

function findBestMatch(message) {
  let bestScore = 0;
  let bestMatch = null;
  for (const [topic, data] of Object.entries(imsKnowledgeBase)) {
    const score = calculateMatchScore(message, data.keywords);
    if (score > bestScore) {
      bestScore = score;
      bestMatch = { topic, responses: data.responses, score };
    }
  }
  return bestScore > 0 ? bestMatch : null;
}

function calculateMatchScore(message, keywords) {
  let score = 0;
  const messageWords = message.split(" ");
  keywords.forEach((keyword) => {
    if (message.includes(keyword)) {
      score += keyword.split(" ").length * 2;
    } else {
      const keywordWords = keyword.split(" ");
      keywordWords.forEach((word) => {
        if (messageWords.some((msgWord) => msgWord.includes(word) || word.includes(msgWord))) {
          score += 0.5;
        }
      });
    }
  });
  return score;
}

function isGreeting(message) {
  const greetings = [
    "hai",
    "halo",
    "hello",
    "hi",
    "selamat",
    "pagi",
    "siang",
    "sore",
    "malam",
  ];
  return greetings.some((greeting) => message.includes(greeting));
}

function isThanks(message) {
  const thanks = ["terima kasih", "thanks", "makasih", "thx"];
  return thanks.some((thank) => message.includes(thank));
}

function isGoodbye(message) {
  const goodbyes = ["bye", "dadah", "sampai jumpa", "selamat tinggal"];
  return goodbyes.some((goodbye) => message.includes(goodbye));
}

function getGreetingResponse() {
  const greetings = [
    "Halo! Saya adalah asisten virtual untuk membantu Anda memahami tentang Infeksi Menular Seksual (IMS). Ada yang ingin Anda tanyakan?",
    "Hai! Selamat datang di layanan konsultasi IMS. Saya siap membantu menjawab pertanyaan Anda tentang kesehatan seksual.",
    "Halo! Saya di sini untuk memberikan informasi tentang IMS. Jangan ragu untuk bertanya apa saja!",
  ];
  return greetings[Math.floor(Math.random() * greetings.length)];
}

function getThanksResponse() {
  const thanks = [
    "Sama-sama! Saya senang bisa membantu. Ada pertanyaan lain tentang IMS?",
    "Terima kasih kembali! Jangan ragu bertanya jika ada hal lain yang ingin Anda ketahui.",
    "Dengan senang hati! Kesehatan Anda adalah prioritas. Ada yang ingin ditanyakan lagi?",
  ];
  return thanks[Math.floor(Math.random() * thanks.length)];
}

function getGoodbyeResponse() {
  const goodbyes = [
    "Sampai jumpa! Jaga kesehatan dan jangan ragu untuk kembali jika ada pertanyaan tentang IMS.",
    "Terima kasih sudah berkonsultasi. Tetap jaga kesehatan seksual Anda! 👋",
    "Selamat tinggal! Ingat, pencegahan selalu lebih baik daripada pengobatan. Stay safe! 🏥",
  ];
  return goodbyes[Math.floor(Math.random() * goodbyes.length)];
}

function getFollowUpSuggestion(topic) {
  const suggestions = {
    definition:
      "\n\n💡 Ingin tahu lebih lanjut tentang jenis-jenis IMS atau cara pencegahannya?",
    symptoms: "\n\n💡 Jika Anda mengalami gejala ini, sebaiknya segera konsultasi ke dokter.",
    prevention: "\n\n💡 Ingin tahu tentang penggunaan kondom yang benar atau jenis tes IMS?",
    treatment:
      "\n\n💡 Punya pertanyaan tentang IMS tertentu seperti HIV, gonore, atau sifilis?",
    testing: "\n\n💡 Ingin tahu dimana bisa melakukan tes IMS atau persiapan sebelum tes?",
  };
  return (
    suggestions[topic] || "\n\n💡 Ada pertanyaan lain tentang IMS yang ingin Anda ketahui?"
  );
}

function addMessage(message, sender) {
  const messagesContainer = document.getElementById("chatbotMessages");
  const messageDiv = document.createElement("div");
  messageDiv.className = `message ${sender}`;
  if (sender === "bot") {
    messageDiv.innerHTML = message.replace(/\n/g, "<br>");
  } else {
    messageDiv.textContent = message;
  }
  messagesContainer.appendChild(messageDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function showTypingIndicator() {
  const typingIndicator = document.getElementById("typingIndicator");
  const messagesContainer = document.getElementById("chatbotMessages");
  typingIndicator.style.display = "flex";
  messagesContainer.appendChild(typingIndicator);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function hideTypingIndicator() {
  const typingIndicator = document.getElementById("typingIndicator");
  typingIndicator.style.display = "none";
}

function showMoreInfo() {
  document.querySelector(".content-grid").scrollIntoView({
    behavior: "smooth",
  });
}
