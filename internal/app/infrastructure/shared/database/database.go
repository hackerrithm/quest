package database

import (
	"github.com/jinzhu/gorm"
	"github.com/reacthead/quest/internal/app/infrastructure/shared/errorplay"

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

// GORMDB is exported db
type GORMDB struct {
	*gorm.DB
}

// NewGormOpen exported for creating a new Postgresql instance
func NewGormOpen() (GORMDB, error) {
	db, err := gorm.Open("postgres",
		`host=localhost 
			user=postgres password=newcode
			dbname=quest 
			sslmode=disable`)
	errorplay.CheckErr(err)

	return GORMDB{db}, nil
}
