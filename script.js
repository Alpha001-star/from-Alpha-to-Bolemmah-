const messages = [
    "💙 Bolemmah, you mean everything to me",
    "😊 You are my peace and my joy",
    "✨ Every moment with you is magic",
    "❤️ I love you more than words",
    "🥰 You are my forever",
    "❤️My Heart Desires",
    "💙My Lovely Wife",
    "✨Iyawo Mi My Wife",
    "✨My Everything",
    "My Baby i want to use my skills in coding to surprise you ",
    "💫 2026 and beyond — together"
    
  ];
  
  /* ===== CREATE STARS ===== */
  function createStars(count = 80) {
    for (let i = 0; i < count; i++) {
      const star = document.createElement("div");
      star.className = "star";
      const size = Math.random() * 2 + 1;
      star.style.width = size + "px";
      star.style.height = size + "px";
      star.style.left = Math.random() * 100 + "%";
      star.style.top = Math.random() * 100 + "%";
      star.style.animationDelay = Math.random() * 3 + "s";
      document.body.appendChild(star);
    }
  }
  
  /* ===== OPEN BOX ===== */
  function openBox() {
    const box = document.querySelector(".box");
    box.classList.add("open");
  
    messages.forEach((text, i) => {
      setTimeout(() => createMessage(text), i * 700);
    });
  
    setInterval(createHeart, 350);
    setTimeout(showLetter, 5500);

  }
  
  /* ===== MESSAGES ===== */
  function createMessage(text) {
    const msg = document.createElement("div");
    msg.className = "message";
    msg.textContent = text;
    msg.style.left = Math.random() * 60 + 20 + "%";
    document.querySelector(".messages").appendChild(msg);
    setTimeout(() => msg.remove(), 4000);
  }
  
  /* ===== HEARTS ===== */
  function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "❤️";
    heart.style.left = Math.random() * 100 + "%";
    heart.style.bottom = "0px";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 3000);
  }
  
  /* ===== AUTO LOAD ===== */
  window.onload = () => {
    createStars();
    setTimeout(openBox, 1000);
  };
  function showLetter() {
    document.getElementById("letter").classList.add("show");
  }
  
  function closeLetter() {
    document.getElementById("letter").classList.remove("show");
  }
  