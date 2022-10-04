/* IS NULL */

-- Basic Syntax

SELECT column_1, column_2, ...
FROM table_name
WHERE column_1 IS NULL;

-- Where city IS NULL

SELECT first_name, city 
FROM users
WHERE city IS NULL;

-- Where city IS NOT NULL

SELECT first_name, city 
FROM users
WHERE city IS NOT NULL;

/* LIKE */

-- Basic Syntax

SELECT column_1, column_2, ...
FROM table_name
WHERE column_2 LIKE pattern;

-- Display users whos names start with A

SELECT *
FROM users
WHERE first_name LIKE 'A%';

-- Operator examples with % _ wildcards

LIKE 'a%'	any values that start with "a"	apple, apricot
LIKE '%a'	any values that end with "a"	Anna, Maria, Rita
LIKE '%ti%'	any values that have "ti" in any position	motivation
LIKE '_p%'	any values that have "p" in the second position	apple, apricot
LIKE 'a_%'	any values that start with "a" and are at least 2 characters in length	at, atom
LIKE 'a__%'	any values that start with "a" and are at least 3 characters in length	atom, all
LIKE 'a%e'	any values that start with "a" and end with "e"	apple, advice
LIKE '%e%e%'	any values that contain at least two letters "e"	seed, eye, level
LIKE '____'	any values that are 4 characters in length	atom, pear
LIKE '____%'	any values that are 4 characters in length or longer	Emma, Helen
LIKE '__nn_'	any values that are 5 characters in length and have "nn" in the third and fourth positions	s

/* BETWEEN */

-- Basic Syntax

SELECT column_1, column_2, ...
FROM table_name
WHERE column_1 BETWEEN value1 AND value2;

-- Display products with price between 45 and 200

SELECT *
FROM fruits
WHERE price BETWEEN 45 AND 200;

-- all students who were born between 01.01.1995 and 01.01.1998.

SELECT *
FROM students
WHERE birth_date BETWEEN '1995-01-01' AND '1998-01-01';

/* IN (Shorthand for multiple OR conditions) */

-- Basic Syntax

SELECT column_1, column_2, ...
FROM table_name
WHERE column_1 IN (value1, value2, ...);

-- all users' names that are located in "Odesa", "Lviv" or "Kharkiv"

SELECT first_name
FROM users
WHERE city IN ('Odesa', 'Lviv', 'Kharkiv');

-- The same query with the OR operator will look like this:

SELECT first_name
FROM users
WHERE city = 'Odesa' OR city = 'Lviv' OR city =  'Kharkiv';


/* NOT with LIKE, BETWEEN and IN */

-- The following query returns the rows where first_name does not contain the letter 'a':

SELECT *
FROM users
WHERE first_name NOT LIKE '%a%';

-- The following query returns the rows where age does not fall within a range from 20 to 24:

SELECT *
FROM users
WHERE age NOT BETWEEN 20 AND 24;

-- The following query returns the rows where the city is not "Odesa" or "Kyiv":

SELECT *
FROM users
WHERE city NOT IN ('Odesa', 'Kyiv');
