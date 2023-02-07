CREATE TABLE countries(
id integer PRIMARY KEY,
name varchar(64) NOT NULL);

CREATE TABLE exponats(
	id varchar(32) PRIMARY KEY NOT NULL UNIQUE,
	name varchar(2000) NOT NULL,
	collection varchar(2000) NOT NULL,
	technique varchar(2000) NOT NULL,
	insurance_value numeric(8, 2) DEFAULT 20000 NOT NULL,
	creation_year numeric(4) NOT NULL 
		CHECK(creation_year>1900),
	country_id integer NOT NULL
	CHECK (country_id>0) REFERENCES countries(id)
);	
