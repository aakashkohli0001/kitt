import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const text = "Happy Valentine’s Day Baby 💝";
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;

    if (!isDeleting && displayText.length < text.length) {
      // typing
      timer = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length + 1));
      }, 160);
    } 
    else if (!isDeleting && displayText.length === text.length) {
      // pause after typing
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 1200);
    } 
    else if (isDeleting && displayText.length > 0) {
      // deleting
      timer = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length - 1));
      }, 90);
    } 
    else if (isDeleting && displayText.length === 0) {
      // restart typing
      setIsDeleting(false);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting]);

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>
        {displayText}
        <span style={styles.cursor}>|</span>
      </h1>

      <p style={styles.text}>
        Today is all about you
        and the memories we cherish ✨
      </p>

      <button
        style={styles.btn}
        onClick={() => navigate("/gallery")}
        onMouseEnter={(e) => (e.target.style.transform = "scale(1.12)")}
        onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
      >
        Start the celebration 🎉
      </button>
    </div>
  );
}

const styles = {
  page: {
    height: "100vh",
    background: "linear-gradient(135deg,#ffe3ec,#fff6e5)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  title: {
    fontSize: "3.6rem",
    fontWeight: "700",
    letterSpacing: "2px",
    fontFamily: "'Segoe Script', 'Comic Sans MS', cursive",
    color: "#ff4d6d",
  },
  

  cursor: {
    marginLeft: "5px",
    animation: "blink 1s infinite",
  },

  text: {
    marginTop: "10px",
    fontSize: "1.1rem",
    opacity: "0.8",
  },

  btn: {
    marginTop: "35px",
    padding: "14px 42px",
    borderRadius: "30px",
    border: "none",
    background: "#ff8fab",
    color: "#fff",
    cursor: "pointer",
    transition: "0.4s",
  },
};
