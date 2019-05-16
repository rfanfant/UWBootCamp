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
// Write a SQL query for a report that provides the following information for each person in the Person table, regardless if there is an address for each of those people:

// FirstName, LastName, City, State

// What type of join will we need? Why?
// *** //
// Perform outer join so that columns are retrieved, whether or not they contain information.
// I performed an outer left-join between the Person and Address tables in order to get all information, whether or not the data exists. The join is done on the primary key from Person matching the foreign key on Address.
// *** //


// SQL Query
// SELECT FirstName, LastName, City, State
// FROM Person LEFT JOIN Address
// ON Person.PersonId = Address.PersonId
// ;