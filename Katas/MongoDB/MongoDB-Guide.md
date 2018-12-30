### Windows Environtmental Variables (command prompt)
1. `echo %Path%` - show the path value
2. `setx Path "VALUE_FOR_THE_PATH"` - There was a limit of 1024 characters using the command line.

### Windows Environtmental Variables (gui windows 10)
1. Search `System`
2. click `Advanced System Settings`
3. click `Advanced` tab
4. click `Environment Variables`
5. Enter filepath to mongo.exe as value in `Path`

## Databases
### Start your MongoDB database
1. Type in command prompt `"C:\Program Files\MongoDB\Server\4.0\bin\mongod.exe" --dbpath="c:\data\db"`
2. Connect to MongoDB with `"C:\Program Files\MongoDB\Server\4.0\bin\mongo.exe"` or `mongo` if it has been added to the PATH
3. [documented here](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)

### Create Database
1. `db` - display current database
2. `use DATABASE_NAME` - shortcut that creates an empty database
3. `db.collection.insertOne( { "key": "<VALUE>" } )` - insert a record

### Drop/Delete Database
1. `show dbs` - show current database
2. `use DATABASE_NAME` - switch to database
3. `db.dropDatabase()` - drop current datbase

### Create DB User
1. `db.createUser({user:"<name>",pwd:"<cleartext password>",roles:["<role>"]})` [documented here](https://docs.mongodb.com/manual/reference/method/db.createUser/)
- roles are "readWrite", "read", "dbAdmin", "userAdmin"

## Collections
### Create Collection
1. `use DATABASE_NAME`
2. `db.createCollection("COLLECTION_NAME")` - create collection
3. `show collections`

### Drop Collection
1. `use DATABASE_NAME`
2. `db.COLLECTION_NAME.drop()`
3. `show collections`

## Documents
### Delete Documents in a collection
- `db.COLLECTION_NAME.deleteOne( {<KEY>: "<VALUE>" } )` - delete first document found [documented here](https://docs.mongodb.com/manual/reference/method/db.collection.deleteOne/)
- `db.COLLECTION_NAME.deleteMany( {<KEY>: "<VALUE>" } )` - delete all documents found [documented here](https://docs.mongodb.com/manual/reference/method/db.collection.deleteMany/))

### Find documents
- [documented here](https://docs.mongodb.com/manual/tutorial/query-documents/)
-   `db.COLLECTION_NAME.find({})` this will find all documents in the collection
-   `db.COLLECTION_NAME.find({}).pretty()` adds formatting to the data returned. Much easier to read!
-   `db.COLLECTION_NAME.find({ <KEY>: "<VALUE>" })` find item(s) matching criteria

### Delete Key fields or documents
- $unset will delete a particular field of the first value found [documented here](https://docs.mongodb.com/manual/reference/operator/update/unset/)

`db.COLLECTION_NAME.update({ <KEY>: "<VALUE>" }, {$unset:{field:value}})`

### Update Documents
- Modifies an existing document(s) in a collection. The method can modify specific fields of an exisitng document(s) or replace an existing document entirely. [documented here](https://docs.mongodb.com/manual/reference/method/db.collection.update/)

`db.COLLECTION_NAME.update( query, update, options )`

`db.COLLECTION_NAME.update( query, update, {multi:true} )` - updates multiple docs, default is false

## Query operators
- `$exists` matches the documents that contain the field [documented here](https://docs.mongodb.com/manual/reference/operator/query/exists/)

`{ <KEY>: { $exists: <boolean> } }`