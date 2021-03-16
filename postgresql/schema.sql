CREATE TABLE Products (
  id SERIAL PRIMARY KEY,
  product_id  INT NOT NULL,
  campus VARCHAR(20) NOT NULL,
  name VARCHAR(100) NOT NULL,
  slogan VARCHAR(100) NOT NULL,
  description VARCHAR(100) NOT NULL,
  category VARCHAR(100) NOT NULL,
  default_price VARCHAR(100) NOT NULL,
  created_at DATE NOT NULL,
  updated_at DATE NOT NULL
)

CREATE TABLE Features (
  id SERIAL PRIMARY KEY,
  feature VARCHAR(100) NOT NULL,
  value VARCHAR(100),
)

CREATE TABLE Products_Features (
  id SERIAL PRIMARY KEY,
  product_id INT NOT NULL,
  feature_id INT NOT NULL,
  FOREIGN KEY(product_id) REFERENCES Products(product_id)DELETE CASCADE
  FOREIGN KEY(feature_id) REFERENCES Features(id) DELETE CASCADE
)

CREATE TABLE Styles (
  id SERIAL PRIMARY KEY,
  style_id INT NOT NULL,
  name VARCHAR(100) NOT NULL,
  original_price VARCHAR(100) NOT NULL,
  default BOOLEAN NOT NULL,
  product_id INT NOT NULL,
  FOREIGN KEY(product_id) REFERENCES Products(product_id) DELETE CASCADE
)

CREATE TABLE SKUs (
  id SERIAL PRIMARY KEY,
  sku_number VARCHAR(100) NOT NULL,
  quantity INT NOT NULL,
  size VARCHAR(100),
  style_id INT NOT NULL,
  FOREIGN KEY(style_id) REFERENCES Styles(style_id) DELETE CASCADE
)

CREATE TABLE Photos (
  id SERIAL PRIMARY KEY,
  thumbnail_url VARCHAR(100) NOT NULL,
  url VARCHAR(100),
  style_id INT NOT NULL,
  FOREIGN KEY(style_id) REFERENCES Styles(style_id) DELETE CASCADE
)

