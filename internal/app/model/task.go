package model

import "time"

// Task model
type Task struct {
	UID         uint64
	Author      string    `json:"author"`
	Title       string    `json:"title"`
	Content     string    `json:"content"`
	Category    string    `json:"category"`
	Status      string    `json:"status"`
	DateCreated time.Time `json:"dateCreated"`
}

// NewTask constructor
func NewTask(
	author,
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
