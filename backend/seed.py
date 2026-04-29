from app import SessionLocal, User, Workout

db = SessionLocal()

# Add user
user = User(email="soniya@gmail.com")
db.add(user)

# Add workouts
workouts = [
    Workout(type="Running", duration=30, calories=250),
    Workout(type="Cycling", duration=45, calories=400),
    Workout(type="Yoga", duration=60, calories=180),
    Workout(type="Strength Training", duration=40, calories=350),
]

for w in workouts:
    db.add(w)

db.commit()
print("Sample data added!")