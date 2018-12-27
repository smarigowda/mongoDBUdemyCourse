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
> cls
> show dbs
> use <db-name>

> db.flightData.insertOne({
         "departureAirport": "MUC",
         "arrivalAirport": "SFO",
         "aircraft": "Airbus A380",
         "distance": 12000,
         "intercontinental": true });

> db.flightData.insertOne({
        departureAirport: "BLR",
        arrivalAirport: "LHR",
        aircraft: "Airbus BA119",
        distance: 3001,
        intercontinental: true });

> db.flightData.insertOne({ departureAirport: "BLR", arrivalAirport: "LHR", aircraft: "Airbus BA119", _id: "blr-lhr-1"});

> db.flightData.find({ departureAirport: "BLR" }).pretty()

> db.flightData.updateOne({ distance: 12000 }, { $set: { marker: 'delete' } })

> db.flightData.updateMany({ }, { $set: { marker: 'toDelete' } })

> db.flightData.deleteMany({ })

> db.flightData.insertMany([{
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

db.flightData.find().pretty()
```