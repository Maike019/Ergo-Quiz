from flask import Flask, request, render_template, jsonify
import sqlite3
import os
 
app = Flask(__name__)
 
# Datenbank initialisieren
def init_db():
    conn = sqlite3.connect('quiz.db')
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS answers (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        question TEXT,
        answer TEXT
    )''')
    conn.commit()
    conn.close()
 
@app.route('/')
def index():
    return render_template('index.html')
 
@app.route('/submit', methods=['POST'])
def submit():
    data = request.get_json()
    conn = sqlite3.connect('quiz.db')
    c = conn.cursor()
    for item in data:
        c.execute("INSERT INTO answers (question, answer) VALUES (?, ?)", (item['question'], item['answer']))
    conn.commit()
    conn.close()
    return jsonify({'status': 'ok'})
 
@app.route('/results')
def results():
    conn = sqlite3.connect('quiz.db')
    c = conn.cursor()
    c.execute("SELECT question, answer FROM answers")
    results = c.fetchall()
    conn.close()
    return jsonify(results)
 
if __name__ == '__main__':
    init_db()
    app.run(debug=True)