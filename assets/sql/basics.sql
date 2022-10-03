/* SQL BASICS */

-- Styling

SQL (Structured Query Language) != case sensitive (But please use CAPS for KEYWORDS)

Start each logical part of the query with a new line.

-- CRUD

Create
Read
Update
Delete

-- Data types

Primarily 3 types for SQL;

    String/Text
    Number 
    Date/Time


/* COMMENTING OUT CODE */

-- Single Line

/* Multiple Line */


/* SELECT */ 

-- Basic Syntax

SELECT column_1, column_2, ...
FROM table_name;

-- SELECT all fields

SELECT *
FROM table_name;

-- SELECT 2 fields from "book" table

SELECT title, publish_year
FROM book;

SELECT title, number_of_pages
FROM book;

-- SELECT 3 fields from "pupil" table

SELECT first_name, last_name, birth_date
FROM pupil;

/* WHERE */

-- Basic Syntax

SELECT column_1, column_2, ...
FROM table_name
WHERE condition;

-- Fetch all data from users table where age > 20

SELECT * 
FROM users
WHERE age > 20;

-- Users born before 01/01/2000

SELECT * 
FROM users
WHERE birth_date < '2000-01-01';

-- Operators in the WHERE block

=	Equal
>	Greater than
<	Less than
>=	Greater than or equal
<=	Less than or equal

/* AND */

-- Basic Syntax

SELECT column_1, column_2, ...
FROM table_name
WHERE condition_1 AND condition_2 AND condition_3 ...;

-- Select all users where city is Kyiv AND age is 18

SELECT * 
FROM users
WHERE city = 'Kyiv' AND age = 18;

/* OR */

-- Basic Syntax

SELECT column_1, column_2, ...
FROM table_name
WHERE condition_1 OR condition_2 OR condition_3 ...;

-- Select all users where age is 18 OR 23

SELECT * 
FROM users
WHERE age = 18 OR age = 23;

/* NOT */

-- Basic Syntax

SELECT * 
FROM users
WHERE NOT city = 'Kyiv';

-- Select first_name, age, city from users where age is >= 20 and city is Odesa

SELECT first_name, age, city 
FROM users 
WHERE age >= 20 AND city = 'Odesa';

-- Select title where year is < 2012 inclusive OR > 2017 inclusive AND > 240 pages long

SELECT title
FROM book
WHERE (publish_year <= 2012 OR publish_year >= 2017) 
AND number_of_pages > 240;