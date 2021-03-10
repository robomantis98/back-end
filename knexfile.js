// require('dotenv').config();

const localPg = {
	host:'localhost', 
	port: 5432,
	//password: 'postgres',
	user: 'noitoy',
	database: 'postgres'
}
// client: 'sqlite3',
// filename: './data/bookr.sqlite3'
module.exports = {

	development: {
		client: 'pg', 
		connection: localPg,
		useNullAsDefault: true,
		migrations: {
			directory: './data/migrations',
			tableName: 'migrations',
		},
		seeds: { directory: './data/seeds' },
	},
	production: {
		client: 'pg',
		connection: localPg,
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			directory: './data/migrations',
		},
		seeds: { directory: './data/seeds' },
	},
	testing: {
		client: 'sqlite3',
		connection: {
			filename: './data/test.db3',
		},
		useNullAsDefault: true,
		migrations: {
			directory: './data/migrations',
		},
		seeds: {
			directory: './data/seeds',
		}
	}

};
