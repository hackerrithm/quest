package database

import (
	"database/sql"
	"fmt"
	"log"

	"github.com/reacthead/quest/internal/app/shared/errorplay"

	"github.com/jinzhu/gorm"

	"github.com/go-pg/pg"
	_ "github.com/lib/pq" // _ needed
	"github.com/reacthead/quest/internal/app/model"
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

// PSQLDB is exported db
type PSQLDB struct {
	*pg.DB
}

// GORMDB is exported db
type GORMDB struct {
	*gorm.DB
}

// NewOpen exported for creating a new Postgresql instance
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

// DBModel is or database model
func DBModel() *pg.DB {
	db := pg.Connect(&pg.Options{
		User:     DatabaseUser,
		Password: DatabasePassword,
		Database: DatabaseName,
	})

	/*err := createSchema(db)
	if err != nil {
		panic(err)
	}*/

	return db

}

func createSchema(db *pg.DB) error {
	for _, model := range []interface{}{&model.User{}, &model.Task{}} {
		err := db.CreateTable(model, nil)
		if err != nil {
			return err
		}
	}
	return nil
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
