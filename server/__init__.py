from flask import Flask
from pathlib import Path
import os

# directories
current_dir = os.path.dirname(os.path.realpath(__file__))
parent_dir = os.path.dirname(current_dir)


def create_app():

    # creates the app
    app = Flask(__name__,
                static_folder=os.path.join(parent_dir, 'assets'),
                template_folder=os.path.join(parent_dir, 'templates'),
                )

    # loads config
    config = Path(os.path.join(app.instance_path, 'config.py'))

    from instance.config import dev_config

    # dev config
    app.config.from_object(dev_config)

    # views
    with app.app_context():
        from server import views

    return app
