import { useState, useEffect } from "react";

export default function Message() {
  const text1 = "A Special Message 💜";
  const text2 = "Dear Kittu...💋💖,";
  const text3 = "Happy Valentine’s Day  My Love❤️";

  const [t1, setT1] = useState("");
  const [t2, setT2] = useState("");
  const [t3, setT3] = useState("");

  useEffect(() => {
    let i1 = 0, i2 = 0, i3 = 0;

    const interval = setInterval(() => {
      if (i1 < text1.length) {
        setT1(text1.slice(0, i1 + 1));
        i1++;
      }
      if (i2 < text2.length) {
        setT2(text2.slice(0, i2 + 1));
        i2++;
      }
      if (i3 < text3.length) {
        setT3(text3.slice(0, i3 + 1));
        i3++;
      }

      if (
        i1 >= text1.length &&
        i2 >= text2.length &&
        i3 >= text3.length
      ) {
        clearInterval(interval);
      }
    }, 100); // typing speed

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.page}>
      <div
        style={styles.card}
        onMouseEnter={(e) =>
          (e.currentTarget.style.transform = "scale(1.05)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.transform = "scale(1)")
        }
      >
        <h1 style={styles.title}>{t1}</h1>
        <h1 style={styles.name}>{t2}</h1>

        <p>
          You make my world brighter just by being in it. <br />
          Every moment with you feels special, and my heart feels happiest when
          you’re around.
        </p>

        <p>I wish you endless happiness, smiles, and love always.</p>

        <h3 style={styles.valentine}>{t3}</h3>

        <div style={{ fontSize: "1.6rem" }}>💗  💖  💕  💝</div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg,#7b6cf6,#b8b3ff)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    background: "#dcd6ff",
    padding: "40px",
    borderRadius: "20px",
    maxWidth: "700px",
    textAlign: "center",
    transition: "0.5s",
  },

  title: {
    color: "#4a3fc9",
    marginBottom: "10px",
  },

  name: {
    color: "#ff5c8a",
    marginBottom: "20px",
  },

  valentine: {
    color: "#ff2f6d",
    marginTop: "20px",
    fontSize:"30px",
  },
};
