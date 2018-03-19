package domain

import (
	"github.com/jinzhu/gorm"
)

type (
	Note struct {
		gorm.Model
		Tasks    []Task `json:"tasks"`
		Title    string `json:"title"`
		Content  string `json:"content"`
		Category string `json:"category"`
		Status   string `json:"status"`
		UserID   uint   `json:"user-id" gorm:"index"`
	}

	Task struct {
		gorm.Model
		NoteID  uint   `json:"note-id" gorm:"index"`
		Content string `json:"content"`
	}
)
