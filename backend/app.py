from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.get("/api/health")
def health_check():
    return jsonify({"status": "ok", "service": "backend"}), 200


@app.get("/api/message")
def message():
    return jsonify(
        {
            "title": "Práctica final",
            "message": "Aplicación desplegada en Vercel + Render con CI/CD",
        }
    )


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
