import pyodbc
from config import DRIVER

def get_connection(data):
    conn_str = (
        f"DRIVER={{{DRIVER}}};"
        f"SERVER={data['host']};"
        f"DATABASE={data['database']};"
        f"UID={data['username']};"
        f"PWD={data['password']}"
    )
    return pyodbc.connect(conn_str)
