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

> db.flightData.insertOne({
...     "departureAirport": "MUC",
...     "arrivalAirport": "SFO",
...     "aircraft": "Airbus A380",
...     "distance": 12000,
...     "intercontinental": true
... });

db.flightData.find().pretty()
```