/* SQL BASICS */

-- CRUD

Create
Read
Update
Delete

/* COMMENTING OUT CODE */

-- Single Line

-- SELECT title
FROM movie;

-- Multiple Line

/*
SELECT title
FROM movie; 
*/


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
