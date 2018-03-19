package domain

import (
	"time"

	"github.com/jinzhu/gorm"
)

type (
	Post struct {
		gorm.Model
		Author       User
		Topic        string `json:"topic"`
		Category     string `json:"category"`
		ContentText  string `json:"contentText"`
		ContentPhoto string `json:"contentPhoto"`
		Likes        []Like
		Upvotes      []Upvote
		Downvotes    []Downvote
		Comments     []Comment
		Reports      []Report
		Views        []View
	}

	Like struct {
		UID    uint `gorm:"primary_key"`
		UserID uint
	}

	View struct {
		UID       uint `gorm:"primary_key"`
		UserID    uint
		CreatedAt time.Time
	}

	Report struct {
		UID      uint `gorm:"primary_key"`
		UserID   uint
		complain string
	}

	Upvote struct {
		UID    uint `gorm:"primary_key"`
		UserID uint
	}

	Downvote struct {
		UID    uint `gorm:"primary_key"`
		UserID uint
	}

	Comment struct {
		UID    uint `gorm:"primary_key"`
		UserID uint
		Text   string
	}
)
