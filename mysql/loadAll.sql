USE sdc2;

-- Finalized
LOAD DATA local INFILE './csvClean/product.csv'
INTO TABLE Products
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n';

-- Finalized
SET foreign_key_checks = 0;
LOAD DATA local INFILE './csvClean/features.csv'
INTO TABLE Features
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n';

--Finalized
SET foreign_key_checks = 0;
LOAD DATA local INFILE './csvClean/styles.csv'
INTO TABLE Styles
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

--FINAZLIED
SET foreign_key_checks = 0;
LOAD DATA local INFILE './csv/skus.csv'
INTO TABLE SKUs
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

SET foreign_key_checks = 0;
LOAD DATA local INFILE './csv/related.csv'
INTO TABLE Related_Product
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

