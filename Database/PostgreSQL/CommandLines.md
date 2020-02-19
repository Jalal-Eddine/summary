# Command Lines for PostgreSQL 
------
## Command lines: Windows
* connecting to PostgreSQl 
>psql -U NameOfUser

* to select a database
>\c NameOfDadabase

* to exite from postqreSQl
>\q NameOfDadabase

* to show tables in database
>\d NameOfDadabase

## SQL language
* CREATE TABLE users (name text, age smallint, birthday date);

* INSERT INTO [table] ([column], [column]) VALUES ('[value]', [value]');

* Adding a column: `ALTER TABLE [table] ADD COLUMN [column] VARCHAR(120);`

* Updating records: `UPDATE [table] SET [column] = '[updated-value]' WHERE [column] = [value];`
> exp: UPDATE users SET score = 50 WHERE name = 'jalal';

* Deleting records: `DELETE FROM [table] WHERE [column] = [value];`

### SELECTION
* Selecting records: `SELECT * FROM [table];`

* Explain records: `EXPLAIN SELECT * FROM [table];`

* Selecting parts of records: `SELECT [column], [another-column] FROM [table];`

* Counting records: `SELECT COUNT([column]) FROM [table];`

* Counting and selecting grouped records: `SELECT *, (SELECT COUNT([column]) FROM [table]) AS count FROM [table] GROUP BY [column];`

* Selecting specific records: `SELECT * FROM [table] WHERE [column] = [value];` (Selectors: `<`, `>`, `!=`; combine multiple selectors with `AND`, `OR`)

* Select records containing `[value]`: `SELECT * FROM [table] WHERE [column] LIKE '%[value]%';`

* Select records starting with `[value]`: `SELECT * FROM [table] WHERE [column] LIKE '[value]%';`

* Select records starting with `val` and ending with `ue`: `SELECT * FROM [table] WHERE [column] LIKE '[val_ue]';`

* Select a range: `SELECT * FROM [table] WHERE [column] BETWEEN [value1] and [value2];`

* Select with custom order and only limit: `SELECT * FROM [table] WHERE [column] ORDER BY [column] ASC LIMIT [value];` (Order: `DESC`, `ASC`)

### SQL Functions
