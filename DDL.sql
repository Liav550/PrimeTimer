CREATE SCHEMA IF NOT EXISTS timer;

DROP TABLE IF EXISTS timer.solves;
DROP TABLE IF EXISTS timer.sessions;
DROP TABLE IF EXISTS timer.users;
DROP TYPE IF EXISTS timer.events_enum;
DROP TYPE IF EXISTS timer.penalties_enum;

CREATE TYPE penalties_enum AS ENUM ('+2', 'DNF');
CREATE TYPE events_enum AS ENUM ('3x3', '2x2', '4x4', '5x5'); -- Could add more in the future

CREATE TABLE timer.users (
	id UUID  PRIMARY KEY DEFAULT gen_random_uuid(),
	username TEXT UNIQUE NOT NULL,
	email text UNIQUE NOT NULL,
	password text NOT NULL
);

CREATE TABLE timer.sessions (
	id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
	user_id UUID NOT NULL,
	name TEXT UNIQUE NOT NULL,
	created_at TIMESTAMP DEFAULT now(),
	FOREIGN KEY (user_id) REFERENCES timer.users(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE timer.solves (
	id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
	session_id UUID NOT NULL,
	event_name events_enum NOT NULL DEFAULT '3x3',
	final_time TEXT,
	penalty penalties_enum DEFAULT NULL,
	scramble TEXT NOT NULL
);