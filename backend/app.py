from flask import Flask, request, jsonify
from flask_cors import CORS
import psycopg2
import os
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)

# Allow frontend (Vercel)
CORS(app, origins=["*"])


# -------------------------
# DB CONNECTION (FIXED)
# -------------------------
def get_connection():
    return psycopg2.connect(
        os.environ["DATABASE_URL"]
    )


# -------------------------
# HEALTH CHECK
# -------------------------
@app.route("/")
def home():
    return jsonify({"message": "FitTrack Backend Running 🚀"})


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

        hashed_password = generate_password_hash(password)

        conn = get_connection()
        cur = conn.cursor()

        cur.execute("""
            INSERT INTO users (email, password, first_name)
            VALUES (%s, %s, %s)
        """, (email, hashed_password, first_name))

        conn.commit()
        cur.close()
        conn.close()

        return jsonify({"message": "User registered successfully"})

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

        cur.execute("""
            SELECT password, first_name
            FROM users
            WHERE email=%s
        """, (email,))

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
# WORKOUTS
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
# GOALS - CREATE
# -------------------------
@app.route("/api/goals", methods=["POST"])
def create_goal():
    try:
        data = request.get_json()

        user_id = data.get("user_id")
        goal_type = data.get("goal_type")
        target_value = data.get("target_value")

        conn = get_connection()
        cur = conn.cursor()

        cur.execute("""
            INSERT INTO goals (user_id, goal_type, target_value)
            VALUES (%s, %s, %s)
        """, (user_id, goal_type, target_value))

        conn.commit()
        cur.close()
        conn.close()

        return jsonify({"message": "Goal created successfully"})

    except Exception as e:
        return jsonify({"message": str(e)}), 500


# -------------------------
# GOALS - GET
# -------------------------
@app.route("/api/goals/<int:user_id>", methods=["GET"])
def get_goals(user_id):
    try:
        conn = get_connection()
        cur = conn.cursor()

        cur.execute("""
            SELECT id, goal_type, target_value, created_at
            FROM goals
            WHERE user_id=%s
            ORDER BY created_at DESC
        """, (user_id,))

        rows = cur.fetchall()

        cur.close()
        conn.close()

        return jsonify([
            {
                "id": r[0],
                "goal_type": r[1],
                "target_value": r[2],
                "created_at": str(r[3])
            }
            for r in rows
        ])

    except Exception as e:
        return jsonify({"message": str(e)}), 500


# -------------------------
# RUN
# -------------------------
if __name__ == "__main__":
    app.run(debug=True)