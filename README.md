A Postgres api server for cyberspawns frontend, 

To Install
1. Clone this Repo

2. Navigate to Root Folder

3. Run npm install

4. create .env if it doesn't exist and add "NODE_ENV='development'" to run on development environ

5. modify db configs for production or development in env folder on root directory to match your DB and you are good to go


----- ROUTES -----

|Routes                       | Description & Role                                |
|:---------------------------:|:-------------------------------------------------:|
|[POST/GET] /graphql          | End point for implementing graphql request        |
|:---------------------------:|:-------------------------------------------------:|
|[POST]/upload/image          |Uploads Image to cloudinary returns Link to image  |



----- Mutations ----
This mutations or graphql functions, attached to the query String targeted at "/graphql" which can be a POST OR GET request depending on query info are used to ping the graphql server to perform Ops such as updating Columns or fields located in a graphql schema

|Mutation     | Description                                                         |role                           |
|:-----------:|:-------------------------------------------------------------------:|:-----------------------------:|
|createSpawn  |collects args from frontend and then innitiates a "sequelize.create" |                               |
|             |returns results defined by the Type which is the spawnType           |                               |
|:-----------:|:-------------------------------------------------------------------:|:-----------------------------:|
|editSpawn    |collects args from frontend and then innitiates a "sequelize.update" |                               |
|             |returns updated results defined by the Type which is the spawnType   |                               |
|:-----------:|:-------------------------------------------------------------------:|:-----------------------------:|
|spawn        |collects id of spawn and performs a sequelize.findOne                |                               |
|             |returns results defined by the Type which is the spawnType           |                               |
|             |returns also the parents and children under the spawns and its stats |                               |
|             |returns details about the user, Owner of spawn                       |                               |
|:-----------:|:-------------------------------------------------------------------:|:-----------------------------:|
|spawns       |returns all the spawns in the database which can be paginated        |                               |
|             |returns results defined by the Type which is the spawnType           |                               |
|:-----------:|:-------------------------------------------------------------------:|:-----------------------------:|
|createSpawn  |collects args from frontend and then innitiates a "sequelize.create" |                               |
|             |returns results defined by the Type which is the spawnType           |                               |


you can test this queries at http:localhost:4000/graphql, "graphiql" is set to true by default
Server runs on http://localhost:4000/ by default