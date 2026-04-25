import { useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [mode, setMode] = useState("login");
const userEmail = localStorage.getItem("userEmail");
  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  // ---------------- DASHBOARD ----------------
  if (token) {
    return (
      <div style={styles.app}>
        {/* SIDEBAR */}
        <aside style={styles.sidebar}>
          <h2 style={styles.brandTitle}>🏃 FitTrack Pro</h2>

         <div
  style={styles.menuItem}
  onMouseEnter={(e) => {
    e.target.style.border = "1px solid #a855f7";
    e.target.style.boxShadow = "0 0 10px rgba(168, 85, 247, 0.6)";
  }}
  onMouseLeave={(e) => {
    e.target.style.border = "1px solid rgba(255,255,255,0.06)";
    e.target.style.boxShadow = "none";
  }}
>
  📊 Dashboard
</div>
          <div
  style={styles.menuItem}
  onMouseEnter={(e) => {
    e.target.style.border = "1px solid #a855f7";
    e.target.style.boxShadow = "0 0 10px rgba(168, 85, 247, 0.6)";
  }}
  onMouseLeave={(e) => {
    e.target.style.border = "1px solid rgba(255,255,255,0.06)";
    e.target.style.boxShadow = "none";
  }}
>🏃 Activity</div>
          <div
  style={styles.menuItem}
  onMouseEnter={(e) => {
    e.target.style.border = "1px solid #a855f7";
    e.target.style.boxShadow = "0 0 10px rgba(168, 85, 247, 0.6)";
  }}
  onMouseLeave={(e) => {
    e.target.style.border = "1px solid rgba(255,255,255,0.06)";
    e.target.style.boxShadow = "none";
  }}
>🎯 Goals</div>
          <div
  style={styles.menuItem}
  onMouseEnter={(e) => {
    e.target.style.border = "1px solid #a855f7";
    e.target.style.boxShadow = "0 0 10px rgba(168, 85, 247, 0.6)";
  }}
  onMouseLeave={(e) => {
    e.target.style.border = "1px solid rgba(255,255,255,0.06)";
    e.target.style.boxShadow = "none";
  }}
>👤 Profile</div>
        </aside>

        {/* MAIN */}
        <div style={styles.main}>
          
          {/* TOP BAR */}
          <div style={styles.topbar}>
  <div style={{ textAlign: "center", width: "100%" }}>
    <h2 style={{ margin: 0 }}>Good Morning 👋</h2>
    <p style={{ margin: 0, color: "#111827", fontWeight: "500" }}>
  {userEmail || "Fitness User"}
</p>
  </div>

  <button onClick={logout} style={styles.logoutBtn}>
    Logout
  </button>
</div>

          {/* GRID */}
          <div style={styles.grid}>
            
            <div style={styles.cardLarge}>
              <h3>Steps Today</h3>
              <div style={styles.bigNumber}>6,500</div>
              <p>Goal: 10,000</p>

              <div style={styles.progressBar}>
                <div style={{ ...styles.progressFill, width: "65%" }} />
              </div>
            </div>

            <div style={styles.card}>
              <h3>Calories</h3>
              <div style={styles.number}>420</div>
            </div>

            <div style={styles.card}>
              <h3>Workout</h3>
              <div style={styles.number}>30 min</div>
            </div>

            <div style={styles.card}>
              <h3>Water</h3>
              <div style={styles.number}>2.1 L</div>
            </div>

            <div style={styles.cardWide}>
              <h3>Weekly Activity</h3>

              <div style={styles.fakeChart}>
                <div style={{ ...styles.bar, height: "50%" }}></div>
                <div style={{ ...styles.bar, height: "70%" }}></div>
                <div style={{ ...styles.bar, height: "90%" }}></div>
                <div style={{ ...styles.bar, height: "40%" }}></div>
                <div style={{ ...styles.bar, height: "80%" }}></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }

  // ---------------- LOGIN / REGISTER ----------------
  return (
    <div style={styles.loginPage}>
      <h1>FitTrack Pro</h1>

      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setMode("login")}>Login</button>
        <button onClick={() => setMode("register")} style={{ marginLeft: "10px" }}>
          Register
        </button>
      </div>

      {mode === "login" ? (
        <Login setToken={setToken} />
      ) : (
        <Register />
      )}
    </div>
  );
}

// ---------------- STYLES (CLEAN SAAS UI) ----------------
const styles = {
  app: {
    display: "flex",
    height: "100vh",
    fontFamily: "Inter, Arial",
   background: "linear-gradient(135deg, #d1fae5, #fce7f3, #eef2ff)",
    color: "white",
  },

sidebar: {
  width: "260px",
  padding: "24px",
  background: "linear-gradient(180deg, #1e1b4b, #312e81)",
  color: "white",
  borderRight: "1px solid rgba(255,255,255,0.08)",
  boxShadow: "4px 0 20px rgba(0,0,0,0.25)",
},

brandTitle: {
  fontSize: "22px",
  fontWeight: "800",
  background: "linear-gradient(90deg, #ec4899, #a855f7)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  marginBottom: "30px",
  letterSpacing: "0.5px",
},

menuItem: {
  padding: "12px 14px",
  marginBottom: "12px",
  borderRadius: "12px",
  cursor: "pointer",
  fontWeight: "500",
  color: "#e5e7eb",
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.06)",
  transition: "all 0.2s ease",
},

  main: {
    flex: 1,
    padding: "25px",
  },

  topbar: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "25px",
  },

  logoutBtn: {
    padding: "8px 14px",
    background: "linear-gradient(90deg, #ef4444, #f97316)",
    border: "none",
    color: "white",
    borderRadius: "8px",
    cursor: "pointer",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "18px",
  },

card: {
  background: "rgba(255, 255, 255, 0.9)",
  backdropFilter: "blur(10px)",
  padding: "20px",
  borderRadius: "16px",
  border: "1px solid rgba(0,0,0,0.08)",
  boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
  color: "#111827",
},

cardLarge: {
  gridColumn: "span 2",
  background: "rgba(255, 255, 255, 0.92)",
  padding: "20px",
  borderRadius: "16px",
  border: "1px solid rgba(0,0,0,0.08)",
  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
  color: "#111827",
},

cardWide: {
  gridColumn: "span 3",
  background: "rgba(255, 255, 255, 0.92)",
  padding: "20px",
  borderRadius: "16px",
  border: "1px solid rgba(0,0,0,0.08)",
  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
  color: "#111827",
},

bigNumber: {
  fontSize: "34px",
  marginTop: "10px",
  color: "#059669", // green pop
  fontWeight: "bold",
},

number: {
  fontSize: "24px",
  marginTop: "10px",
  color: "#7c3aed", // purple pop
  fontWeight: "600",
},

  progressBar: {
    height: "10px",
    background: "#1f2937",
    borderRadius: "10px",
    marginTop: "12px",
  },

  progressFill: {
    height: "10px",
    background: "linear-gradient(90deg, #22c55e, #06b6d4)",
    borderRadius: "10px",
  },

fakeChart: {
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  gap: "12px",
  height: "140px",
  marginTop: "20px",
  width: "100%",
},

  bar: {
  width: "24px",
  background: "linear-gradient(180deg, #3b82f6, #a855f7)",
  borderRadius: "6px",
},

  loginPage: {
    padding: "30px",
    color: "white",
  },
};

export default App;