from flask import Flask, request, jsonify
from flask_cors import CORS
import psycopg2
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)

# Enable CORS
CORS(app)

# -------------------------
# DB CONNECTION
# -------------------------
def get_connection():
    return psycopg2.connect(
        host="127.0.0.1",
        database="fittrack",
        user="postgres",
        password="SoAnu",
        port="5432"
    )

# -------------------------
# HEALTH CHECK
# -------------------------
@app.route("/")
def home():
    return jsonify({"message": "Backend running 🚀"})

# -------------------------
# REGISTER
# -------------------------
@app.route("/api/register", methods=["POST"])
def register():
    try:
        data = request.get_json()

        email = data.get("email")
        password = data.get("password")
        first_name = data.get("first_name")

        hashed = generate_password_hash(password)

        conn = get_connection()
        cur = conn.cursor()

        cur.execute(
            "INSERT INTO users (email, password, first_name) VALUES (%s, %s, %s)",
            (email, hashed, first_name)
        )

        conn.commit()
        cur.close()
        conn.close()

        return jsonify({"message": "User registered"})

    except Exception as e:
        return jsonify({"message": str(e)}), 500

# -------------------------
# LOGIN
# -------------------------
@app.route("/api/login", methods=["POST"])
def login():
    try:
        data = request.get_json()

        email = data.get("email")
        password = data.get("password")

        conn = get_connection()
        cur = conn.cursor()

        cur.execute(
            "SELECT password, first_name FROM users WHERE email=%s",
            (email,)
        )

        user = cur.fetchone()

        cur.close()
        conn.close()

        if not user:
            return jsonify({"message": "User not found"}), 404

        if not check_password_hash(user[0], password):
            return jsonify({"message": "Invalid password"}), 401

        return jsonify({
            "message": "Login successful",
            "token": "demo-token",
            "first_name": user[1]
        })

    except Exception as e:
        return jsonify({"message": str(e)}), 500

# -------------------------
# WORKOUTS (FIXED)
# -------------------------
@app.route("/api/workouts", methods=["GET"])
def get_workouts():
    try:
        conn = get_connection()
        cur = conn.cursor()

        cur.execute("""
            SELECT
                COUNT(*) FILTER (WHERE LOWER(type)='cardio'),
                COUNT(*) FILTER (WHERE LOWER(type)='strength'),
                COUNT(*) FILTER (WHERE LOWER(type)='yoga'),
                COUNT(*) FILTER (WHERE LOWER(type)='hiit'),
                COUNT(*) FILTER (WHERE LOWER(type)='pilates'),
                COUNT(*) FILTER (WHERE LOWER(type)='stretching')
            FROM workouts
        """)

        result = cur.fetchone()

        cur.close()
        conn.close()

        return jsonify({
            "cardio": result[0] or 0,
            "strength": result[1] or 0,
            "yoga": result[2] or 0,
            "hiit": result[3] or 0,
            "pilates": result[4] or 0,
            "stretching": result[5] or 0
        })

    except Exception as e:
        return jsonify({"message": str(e)}), 500

# -------------------------
# RUN
# -------------------------
if __name__ == "__main__":
    app.run(debug=True)