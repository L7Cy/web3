from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/times-table", methods=["GET"])
def times_table():
    table = [[i * j for j in range(1, 13)] for i in range(1, 13)]
    return jsonify(table)


if __name__ == "__main__":
    app.run(debug=True)
