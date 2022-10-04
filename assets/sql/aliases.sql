/* ALIASES */

-- What is Alias?

/* An Alias is a shorthand for a table or column name. Aliases reduce the amount of typing required to enter a query.

Complex queries with Aliases are generally easier to read. Aliases are useful with JOINs and aggregates: SUM, COUNT, etc. An Alias only exists for the duration of the query.

An alias is created with the AS keyword. */

-- Basic Syntax

SELECT column_name_1 AS alias_name_1, column_name_2 AS alias_name_2, ...
FROM table_name;

--  Returns users over the age of 19

SELECT first_name AS user_name, age AS user_age, city
FROM users
WHERE age > 19;

/* ALIAS FOR TABLE */

-- Basic Syntax

SELECT column_1, column_2, ...
FROM table_name AS alias_name;

-- Returns info on names and ages

SELECT first_name, age
FROM users;

-- with alias

SELECT u.first_name, u.age
FROM users AS u;

-- without AS keyword

SELECT u.first_name, u.age
FROM users u;
