from flask import request, jsonify
from werkzeug.security import generate_password_hash
from models import db, User
import re

def init_routes(app):
    @app.route('/register', methods=['POST'])
    def register():
        data = request.get_json()

        name = data.get('name')
        email = data.get('email')
        password = data.get('password')

        if not name or not email or not password:
            return jsonify({"error": "Name, email and password are required."}), 400

        email_pattern = r'^[\w\.-]+@[\w\.-]+\.\w+$'
        if not re.match(email_pattern, email):
            return jsonify({"error": "Invalid email format."}), 400

        if len(password) < 6:
            return jsonify({"error": "Password must be at least 6 characters long."}), 400

        if User.query.filter_by(email=email).first():
            return jsonify({"error": "Email is already registered."}), 409

        hashed_password = generate_password_hash(password)

        new_user = User(name=name, email=email, password=hashed_password)
        db.session.add(new_user)
        db.session.commit()

        return jsonify({"message": "User registered successfully"}), 201