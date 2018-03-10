package repository

import (
	"database/sql"
	"fmt"
	"time"

	"github.com/reacthead/quest/internal/app/model"
	"github.com/reacthead/quest/internal/app/shared/database"
)

// GetAll gets all the records from the database
func GetAll() ([]model.User, error) {
	DB, err := database.NewOpen()

	rows, err := DB.Query("SELECT user_name, first_name FROM _user LIMIT $1", 3)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	bks := make([]model.User, 0)
	for rows.Next() {
		var userName string
		var firstName string
		user := model.User{}
		err := rows.Scan(&userName, &firstName)
		if err != nil {
			return nil, err
		}
		user.UserName = userName
		user.FirstName = firstName
		fmt.Printf("%8v | %6v \n", userName, firstName)
		bks = append(bks, user)
	}
	if err = rows.Err(); err != nil {
		return nil, err
	}

	DB.Close()

	return bks, nil
}

// GetOne gets one the record from the database
func GetOne(uid uint64) (model.User, error) {
	DB, err := database.NewOpen()

	user := model.User{}

	row := DB.QueryRow("SELECT * FROM _user WHERE uid = $1", uid)

	err = row.Scan(&user.UID, &user.UserName, &user.FirstName, &user.LastName, &user.MiddleName, &user.Password, &user.EmailAddress,
		&user.Picture, &user.Status, &user.Role, &user.DateOfBirth, &user.DateJoined)
	if err != nil {
		return user, err
	}

	DB.Close()

	return user, nil
}

// Post inserts all the specific record into the database
func Post(user model.User) model.User {
	DB, err := database.NewOpen()

	var lastInsertID uint64

	const shortForm = "2006-01-02"
	actualTime := model.NullTime{Time: user.DateOfBirth.Time, Valid: true}
	enteredTime, _ := time.Parse(shortForm, actualTime.Time.String())

	dob := enteredTime //model.NullTime{time.Now(), user.DateOfBirth != nil} //, _ := user.DateOfBirth.MarshalJSON()
	dj := time.Now()   //, _ := user.DateJoined.MarshalJSON()
	middleName := sql.NullString{String: user.MiddleName, Valid: user.MiddleName != ""}
	picture := sql.NullString{String: user.Picture, Valid: user.Picture != ""}

	sqlStatement := `INSERT INTO _user (user_name, first_name, last_name, middle_name, password, email_address, picture, status, role, date_of_birth, date_joined) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING uid`

	err = DB.QueryRow(sqlStatement, user.UserName, user.FirstName, user.LastName, middleName, user.Password, user.EmailAddress, picture, user.Status, user.Role, dob, dj).Scan(&lastInsertID)
	if err != nil {
		panic(err)
	}
	fmt.Println("New record ID is:", lastInsertID)

	DB.Close()

	return user
}

// Put updates an existing record into the database
func Put(uid uint64 /*, user user.model*/) {
	DB, err := database.NewOpen()
	if err != nil {
		fmt.Println(err)
	}

	DB.Close()
}

// Delete removes a user from the database
func Delete(uid uint64) {
	DB, err := database.NewOpen()
	if err != nil {
		fmt.Println(err)
	}

	/*rows, err := DB.Query("SELECT user_name, first_name FROM _user LIMIT $1", 3)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	bks := make([]model.User, 0)
	for rows.Next() {
		var userName string
		var firstName string
		user := model.User{}
		err := rows.Scan(&userName, &firstName)
		if err != nil {
			return nil, err
		}
		user.UserName = userName
		user.FirstName = firstName
		fmt.Printf("%8v | %6v \n", userName, firstName)
		bks = append(bks, user)
	}
	if err = rows.Err(); err != nil {
		return nil, err
	}
	*/

	DB.Close()

}
