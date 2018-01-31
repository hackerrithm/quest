package model

import (
	"time"

	"gopkg.in/mgo.v2/bson"
)

// User model
type User struct {
	ID           bson.ObjectId `json:"id" bson:"_id"`
	UserName     string        `json:"username" bson:"username"`
	Password     string        `json:"password" bson:"password"`
	Gender       string        `json:"gender" bson:"gender"`
	FirstName    string        `json:"firstname" bson:"firstname"`
	LastName     string        `json:"lastname" bson:"lastname"`
	MiddleName   string        `json:"middlename" bson:"middlename"`
	EmailAddress string        `json:"emailaddress" bson:"emailaddress"`
	Picture      string        `json:"picture" bson:"picture"`
	Status       string        `json:"status" bson:"store"`
	Role         string        `json:"role" bson:"role"`
	Type         string        `json:"type" bson:"type"`
	DateOfBirth  time.Time     `json:"dateOfBirth" bson:"dateOfBirth"`
	DateJoined   time.Time     `json:"dateJoined" bson:"dateJoined"`
	chanF        chan func()
}

// NewUser constructor
func NewUser(
	userName,
	password,
	gender,
	fName,
	lName,
	mName,
	emailAddress,
	picture,
	status,
	role,
	tpe string,
	dateOfBirth,
	dateJoined time.Time) *User {
	user := new(User)
	user.UserName = userName
	user.Password = password
	user.Gender = gender
	user.FirstName = fName
	user.LastName = lName
	user.MiddleName = mName
	user.EmailAddress = emailAddress
	user.Picture = picture
	user.Status = status
	user.Role = role
	user.Type = tpe
	user.DateOfBirth = dateOfBirth
	user.DateJoined = dateJoined
	return user
}
