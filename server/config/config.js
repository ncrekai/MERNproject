const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.port || 4000,
    jwtSecret: process.env.JWT_SECRET|| "YOUR_secret_key",
    mongoUri: process.env.MONGODB_URI || "mongodb+srv://natalie_db:fac3D0wn@cluster1.qneui.mongodb.net/" ||
    process.env.MONGO_HOST || 'mongodb://' + (process.env.IP || 'localhost') + ':' + (process.env.MONGO_POST || '27017') + '/skeleton'
};

module.exports = config;