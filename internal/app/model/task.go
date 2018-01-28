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
