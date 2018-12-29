# mongoDBUdemyCourse
Udemy Course on Mongo DB

# Install Mongo DB
https://docs.mongodb.com/manual/installation/
https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/

# Start mongo db
```shell
mongod --dbpath=/Users/santosh/SAN/mongodb/data
````

# mongo shell commands
```shell
cls

show dbs
use <db-name>

db.flightData.insertOne({
         "departureAirport": "MUC",
         "arrivalAirport": "SFO",
         "aircraft": "Airbus A380",
         "distance": 12000,
         "intercontinental": true });

db.flightData.insertOne({
        departureAirport: "BLR",
        arrivalAirport: "LHR",
        aircraft: "Airbus BA119",
        distance: 3001,
        intercontinental: true });

db.flightData.insertOne({ departureAirport: "BLR", arrivalAirport: "LHR", aircraft: "Airbus BA119", _id: "blr-lhr-1"});

db.flightData.find({ departureAirport: "BLR" }).pretty()

db.flightData.updateOne({ distance: 12000 }, { $set: { marker: 'delete' } })

db.flightData.updateMany({ }, { $set: { marker: 'toDelete' } })

db.flightData.deleteMany({ })

db.flightData.insertMany([{
        departureAirport: "BLR",
        arrivalAirport: "LHR",
        aircraft: "Airbus BA119",
        distance: 3001,
        intercontinental: true },
        {
        departureAirport: "BLR",
        arrivalAirport: "LHR",
        aircraft: "Airbus BA118",
        distance: 3001,
        intercontinental: true }])

db.flightData.find({ aircraft: 'Airbus BA118' }).pretty();

db.flightData.find({ distance: { $gt: 2000 } }).pretty();

# pretty is a method on the cursor
db.flightData.find({ distance: { $lt: 4000 } }).pretty();

# findOne returns first Document, pretty does not exist on Document
db.flightData.findOne({ distance: { $lt: 4000 } })

db.flightData.updateOne({ _id: ObjectId("5c25411f22a240beec1cde27") }, { $set: { delayed: true } })

db.flightData.update({ _id: ObjectId("5c25411f22a240beec1cde27") }, { $set: { delayed: false } })

# updates the entire document
db.flightData.update({ _id: ObjectId("5c25411f22a240beec1cde27") }, { delayed: false })

# safer way
db.flightData.replaceOne({ _id: ObjectId("5c25411f22a240beec1cde27") }, {
        departureAirport: "BLR",
        arrivalAirport: "LHR",
        aircraft: "Airbus BA119",
        distance: 3001,
        intercontinental: true })

db.flightData.find().pretty()

db.passengers.find().toArray()

db.passengers.find().toArray(d => printjson(d));

db.passengers.forEach(d => printjson(d))

# find returns a cursor, cursor has a forEach method
db.passengers.find().forEach(d => printjson(d))

# Projection
db.passengers.find({}, { name: 1, _id: 0 })

# Array
db.passengers.update({ name: "Albert Twostone"}, {$set: { hobby: [ "sports", "cooking" ]}})

# Accessing embedded element
db.passengers.findOne({ name: "Albert Twostone"}).hobby

# Find an array element
db.passengers.findOne({ hobby: "sports"})

# Find in nested document
db.flightData.find({ "status.lastUpdated" : 'one hour ago'}).pretty()
```