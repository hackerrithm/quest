CREATE DATABASE quest;

CREATE TABLE "person" (
   uid                  BIGSERIAL  PRIMARY KEY     NOT NULL,
   user_name            TEXT    NOT NULL,
   first_name           TEXT    NOT NULL,
   last_name            TEXT    NOT NULL,
   middle_name          TEXT    ,
   password             TEXT    NOT NULL,
   email_address        VARCHAR(45)    NOT NULL,
   picture              TEXT    ,
   status               VARCHAR(10)    NOT NULL,
   role                 VARCHAR(10)    NOT NULL,
   date_of_birth        DATE    ,
   date_joined          DATE    
);

CREATE TABLE "_user" (
   uid                  BIGSERIAL  PRIMARY KEY     NOT NULL,
   user_name            TEXT    NOT NULL,
   first_name           TEXT    NOT NULL,
   last_name            TEXT    NOT NULL,
   middle_name          TEXT    ,
   password             TEXT    NOT NULL,
   email_address        VARCHAR(45)    NOT NULL,
   picture              TEXT    ,
   status               VARCHAR(10)    NOT NULL,
   role                 VARCHAR(10)    NOT NULL,
   date_joined          TIMESTAMP    
);

CREATE TABLE "task" (
   uid                  BIGSERIAL  PRIMARY KEY     NOT NULL,
   author               TEXT    NOT NULL,
   title                TEXT    NOT NULL,
   content              TEXT    NOT NULL,
   category             TEXT    ,
   status               TEXT    ,
   date_created         DATE
);


INSERT INTO "_user" (user_name, first_name, last_name, password, email_address, status, role) VALUES ('Kemar','Kemar','Galloway','passcode1234','kemarg@example.com', 'active', 'admin');
INSERT INTO "_user" (user_name, first_name, last_name, password, email_address, status, role) VALUES ('Ashley','Ashley','Gates','passcode4321','ashg@example.com', 'active', 'user');

INSERT INTO "task" (author, title, content, category, status) VALUES ('Ashley','Bake cake','Purchase eggs, butter and flour','Food', 'active');
INSERT INTO "task" (author, title, content, category, status) VALUES ('Kemar','Write code','Learn golang, react and redux','Programming', 'active');