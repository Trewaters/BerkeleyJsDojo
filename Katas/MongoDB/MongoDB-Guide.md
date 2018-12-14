### Windows Environtmental Variables (command prompt)
1. `echo %Path%` - show the path value
2. `setx Path "VALUE_FOR_THE_PATH"` - There was a limit of 1024 characters using the command line.

### Windows Environtmental Variables (gui windows 10)
1. Search `System`
2. click `Advanced System Settings`
3. click `Advanced` tab
4. click `Environment Variables`
5. Enter filepath to mongo.exe as value in `Path`

### Start your MongoDB database
1. Type in command prompt `"C:\Program Files\MongoDB\Server\4.0\bin\mongod.exe" --dbpath="c:\data\db"`
2. Connect to MongoDB with `"C:\Program Files\MongoDB\Server\4.0\bin\mongo.exe"` or `mongo` if it has been added to the PATH
3. [documented here](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)

### Create Database
1. `db` - display current database
2. `use DATABASE_NAME` - shortcut that creates an empty database
3. `db.collection.insertOne({"key":"value"})` - insert a record

### Drop/Delete Database
1. `show dbs` - show current database
2. `use DATABASE_NAME` - switch to database
3. `db.dropDatabase()` - drop current datbase

### Create Collection
1. `use DATABASE_NAME`
2. `db.createCollection("COLLECTION_NAME")` - create collection
3. `show collections`

### Drop Collection
1. `use DATABASE_NAME`
2. `db.COLLECTION_NAME.drop()`
3. `show collections`