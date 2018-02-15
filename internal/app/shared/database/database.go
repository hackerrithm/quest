package database

import (
	"database/sql"
	"fmt"
	"log"

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

// DataStore is database structure
type DataStore struct {
	host     string
	cachedDB *sql.DB
}

func (d *DataStore) db() (*sql.DB, error) {
	db, err := sql.Open("postgres", d.host)

	if err != nil {
		return nil, fmt.Errorf("failed to open database connection for host (%s): %s", d.host, err)
	}

	return db, nil
}

// DB is exported db
var DB *sql.DB

// Get method queries the tasks table for a single task with the given id.
func (d *DataStore) Get(id uint64) (*model.Task, error) {
	db, err := d.db()
	if err != nil {
		return nil, err
	}
	row := db.QueryRow("SELECT title, content FROM task WHERE uid = $1", id)
	task := &model.Task{UID: id}
	if err := row.Scan(&(task.Title), &(task.Content)); err != nil {
		if err == sql.ErrNoRows {
			return nil, nil
		}
		return nil, fmt.Errorf("failed to get task %q: %s", id, err)
	}
	return task, nil
}

// init starts a databases
func init() {
	dbInfo := fmt.Sprintf("user=%s password=%s dbname=%s sslmode=disable",
		DatabaseUser, DatabasePassword, DatabaseName)
	DB, err := sql.Open("postgres", dbInfo)
	if err != nil {
		log.Fatal("Invalid DB config:", err)
	}
	if err = DB.Ping(); err != nil {
		log.Fatal("DB unreachable:", err)
	}
	fmt.Println("connected")

	/*var lastInsertID int
	err = db.QueryRow("INSERT INTO person(user_name,first_name,last_name,password,email_address,status,role) VALUES($1,$2,$3,$4,$5,$6,$7) returning uid;", "astaxie", "研发部门", "Galloway", "passcode12345", "kem@gmail.com", "active", "user").Scan(&lastInsertID)
	checkErr(err)
	fmt.Println("last inserted id =", lastInsertID)*/

	rows, err := DB.Query("SELECT user_name, first_name FROM person LIMIT $1", 3)
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
	}

}

func checkErr(err error) {
	if err != nil {
		panic(err)
	}
}
