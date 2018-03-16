package model

import (
	"time"

	"github.com/jinzhu/gorm"
)

// User model
type User struct {
	gorm.Model
	UID             uint64    `gorm:"primary_key"`
	UserName        string    `json:"username"`
	Password        string    `json:"password"`
	Gender          string    `json:"gender"`
	FirstName       string    `json:"firstname"`
	LastName        string    `json:"lastname"`
	MiddleName      string    `json:"middlename"`
	EmailAddress    string    `json:"emailaddress"`
	Picture         string    `json:"picture"`
	Status          string    `json:"status"`
	Role            string    `json:"role"`
	PermissionLevel int32     `json:"permission"`
	IsActive        bool      `json:"isActive"`
	IsReported      bool      `json:"isReported"`
	IsBlocked       bool      `json:"isBlocked"`
	DateJoined      time.Time `json:"datejoined"`
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
	dateJoined time.Time) User {
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
	user.DateJoined = dateJoined
	return *user
}
