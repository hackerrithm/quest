package database

import (
	"database/sql"
	"fmt"
	"log"

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

// DB is exported db
type DB struct {
	*sql.DB
}

// NewOpen exported for creating a new POstgresql instance
func NewOpen() (DB, error) {
	dbInfo := fmt.Sprintf("user=%s password=%s dbname=%s sslmode=disable",
		DatabaseUser, DatabasePassword, DatabaseName)
	db, err := sql.Open("postgres", dbInfo)
	if err != nil {
		log.Fatal("Invalid DB config:", err)
	}
	if err = db.Ping(); err != nil {
		log.Fatal("DB unreachable:", err)
	}

	return DB{db}, err
}
