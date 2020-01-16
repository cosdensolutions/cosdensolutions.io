from flask import current_app as app
from flask import jsonify


# handles any request error
class RequestError(Exception):
    # sets the init function
    def __init__(self, message, status_code=None, payload=None):
        Exception.__init__(self)
        self.message = message
        self.status_code = status_code
        self.payload = payload

    # to dict
    def to_dict(self):
        rv = dict(self.payload or ())
        rv["message"] = self.message
        return rv


# request error
@app.errorhandler(RequestError)
def _RequestError(error):
    response = jsonify(error.to_dict())
    response.status_code = error.status_code
    return response
