package model

import (
	"time"
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
	userName,
	password,
	gender,
	fName,
	lName,
	mName,
	emailAddress,
	picture,
	status,
	role string,
	dateOfBirth,
	dateJoined time.Time) Person {
	person := new(Person)
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
	person.DateOfBirth = dateOfBirth
	person.DateJoined = dateJoined
	return *person
}
