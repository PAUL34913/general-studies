/* Aggregate Functions */

-- An aggregate function performs a calculation of one or more values and returns a single result.

    AVG – calculates the average of a set of values.
    COUNT – counts rows in a specified table or view.
    MIN – gets the minimum value in a set of values.
    MAX – gets the maximum value in a set of values.
    SUM – calculates the sum of values.

/* COUNT */

--Basic Syntax

SELECT COUNT(column_name)
FROM table_name
WHERE condition;

-- The following query returns the number of users over the age of 19:

SELECT COUNT(id)
FROM users
WHERE age > 19;

-- The next query will return the same result:

SELECT COUNT(*)
FROM users
WHERE age > 19;

-- We can set a temporary name for the result column:

SELECT COUNT(*) AS number_of_users
FROM users
WHERE age > 19;

/* MAX, MIN */

-- Basic Syntax

-- The MIN function returns the smallest value of the selected column.

SELECT MIN(column_name)
FROM table_name
WHERE condition;

-- The MAX function returns the largest value of the selected column.

SELECT MAX(column_name)
FROM table_name
WHERE condition;

-- The following query returns the minimal price of the fruit:

SELECT MIN(price) AS min_price
FROM fruits;

-- The following query returns the maximum price of the fruit:

SELECT MAX(price) AS max_price
FROM fruits;

/* SUM */

-- Basic Syntax

SELECT SUM(column_name)
FROM table_name
WHERE condition;

-- The following query returns the total price of all fruits:

SELECT SUM(price) AS total_price
FROM fruits;

/* AVG */

-- Basic Syntax

SELECT AVG(column_name)
FROM table_name
WHERE condition;

-- The following query returns the average price of all fruits:

SELECT AVG(price) AS average_price
FROM fruits;
