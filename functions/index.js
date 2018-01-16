'use strict';
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
const db = admin.database();
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
///users/[[user.uid]]/
exports.visibilityRoulette = functions.database.ref('/VisibilityRoulette/{messageId}').onWrite(event => {
      const message = event.data.val();
      if (message && !message.sanitized) {
        console.log('Retrieved message content: ', message.uid);
        let something = Math.random().toString(7).substr(2, 1)
        let ref = db.ref('/users/'+ message.uid + '/Visibility');
        ref.set(something);
      }
});
