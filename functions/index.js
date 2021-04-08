const functions = require("firebase-functions");
const admin = require ("firebase-admin")
const serviceAccount = require ('.key/serviceAccount,json')

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.ping = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs! pong", {structuredData: true});
  response.send("pong");
});

