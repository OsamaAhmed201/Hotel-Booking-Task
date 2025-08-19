import React, { useState } from "react";
import { FaWhatsapp, FaPaperPlane, FaTimes } from "react-icons/fa";
import i18n from "../../../../Translate/i18n.js"; // استدعاء i18n

export default function WhatsappChat() {
  const [message, setMessage] = useState("");
  const [showForm, setShowForm] = useState(false);

  const phoneNumber = "+20 1127141362";

  const isMobile = window.innerWidth <= 600;
  const chatBoxWidth = isMobile ? "300px" : "380px";
  const chatBoxMaxHeight = isMobile ? "400px" : "500px";

  const handleClick = () => {
    setShowForm(!showForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = /Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent)
      ? `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
    setMessage("");
    setShowForm(false);
  };


  const texts = {
    header: i18n.language === "en" ? "💬 Fixyland Chat" : "💬 دردشة فيكزلاند",
    welcome: i18n.language === "en" 
      ? "👋 Hello! How can we help you today? You can type your query and we'll respond as soon as possible."
      : "👋 مرحبًا! كيف يمكننا مساعدتك اليوم؟ يمكنك كتابة استفسارك وسنرد عليك في أقرب وقت ممكن.",
    placeholder: i18n.language === "en" ? "Type your message..." : "اكتب رسالتك هنا...",
  };

  return (
    <>
      {showForm && (
        <div
          style={{
            position: "fixed",
            bottom: "100px",
            right: "20px",
            width: chatBoxWidth,
            maxHeight: chatBoxMaxHeight,
            backgroundColor: "#ffffff",
            borderRadius: "16px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
            display: "flex",
            flexDirection: "column",
            zIndex: 10000,
          }}
        >

          <div
            style={{
              backgroundColor: "#128C7E",
              color: "white",
              padding: "16px",
              borderRadius: "16px 16px 0 0",
              fontWeight: "bold",
              fontSize: "18px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>{texts.header}</span>
            <span style={{ cursor: "pointer" }} onClick={() => setShowForm(false)}>
              <FaTimes />
            </span>
          </div>

     
          <div
            style={{
              flex: 1,
              backgroundColor: "#E5DDD5",
              padding: "16px",
              overflowY: "auto",
              fontSize: "15px",
            }}
          >
            <div
              style={{
                backgroundColor: "#fff",
                border: "1px solid #ccc",
                borderRadius: "12px",
                padding: "12px 16px",
                maxWidth: "85%",
                marginBottom: "12px",
                lineHeight: "1.4",
                fontSize: "18px",
              }}
            >
              {texts.welcome}
            </div>
          </div>

    
          <form
            onSubmit={handleSubmit}
            style={{
              padding: "12px 16px",
              display: "flex",
              alignItems: "center",
              borderTop: "1px solid #ddd",
              backgroundColor: "#f9f9f9",
            }}
          >
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={texts.placeholder}
              style={{
                flex: 1,
                padding: "10px 16px",
                borderRadius: "24px",
                border: "1px solid #ccc",
                outline: "none",
                fontSize: "14px",
              }}
            />
            <button
              type="submit"
              style={{
                background: "none",
                border: "none",
                marginLeft: "12px",
                fontSize: "20px",
                color: "#128C7E",
                cursor: "pointer",
              }}
            >
              <FaPaperPlane />
            </button>
          </form>
        </div>
      )}

    
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 9999,
          backgroundColor: "#25D366",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        }}
        onClick={handleClick}
      >
        <FaWhatsapp style={{ color: "#fff", fontSize: "30px" }} />
      </div>
    </>
  );
}
