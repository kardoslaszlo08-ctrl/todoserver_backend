import dotenv from 'dotenv'
dotenv.config()

const envFile=process.env.NODE_ENV=='production'?'.env.production':'.env.local'

export const myConfig={
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME,
    port:process.env.DB_PORT,
}

