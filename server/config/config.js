const config = {
    env: process.env.NODE_ENV || 'development', 
    port: process.env.PORT || 4000,
    jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key", 
    mongoUri: process.env.MONGODB_URI ||
    "mongodb+srv://natalie_db:fac3D0wn@cluster1.qneui.mongodb.net/skeleton"
};
module.exports = config;