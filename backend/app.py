from flask import Flask
from flask_cors import CORS
from models import db
from config import Config 
from routes import init_routes

app = Flask(__name__)
app.config.from_object(Config)
CORS(app)
db.init_app(app)

with app.app_context():
    db.create_all()

if __name__ == '__main__':
    init_routes(app)
    app.run(debug=True)