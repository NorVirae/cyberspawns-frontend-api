
const env = process.env

const development = {
    "DB":{
    "DB_USER" : "postgres",
    "DB_DATABASE" : "CyberSpawns",
    "DB_HOST" : "localhost",
    "DB_PASSWORD" : "25071999",
    "DB_PORT" : 5432,
    "NODE_ENV" : "development",
    "DATABASE_URL": env.LOCAL_DATABASE_URL
    }
}

m