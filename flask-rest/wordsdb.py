import pymongo
# uri = 'mongodb://kvuser:makemelaugh@ats.vpool.cn:37017/'
uri = "mongodb://kvcalc:makemelaugh@localhost:27017/"
myclient = pymongo.MongoClient(uri)
mydb = myclient["kvcalc"]
wordscol = mydb["words"]

def insert_one_words(title, words):
    d = {'title': title, 'words': words}
    return wordscol.insert_one(d)

def find_one_words(title):
    d = {'title': title}
    doc = wordscol.find_one(d)
    if doc:
        return doc['words']
    return ''

def delete_one_words(title):
    d = {'title': title}
    return wordscol.delete_one(d)

def update_one_words(title, words):
    d = {'title': title}
    data = {'words': words}
    return wordscol.update_one(d,{'$set':data},upsert = True)

def find_all_words():
    docs = wordscol.find()
    d = {}
    for doc in docs:
        d[doc['title']] = doc['words']
    return d

if __name__ == '__main__':
    # insert_words('mmm','ddd,mmm')
    # for doc in find_all():
    #     print(doc)
    print(find_all_words())