'use strict';

module.exports = {
	appName: 'Nuke.js app',
	port: process.env.PORT || 3000,
	redis: '',
	sessionSecret: 'g1i23fg9as68egj',
	cookie: {},
	cachebox: {
		ttl: 30
	},
	db: {
		uri: process.env.MONGO_URL || 'mongodb://' + (process.env.DB_1_PORT_27017_TCP_ADDR || 'localhost') + '/remp'
	},
	cdn_base: process.env.CDN_BASE,
	assets: { //All of these must be contained in the public folder
		js: [
			'/primus/primus.js#nomin#nocdn',
			'lib/lodash/lodash.js',
			'lib/q/q.js',
			'js/bundle.js'
		],
		css: [
			'css/global.css',
			'lib/bootstrap/dist/css/bootstrap.css'
		]
	}
};