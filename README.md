# MySQL Commands

This README contains essential MySQL commands to help you navigate and manage your MySQL database from the terminal.

---

## 1️⃣ How to Access MySQL Terminal

To log in to MySQL, open your terminal and run:

```bash
sudo mysql -u root -p
```

After running the command, you will be prompted to enter the MySQL password for the `root` user.

---

## 2️⃣ How to See All Databases

To list all available databases, run:

```sql
SHOW DATABASES;
```

This will display all databases currently available on your MySQL server.

---

## 3️⃣ How to Select a Database

Before running queries, select the database you want to work with:

```sql
USE simple_mysql;
```

Replace `simple_mysql` with the actual name of your database.

---

## 4️⃣ How to See All Tables in the Selected Database

To view all tables inside your selected database, use:

```sql
SHOW TABLES;
```

This will display the names of all tables in the currently selected database.

---

## 5️⃣ How to Describe a Table

To see the structure (columns, types, keys) of a table, use:

```sql
DESCRIBE users;
```

Replace `users` with the name of the table you want to inspect.

---

## 6️⃣ How to View Data from a Table

To retrieve and display all records from a table, run:

```sql
SELECT * FROM users;
```

Replace `users` with your table name to view its contents.

---

## 7️⃣ How to Exit MySQL

To exit MySQL and return to the terminal, use one of the following commands:

```sql
EXIT;
```

Or:

```sql
\q;
```

---

## 8️⃣ How to Create a New Database, User, and Grant Permissions

### Create a New Database
```sql
CREATE DATABASE my_database;
```

### Create a New User
```sql
CREATE USER 'new_user'@'localhost' IDENTIFIED BY 'your_password';
```

### Grant Permissions to the User
```sql
GRANT ALL PRIVILEGES ON my_database.* TO 'new_user'@'localhost';
```

### Apply Changes
```sql
FLUSH PRIVILEGES;
```

### Switch to the New Database
```sql
USE my_database;
```

Replace `my_database`, `new_user`, and `your_password` with your desired database name, username, and password.

---

### 🎯 Summary of Commands

| Action                      | Command                  |
| --------------------------- | ------------------------ |
| Access MySQL Terminal       | `mysql -u root -p`       |
| Show All Databases          | `SHOW DATABASES;`        |
| Select a Database           | `USE simple_mysql;`      |
| Show All Tables in Database | `SHOW TABLES;`           |
| Describe a Table            | `DESCRIBE users;`        |
| View Data in a Table        | `SELECT * FROM users;`   |
| Exit MySQL                  | `EXIT;` or `\q;`         |
| Create a Database           | `CREATE DATABASE my_database;` |
| Create a User               | `CREATE USER 'new_user'@'localhost' IDENTIFIED BY 'your_password';` |
| Grant Privileges            | `GRANT ALL PRIVILEGES ON my_database.* TO 'new_user'@'localhost';` |
| Apply Changes               | `FLUSH PRIVILEGES;` |

---

💡 **Save this file in your GitHub repository for easy reference!** 🚀

