// Table: Person
// +-------------+---------+
// | Column Name | Type    |
// +-------------+---------+
// | PersonId    | int     |
// | FirstName   | varchar |
// | LastName    | varchar |
// +-------------+---------+
// PersonId is the primary key column for this table.

// Table: Address
// +-------------+---------+
// | Column Name | Type    |
// +-------------+---------+
// | AddressId   | int     |
// | PersonId    | int     |
// | City        | varchar |
// | State       | varchar |
// +-------------+---------+
// AddressId is the primary key column for this table.

// Write a SQL query for a report that provides the following information for each person in the Person table, regardless if there is an address for each of those people: FirstName, LastName, City, State

// What type of join will we need? Why?
// LEFT JOIN because we want all values from the left table regardless of whether or not it has a match in the right table

// SQL Query

// SELECT Person.firstName, Person.lastName, Address.city, Address.state FROM person LEFT JOIN Address on Person.personId = Address.personId ORDER BY personId desc;