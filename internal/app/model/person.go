package model

import (
	"time"

	"github.com/reacthead/quest/internal/app/shared/database"
)

// Person model
type Person struct {
	UID          uint64
	UserName     string    `json:"username" bson:"username"`
	Password     string    `json:"password" bson:"password"`
	Gender       string    `json:"gender" bson:"gender"`
	FirstName    string    `json:"firstname" bson:"firstname"`
	LastName     string    `json:"lastname" bson:"lastname"`
	MiddleName   string    `json:"middlename" bson:"middlename"`
	EmailAddress string    `json:"emailaddress" bson:"emailaddress"`
	Picture      string    `json:"picture" bson:"picture"`
	Status       string    `json:"status" bson:"store"`
	Role         string    `json:"role" bson:"role"`
	DateOfBirth  time.Time `json:"dateOfBirth" bson:"dateOfBirth"`
	DateJoined   time.Time `json:"dateJoined" bson:"dateJoined"`
	chanF        chan func()
}

// NewPerson constructor
func NewPerson(
	uid uint64,
	userName,
	password,
	gender,
	fName,
	lName,
	mName,
	emailAddress,
	picture,
	status,
	role string) Person {
	person := new(Person)
	person.UID = uid
	person.UserName = userName
	person.Password = password
	person.Gender = gender
	person.FirstName = fName
	person.LastName = lName
	person.MiddleName = mName
	person.EmailAddress = emailAddress
	person.Picture = picture
	person.Status = status
	person.Role = role
	// person.DateOfBirth = dateOfBirth
	// person.DateJoined = dateJoined
	return *person
}

func GetAll() ([]Person, error) {
	rows, err := database.DB.Query("SELECT user_name, first_name FROM person LIMIT $1", 3)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	bks := make([]Person, 0)
	for rows.Next() {
		var userName string
		var firstName string
		bk := Person{}
		err := rows.Scan(&userName, &firstName)
		if err != nil {
			return nil, err
		}
		bks = append(bks, bk)
	}
	if err = rows.Err(); err != nil {
		return nil, err
	}
	return bks, nil
}
