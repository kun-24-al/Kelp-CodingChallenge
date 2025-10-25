# CSV to JSON Converter API (Node.js + Express)

This project is a backend challenge solution that parses a CSV file into JSON objects, transforms and stores the data in a PostgreSQL database, and prints an age distribution report to the console.

---

## ✅ Features

- Parses CSV with complex nested keys (e.g., `name.firstName`, `address.line1`)
- Transforms and inserts data into a PostgreSQL `users` table
- Ignores external CSV libraries (uses custom logic)
- Computes age-group distribution
- Handles large CSV files efficiently

---

## 🛠 Technologies Used

- Node.js (Express)
- PostgreSQL
- dotenv

---

## 📁 Project Structure

```
kelp-coding-challenge/
├── index.js          # Entry point for the application
├── .env              # Environment configuration
├── README.md         # Project documentation
├── package.json      # Project dependencies and scripts
├── controllers/      # Route controllers
    ├── convertCSVToJson.js
├── services/         # Business logic and service functions
    ├── getAgeDistribution.js
    ├── insertUsers.js
    ├── parseCSV.js
    ├── transformObjects.js
├── helpers/          # Utility/helper functions
    ├── postgresConnection.js
```

---

## ⚙️ Environment Variables

Create a `.env` file:

```
CSV_FILE_PATH=./users.csv
DB_HOST=localhost
DB_PORT=5432
DB_NAME=your_database
DB_USER=your_user
DB_PASS=your_password
```

---

## 🧪 Sample CSV

Download a test file with 50 entries here: [users.csv](./users.csv)

---

## 🏃 How to Run

### 1. Install dependencies

```bash
npm install
```

### 2. Start PostgreSQL and create table

Run this SQL to create the `users` table:

```sql
CREATE TABLE public.users (
  id serial PRIMARY KEY,
  "name" varchar NOT NULL,
  age int4 NOT NULL,
  address jsonb NULL,
  additional_info jsonb NULL
);
```

### 3. Start the server

```bash
node index.js
```

### 4. Upload and process the CSV

Access the API:

```
GET http://localhost:3000/upload-csv
```

---

## 📊 Output

After processing, it will print:

```
<20: 2.00%
20-40: 28.00%
40-60: 40.00%
>60: 30.00%
```

![App Screenshot](./images/demo1.png)
![App Screenshot](./images/demo2.png)
![App Screenshot](./images/demo3.png)
![App Screenshot](./images/demo4.png)
![App Screenshot](./images/demo5.png)


---

## 📌 Assumptions

- The CSV file uses a comma `,` as a delimiter.
- No quotes are used to wrap fields, even those containing commas.
- Headers in the CSV file follow a dot (`.`) notation for nesting (e.g., `address.city`).
- All records have at least `name.firstName`, `name.lastName`, and `age`.
- Sub-properties of complex properties appear next to each other in the CSV.
- CSV file is well-formed with no empty rows.
- All other fields besides name and age will be grouped under `address` (if they match), and the rest into `additional_info`.
- Only standard ASCII characters are expected in the input CSV.

---

## 📞 Contact

For any queries, contact: [sborkar852@gmail.com]
