DROP DATABASE IF EXISTS sdc;

CREATE DATABASE sdc;

USE sdc;

CREATE TABLE Products (
  product_id INT AUTO_INCREMENT,
  name VARCHAR(200) NOT NULL,
  slogan VARCHAR(200) NOT NULL,
  description VARCHAR(500) NOT NULL,
  category VARCHAR(100) NOT NULL,
  default_price DECIMAL(20, 2) NOT NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY(product_id)
);

-- INSERT INTO Products(name, slogan, description, category, default_price) VALUES (
--   'harry potter', 'you a wizard harry', 'thriller genre', 'literature', 10343.2031
-- );

CREATE TABLE Features (
  feature_id INT AUTO_INCREMENT,
  feature VARCHAR(100),
  value VARCHAR(100),
  product_id INT NOT NULL,
  PRIMARY KEY(feature_id),
  FOREIGN KEY(product_id) REFERENCES Products(product_id) ON DELETE CASCADE
);
-- Will we be given any IDs in the csv file? should we use those ids as our primary key or should we generate own ids through auto_increment for primary keys
-- Do we need a primary unique ID in addition to each foreign key id?
-- CREATE TABLE Features (
--   product_feature_id INT AUTO_INCREMENT,
--   product_id INT NOT NULL,
--   feature_id INT NOT NULL,
--   PRIMARY KEY(product_feature_id),
--   FOREIGN KEY(product_id) REFERENCES Products(product_id) ON DELETE CASCADE,
--   FOREIGN KEY(feature_id) REFERENCES Features(feature_id) ON DELETE CASCADE
-- );

CREATE TABLE Styles (
  style_id INT AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  original_price DECIMAL(20, 2) NOT NULL,
  sale_price DECIMAL(20, 2) DEFAULT NULL,
  default_style TINYINT DEFAULT 0,
  product_id INT NOT NULL,
  PRIMARY KEY(style_id),
  FOREIGN KEY(product_id) REFERENCES Products(product_id) ON DELETE CASCADE
);

-- IS SKU NUMBER A FIELD OR UNIQUE ID?
CREATE TABLE SKUs (
  sku_id INT NOT NULL,
  quantity INT DEFAULT 0,
  size VARCHAR(20) NOT NULL,
  style_id INT NOT NULL,
  PRIMARY KEY(sku_id),
  FOREIGN KEY(style_id) REFERENCES Styles(style_id) ON DELETE CASCADE
);

CREATE TABLE Photos (
  photo_id INT AUTO_INCREMENT,
  thumbnail_url VARCHAR(100) DEFAULT '',
  url VARCHAR(100) DEFAULT '',
  style_id INT NOT NULL,
  PRIMARY KEY(photo_id),
  FOREIGN KEY(style_id) REFERENCES Styles(style_id) ON DELETE CASCADE
);

CREATE TABLE Related_Product (
  id INT AUTO_INCREMENT,
  related_id INT NOT NULL,
  product_id INT NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY(related_id) REFERENCES Products(product_id) ON DELETE CASCADE,
  FOREIGN KEY(product_id) REFERENCES Products(product_id) ON DELETE CASCADE
);


