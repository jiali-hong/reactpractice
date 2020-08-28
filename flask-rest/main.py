from flask import Flask
from flask_restful import reqparse, abort, Api, Resource
from flask_cors import CORS
import wordsdb

app = Flask(__name__)
api = Api(app)
cors = CORS(app, resources={r"/words/*": {"origins": "*"}})


'''
def abort_if_todo_doesnt_exist(words_title):
    if words_title not in wordsList:
        abort(404, message="Todo {} doesn't exist".format(words_title))
'''

parser = reqparse.RequestParser()
parser.add_argument('title')
parser.add_argument('words')


class Words(Resource):
    def get(self, words_title):
        # abort_if_todo_doesnt_exist(words_title)
        return wordsdb.find_one_words(words_title)

    def delete(self, words_title):
        wordsdb.delete_one_words(words_title)
        return '', 204

    def put(self, words_title):
        args = parser.parse_args()
        words = args['words']
        wordsdb.update_one_words(words_title,words)
        return words, 201

class WordsList(Resource):
    def get(self):
        return wordsdb.find_all_words()

    def post(self):
        args = parser.parse_args()
        words_title = args['title']
        words = args['words']
        wordsdb.insert_one_words(words_title,words)
        return words, 201


api.add_resource(WordsList, '/words')
api.add_resource(Words, '/words/<words_title>')


if __name__ == '__main__':
    app.run(debug=True)