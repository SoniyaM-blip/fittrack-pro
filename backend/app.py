from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_jwt_extended import JWTManager, create_access_token
import psycopg2
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
CORS(app)

# JWT setup
app.config["JWT_SECRET_KEY"] = "fittrack-secret"
jwt = JWTManager(app)

# DB CONNECTION
def get_connection():
    return psycopg2.connect(
        host="127.0.0.1",
        database="fittrack",
        user="postgres",
        password="SoAnu",
        port="5432",
        connect_timeout=5
    )

# HEALTH CHECK
@app.route("/api/health")
def health():
    return jsonify({"status": "ok"})

# REGISTER
@app.route("/api/register", methods=["POST"])
def register():
    try:
        data = request.get_json()

        print("REGISTER HIT:", data)

        email = data.get("email")
        password = generate_password_hash(data.get("password"))

        conn = get_connection()
        cur = conn.cursor()

        cur.execute(
            "INSERT INTO users (email, password) VALUES (%s, %s)",
            (email, password)
        )

        conn.commit()

        cur.close()
        conn.close()

        return jsonify({"message": "Registered successfully"})

    except Exception as e:
        print("🔥 REGISTER ERROR:", repr(e))
        return jsonify({"message": str(e)}), 500

# LOGIN
@app.route("/api/login", methods=["POST"])
def login():
    try:
        data = request.get_json()

        email = data.get("email")
        password = data.get("password")

        conn = get_connection()
        cur = conn.cursor()

        cur.execute("SELECT password FROM users WHERE email=%s", (email,))
        user = cur.fetchone()

        cur.close()
        conn.close()

        if not user:
            return jsonify({"message": "User not found"}), 404

        return jsonify({"message": "Login successful", "token": "demo-token"})

    except Exception as e:
        return jsonify({"message": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)