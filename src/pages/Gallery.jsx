import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Gallery() {
  const navigate = useNavigate();

  const images = [
    "1.jpeg",
    "2.jpeg",
    "3.jpeg",
    "4.jpeg",
    "5.jpeg",
    "6.jpeg",
    "7.jpeg",
    "8.jpeg",
    "9.jpeg",
    "13.jpeg",
    "11.jpeg",
    "12.jpeg",
  ];

  const [hovered, setHovered] = useState(null);
  const [liked, setLiked] = useState(Array(12).fill(false));

  // 🔤 Typing Effect
  const fullText = "Our Memories 💕";
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timer = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 120);
      return () => clearTimeout(timer);
    }
  }, [index]);

  const toggleLike = (i) => {
    const copy = [...liked];
    copy[i] = !copy[i];
    setLiked(copy);
  };

  return (
    <div style={styles.page}>
      {/* ❤️ AUTO TYPING HEADING */}
      <h2 style={styles.heading}>
        {text}
        <span style={{ opacity: index % 2 === 0 ? 1 : 0 }}>|</span>
      </h2>

      <div style={styles.grid}>
        {images.map((img, i) => (
          <div
            key={i}
            style={{
              ...styles.card,
              transform: hovered === i ? "scale(1.05)" : "scale(1)",
            }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <img
              src={img}
              alt={`memory-${i}`}
              style={{
                ...styles.img,
                transform: hovered === i ? "scale(1.1)" : "scale(1)",
                filter:
                  hovered === i ? "brightness(70%)" : "brightness(100%)",
              }}
            />

            {hovered === i && (
              <div
                style={{
                  ...styles.heart,
                  color: liked[i] ? "red" : "white",
                }}
                onClick={() => toggleLike(i)}
              >
                ♥
              </div>
            )}
          </div>
        ))}
      </div>

      <button
        style={styles.nextBtn}
        onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        onClick={() => navigate("/message")}
      >
        Next 💌
      </button>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#fff3e8",
    padding: "40px",
    textAlign: "center",
  },

  heading: {
    marginBottom: "20px",
    fontSize: "56px",
    fontFamily: "'Segoe Script', 'Comic Sans MS', cursive",
    padding: "20px",
    color: "#ff5c8a",
    letterSpacing: "2px",
    textShadow: "0 8px 24px rgba(255,92,138,0.4)",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "25px",
    marginBottom: "40px",
  },

  card: {
    position: "relative",
    height: "380px",
    borderRadius: "18px",
    overflow: "hidden",
    transition: "0.45s ease",
    cursor: "pointer",
    background: "#000",
  },

  img: {
    width: "-100%",
    height: "90%",
    objectFit: "cover",
    transition: "0.45s ease",
  },

  heart: {
    position: "absolute",
    top: "15px",
    right: "15px",
    fontSize: "32px",
    cursor: "pointer",
    textShadow: "0 0 10px rgba(0,0,0,0.6)",
    transition: "0.3s",
    zIndex: 5,
  },

  nextBtn: {
    padding: "14px 40px",
    borderRadius: "30px",
    border: "none",
    background: "#ff85a2",
    color: "#fff",
    cursor: "pointer",
    transition: "0.4s",
  },
};
