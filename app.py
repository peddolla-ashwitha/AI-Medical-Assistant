from flask import Flask, request, jsonify, send_from_directory
from openai import OpenAI
from dotenv import load_dotenv
import os

load_dotenv()
app = Flask(_name_, static_folder="public")
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

@app.route("/")
def home():
    return send_from_directory("public", "index.html")

@app.route("/<path:path>")
def static_files(path):
    return send_from_directory("public", path)

@app.route("/analyze", methods=["POST"])
def analyze():
    data = request.get_json()
    symptoms = data.get("symptoms", "")
    try:
        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {"role": "system", "content": "You are an AI medical assistant. Analyze symptoms, suggest possible causes, precautions, and home remedies. Keep it concise and educational."},
                {"role": "user", "content": symptoms}
            ]
        )
        analysis = response.choices[0].message.content
        return jsonify({"analysis": analysis})
    except Exception as e:
        print(e)
        return jsonify({"analysis": "Error analyzing symptoms."}), 500

if _name_ == "_main_":
    app.run(debug=True)
