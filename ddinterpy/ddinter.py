ATLAS_URI = "mongodb+srv://hitesh19426:Yaoj5LYhWuXKBFkr@cluster0.lmtgovu.mongodb.net/?retryWrites=true&w=majority"
import pymongo

client = pymongo.MongoClient(ATLAS_URI)
mydb = client["ddinter_demo"]
mycollection = mydb["interactions"]


mycollection.create_index([("Drug_A", pymongo.ASCENDING), ("Drug_B", pymongo.ASCENDING)], name="interaction_index")
