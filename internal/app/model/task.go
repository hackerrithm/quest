package model

import (
	"fmt"
	"time"

	"github.com/jinzhu/gorm"
)

// Task model
type Task struct {
	gorm.Model
	UID         uint64    `gorm:"primary_key"`
	Author      uint64    `json:"author"`
	Title       string    `json:"title"`
	Content     string    `json:"content"`
	Category    string    `json:"category"`
	Status      string    `json:"status"`
	DateCreated time.Time `json:"dateCreated"`
}

// NewTask constructor
func NewTask(
	author uint64,
	title,
	content,
	category,
	status string,
	dateCreated time.Time) *Task {
	task := new(Task)
	task.Author = author
	task.Title = title
	task.Content = content
	task.Category = category
	task.Status = status
	task.DateCreated = dateCreated
	return task
}

func (t Task) String() string {
	return fmt.Sprintf("Task<%d %s %d>", t.UID, t.Title, t.Author)
}
