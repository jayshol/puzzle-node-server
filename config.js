exports.CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || 'https://immense-mountain-98094.herokuapp.com/';
exports.DATABASE_URL = process.env.DATABASE_URL || 'mongodb://jayshol:shiridibaba123@ds155862.mlab.com:55862/puzzle-database';
//exports.DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost/jwt-auth-demo';
exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL || 'mongodb://jayshol:shiridibaba123@ds157522.mlab.com:57522/test-puzzle-database';
exports.PORT = process.env.PORT || 8080;
exports.JWT_SECRET = process.env.JWT_SECRET || 'mysecret';
exports.JWT_EXPIRY = process.env.JWT_EXPIRY || '7d';