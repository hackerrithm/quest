package database

import (
	"database/sql"
	"fmt"

	_ "github.com/lib/pq" // _ needed
)

const (
	DatabaseUser     = "postgres"
	DatabasePassword = "postgres"
	DatabaseName     = "bookstore"
)

// StartDataBase starts a databases
func StartDataBase() {
	dbInfo := fmt.Sprintf("user=%s password=%s dbname=%s sslmode=disable",
		DatabaseUser, DatabasePassword, DatabaseName)
	db, err := sql.Open("postgres", dbInfo)
	checkErr(err)
	fmt.Println("connected")
	defer db.Close()
}

func checkErr(err error) {
	if err != nil {
		panic(err)
	}
}
