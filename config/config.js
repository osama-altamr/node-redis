const env = process.env.NODE_ENV || 'development';

if (env === 'development' || env === 'testing') {
    const envConf = require('./env.json');
    console.log(envConf)
    const config = envConf[env];
    for (const key of Object.keys(config)) {
        console.log(key)
        process.env[key] = config[key];
    }
}

module.exports = env;