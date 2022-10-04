/* Order by */

/* ORDER BY allows sorting by one or more columns. Records can be returned in ascending or descending order. The ORDER BY keyword sorts the records in ascending order by default. To sort the records in descending order, use the DESC keyword, for ascending order - ASC. */

-- Basic Syntax

SELECT column_1, column_2, ...
FROM table_name
ORDER BY column_1 ASC/DESC, column_2 ASC/DESC, ...;

-- ascending by name

SELECT *
FROM fruits
ORDER BY name;

-- descending in price

SELECT *
FROM fruits
ORDER BY price DESC;

-- sorted by country ascending and city descending

SELECT *
FROM users
ORDER BY country ASC, city DESC;


/* LIMIT */ 

/* The LIMIT statement is used to limit the number of records returned based on a limit value. Syntax: */

-- Basic Syntax

SELECT column_name(s)
FROM table_name
LIMIT number;

-- Returns 3 oldest users

SELECT *
FROM users
ORDER BY age DESC
LIMIT 3;


/* DISTINCT */

/* The SELECT DISTINCT statement is used to return only distinct (different) values. */

-- Basic Syntax

SELECT DISTINCT column_1, column_2, ...
FROM table_name;

-- Only DISTINCT Values from country column

SELECT DISTINCT country
FROM users;