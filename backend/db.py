import psycopg2

def get_connection():
    return psycopg2.connect(
        host="localhost",
        database="fittrack",
        user="postgres",
        password="SoAnu",
        port="5432"
    )