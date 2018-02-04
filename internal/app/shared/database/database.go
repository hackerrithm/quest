package database

import (
	"database/sql"
	"fmt"

	_ "github.com/lib/pq" // _ needed
)

const (
	// DatabaseUser is the database user
	DatabaseUser = "postgres"
	// DatabasePassword is the password used
	DatabasePassword = "newcode"
	// DatabaseName 'quest' is the name of our database
	DatabaseName = "quest"
)

// StartDataBase starts a databases
func StartDataBase() {
	dbInfo := fmt.Sprintf("user=%s password=%s dbname=%s sslmode=disable",
		DatabaseUser, DatabasePassword, DatabaseName)
	db, err := sql.Open("postgres", dbInfo)
	checkErr(err)
	fmt.Println("connected")

	/*var lastInsertID int
	err = db.QueryRow("INSERT INTO person(user_name,first_name,last_name,password,email_address,status,role) VALUES($1,$2,$3,$4,$5,$6,$7) returning uid;", "astaxie", "研发部门", "Galloway", "passcode12345", "kem@gmail.com", "active", "user").Scan(&lastInsertID)
	checkErr(err)
	fmt.Println("last inserted id =", lastInsertID)*/

	/*rows, err := db.Query("SELECT user_name, first_name FROM person LIMIT $1", 3)
	if err != nil {
		// handle this error better than this
		panic(err)
	}
	defer rows.Close()
	for rows.Next() {
		//var id uint64
		var userName string
		var firstName string
		err = rows.Scan(&userName, &firstName)
		if err != nil {
			// handle this error
			panic(err)
		}
		fmt.Println(userName, firstName)
	}
	// get any error encountered during iteration
	err = rows.Err()
	if err != nil {
		panic(err)
	}*/
	defer db.Close()
}

func checkErr(err error) {
	if err != nil {
		panic(err)
	}
}
