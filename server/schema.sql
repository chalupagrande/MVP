CREATE DATABASE rating;

USE rating;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (id),
  username varchar(20) NOT NULL UNIQUE,
  password varchar(64) NOT NULL
);

CREATE TABLE ratings (
  id INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (id),
  user_id INT NOT NULL,
  rating int(9)
);