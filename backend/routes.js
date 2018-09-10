'use strict';
const controllers = require('./controllers');

// We disable sessions since we want to validate the token on each request
const PASSPORT_OPTIONS = { session: false };

module.exports = (app, passport) => {
	/**
	 * The following code is used on routes which we wish to protect via JWTs.
	 * It only verifies that valid token is provided, for a valid teacher or
	 * student, it doesn't verify that a student can access only certain routes.
	 * Additional validation is necessary for that.
	 *
	 * Middleware: passport.authenticate('jwt', PASSPORT_OPTIONS)
	 */

	app.get('/status', [], controllers.static.status);

	// Render React page
	app.get('/*', [], controllers.static.getAll);
};
