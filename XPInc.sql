DROP DATABASE IF EXISTS XPInc;

CREATE DATABASE XPInc;

CREATE TABLE XPInc.clients(
  idClient INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL UNIQUE,
  password VARCHAR(50) NOT NULL,
  
  CONSTRAINT PRIMARY KEY(idClient)

) ENGINE = INNODB;

CREATE TABLE XPInc.wallet(
  idW INT NOT NULL AUTO_INCREMENT,
  idClient INT NOT NULL,
  balance DECIMAL(65,2) NOT NULL DEFAULT(0.00),

  CONSTRAINT PRIMARY KEY(idW),
  FOREIGN KEY(idClient) REFERENCES clients(idClient)

) ENGINE = INNODB;

CREATE TABLE XPInc.deposit_withdraw(
  idDW INT NOT NULL AUTO_INCREMENT,
  idW INT NOT NULL,
  operation VARCHAR(50) NOT NULL,
  value DECIMAL(65,2) NOT NULL,

  CONSTRAINT PRIMARY KEY(idDW),
  FOREIGN KEY(idW) REFERENCES wallet(idW)

) ENGINE = INNODB;

CREATE TABLE XPInc.assets(
  idAsset INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  qtde INT NOT NULL,
  value DECIMAL(65,2) NOT NULL, 

  CONSTRAINT PRIMARY KEY(idAsset)

) ENGINE = INNODB;

CREATE TABLE XPInc.client_assets(
  idCA INT NOT NULL AUTO_INCREMENT,
  idClient INT NOT NULL,
  idAsset INT NOT NULL,
  qtde INT NOT NULL,

  CONSTRAINT PRIMARY KEY(idCA),
  FOREIGN KEY(idClient) REFERENCES clients(idClient),
  FOREIGN KEY(idAsset) REFERENCES assets(idAsset)

) ENGINE = INNODB;

CREATE TABLE XPInc.bought_sold(
  idBS INT NOT NULL AUTO_INCREMENT,
  idClient INT NOT NULL,
  idAssets INT NOT NULL,
  quantidade INT NOT NULL,
  velue DECIMAL(65,2) NOT NULL,

  CONSTRAINT PRIMARY KEY(idBS),
  FOREIGN KEY(idClient) REFERENCES clients(idClient),
  FOREIGN KEY(idAssets) REFERENCES assets(idAsset)

) ENGINE = INNODB;

INSERT INTO XPInc.clients (name, email, password) VALUES
    ("arthur", "arthur@gmail.com", 123),
    ("Lázo ", "lazaro@gmail.com", 123),
    ("Fábio", "fabio@gmail.com", 123),
    ("João", "joão@gmail.com", 123);
    
INSERT INTO XPInc.assets (name, qtde, value) VALUES
("AZUL4", 10000, 350),
("PETR4", 10000, 350),
("VALE4", 10000, 350),
("XPTO", 10000, 350);

