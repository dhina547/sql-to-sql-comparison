from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
from db import get_connection
from compare import compare_data

app = Flask(__name__)
CORS(app)

connection = None

@app.route("/connect", methods=["POST"])
def connect():
    global connection
    try:
        connection = get_connection(request.json)
        return jsonify({"status": "Connected Successfully"})
    except Exception as e:
        return jsonify({"error": str(e)}), 400

@app.route("/compare", methods=["POST"])
def compare():
    data = request.json
    df1 = pd.read_sql(data["query1"], connection)
    df2 = pd.read_sql(data["query2"], connection)
    result = compare_data(df1, df2, data["mapping"], data["primary_key"])
    return jsonify(result)

if __name__ == "__main__":
    app.run(debug=True)
