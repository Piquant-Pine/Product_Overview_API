CREATE TABLE Products (
  product_id INT SERIAL,
  campus VARCHAR(20) NOT NULL,
  name VARCHAR(100) NOT NULL,
  slogan VARCHAR(100) NOT NULL,
  description VARCHAR(100) NOT NULL,
  category VARCHAR(100) NOT NULL,
  default_price VARCHAR(100) NOT NULL,
  created_at DATE NOT NULL,
  updated_at DATE NOT NULL,
  PRIMARY KEY(product_id)
)

CREATE TABLE Features (
  feature_id INT SERIAL,
  feature VARCHAR(100) NOT NULL,
  value VARCHAR(100),
  PRIMARY KEY(feature_id)
)

CREATE TABLE Products_Features (
  product_feature_id INT SERIAL,
  product_id INT NOT NULL,
  feature_id INT NOT NULL,
  PRIMARY KEY(product_feature_id),
  FOREIGN KEY(product_id) REFERENCES Products(product_id)DELETE CASCADE
  FOREIGN KEY(feature_id) REFERENCES Features(feature_id) DELETE CASCADE
)

CREATE TABLE Styles (
  style_id INT SERIAL,
  name VARCHAR(100) NOT NULL,
  original_price VARCHAR(100) NOT NULL,
  default BOOLEAN NOT NULL,
  product_id INT NOT NULL,
  PRIMARY KEY(style_id),
  FOREIGN KEY(product_id) REFERENCES Products(product_id) DELETE CASCADE
)

-- IS SKU NUMBER A FIELD OR UNIQUE ID?
CREATE TABLE SKUs (
  sku_id INT SERIAL,
  sku_number VARCHAR(100) NOT NULL,
  quantity INT NOT NULL,
  size VARCHAR(100),
  style_id INT NOT NULL,
  PRIMARY KEY(sku_id)
  FOREIGN KEY(style_id) REFERENCES Styles(style_id) DELETE CASCADE
)

CREATE TABLE Photos (
  photo_id INT SERIAL,
  thumbnail_url VARCHAR(100) NOT NULL,
  url VARCHAR(100),
  style_id INT NOT NULL,
  PRIMARY KEY(photo_id)
  FOREIGN KEY(style_id) REFERENCES Styles(style_id) DELETE CASCADE
)

