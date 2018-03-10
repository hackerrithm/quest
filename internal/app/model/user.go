package model

import (
	"fmt"
	"reflect"
	"time"

	"github.com/lib/pq"
)

// User model
type User struct {
	UID          uint64
	UserName     string   `json:"username" bson:"username"`
	Password     string   `json:"password" bson:"password"`
	Gender       string   `json:"gender" bson:"gender"`
	FirstName    string   `json:"firstname" bson:"firstname"`
	LastName     string   `json:"lastname" bson:"lastname"`
	MiddleName   string   `json:"middlename" bson:"middlename"`
	EmailAddress string   `json:"emailaddress" bson:"emailaddress"`
	Picture      string   `json:"picture" bson:"picture"`
	Status       string   `json:"status" bson:"store"`
	Role         string   `json:"role" bson:"role"`
	DateOfBirth  NullTime `json:"dateOfBirth" bson:"dateOfBirth"`
	DateJoined   NullTime `json:"dateJoined" bson:"dateJoined"`
	chanF        chan func()
}

// NewUser constructor
func NewUser(
	uid uint64,
	userName,
	password,
	gender,
	fName,
	lName string,
	mName string,
	emailAddress string,
	picture string,
	status,
	role string,
	dateOfBirth,
	dateJoined NullTime) User {
	user := new(User)
	user.UID = uid
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
	user.DateOfBirth = dateOfBirth
	user.DateJoined = dateJoined
	return *user
}

// NullTime is an alias for mysql.NullTime data type
type NullTime pq.NullTime

// Scan implements the Scanner interface for NullTime
func (nt *NullTime) Scan(value interface{}) error {
	var t pq.NullTime
	if err := t.Scan(value); err != nil {
		return err
	}

	// if nil then make Valid false
	if reflect.TypeOf(value) == nil {
		*nt = NullTime{t.Time, false}
	} else {
		*nt = NullTime{t.Time, true}
	}

	return nil
}

// MarshalJSON for NullTime
func (nt *NullTime) MarshalJSON() ([]byte, error) {
	if !nt.Valid {
		return []byte("null"), nil
	}
	val := fmt.Sprintf("\"%s\"", nt.Time.Format(time.RFC3339))
	return []byte(val), nil
}

// UnmarshalJSON for NullTime
func (nt *NullTime) UnmarshalJSON(b []byte) error {
	s := string(b)
	// s = Stripchars(s, "\"")

	x, err := time.Parse(time.RFC3339, s)
	if err != nil {
		nt.Valid = false
		return err
	}

	nt.Time = x
	nt.Valid = true
	return nil
}
