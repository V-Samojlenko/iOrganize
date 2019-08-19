CREATE DATABASE iorganize;
CREATE USER 'iorganize'@'%' IDENTIFIED BY 'iorganize';
GRANT ALL PRIVILEGES ON iorganize.* TO 'iorganize'@'%';
FLUSH PRIVILEGES;