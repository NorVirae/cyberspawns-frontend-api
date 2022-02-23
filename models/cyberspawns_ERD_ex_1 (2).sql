
CREATE TABLE battleInfo
(
  spawnId     uuid NOT NULL,
  level       int8,
  battlesWon  int ,
  battlesLost int 
);

CREATE TABLE chainAddress
(
  id        INTEGER   NOT NULL,
  userId    uuid      NOT NULL,
  metamask  TEXT     ,
  createdAt timestamp,
  updatedAt timestamp,
  PRIMARY KEY (id)
);

CREATE TABLE Currencies
(
  id        INTEGER          NOT NULL,
  userId    uuid             NOT NULL,
  cnd       double precision,
  css       double precision,
  cc        double precision,
  createdAt timestamp       ,
  updatedAt timestamp       ,
  PRIMARY KEY (id)
);

CREATE TABLE skills
(
  id              uuid   ,
  imageAddress    varchar,
  metadataAddress varchar
);

CREATE TABLE spawnAddresses
(
  spawnId    uuid    NOT NULL,
  metadata   varchar,
  imageAtlas varchar,
  atlas      varchar,
  json       varchar,
  image      varchar
);

CREATE TABLE spawnparents
(
  id      bigint NOT NULL,
  spawnId uuid   NOT NULL,
  parentX uuid  ,
  parentY uuid  ,
  PRIMARY KEY (id)
);

CREATE TABLE spawnParts
(
  id           uuid    NOT NULL,
  name         varchar,
  imageAddress varchar,
  class        varchar,
  level        int8   ,
  PRIMARY KEY (id)
);

CREATE TABLE spawns
(
  id         uuid      NOT NULL,
  ownerId    uuid      NOT NULL,
  birthdate  timestamp NOT NULL,
  chain      varchar   NOT NULL,
  class      varchar  ,
  name       varchar  ,
  breedcount int      ,
  figures    varchar  ,
  createdAt  timestamp,
  updatedAt  timestamp,
  tokenId    bigint   ,
  PRIMARY KEY (id)
);

CREATE TABLE spawnSkills
(
  spawnId uuid NOT NULL,
  skill1  uuid,
  skill2  uuid,
  skill3  uuid
);

CREATE TABLE tokens
(
  id        INTEGER   NOT NULL,
  userId    uuid      NOT NULL,
  token     VARCHAR   NOT NULL,
  createdAt timestamp,
  updatedAt timestamp,
  PRIMARY KEY (id)
);

CREATE TABLE users
(
  id         uuid      NOT NULL,
  username   VARCHAR   NOT NULL,
  email      VARCHAR  ,
  password   TEXT     ,
  role       VARCHAR  ,
  image      TEXT     ,
  isVerified BOOLEAN  ,
  createdAt  timestamp,
  updatedAt  timestamp,
  PRIMARY KEY (id)
);

ALTER TABLE Currencies
  ADD CONSTRAINT FK_users_TO_Currencies
    FOREIGN KEY (userId)
    REFERENCES users (id);

ALTER TABLE tokens
  ADD CONSTRAINT FK_users_TO_tokens
    FOREIGN KEY (userId)
    REFERENCES users (id);

ALTER TABLE chainAddress
  ADD CONSTRAINT FK_users_TO_chainAddress
    FOREIGN KEY (userId)
    REFERENCES users (id);

ALTER TABLE spawns
  ADD CONSTRAINT FK_users_TO_spawns
    FOREIGN KEY (ownerId)
    REFERENCES users (id);

ALTER TABLE spawnAddresses
  ADD CONSTRAINT FK_spawns_TO_spawnAddresses
    FOREIGN KEY (spawnId)
    REFERENCES spawns (id);

ALTER TABLE spawnparents
  ADD CONSTRAINT FK_spawns_TO_spawnparents
    FOREIGN KEY (spawnId)
    REFERENCES spawns (id);

ALTER TABLE battleInfo
  ADD CONSTRAINT FK_spawns_TO_battleInfo
    FOREIGN KEY (spawnId)
    REFERENCES spawns (id);

ALTER TABLE spawnSkills
  ADD CONSTRAINT FK_spawns_TO_spawnSkills
    FOREIGN KEY (spawnId)
    REFERENCES spawns (id);
