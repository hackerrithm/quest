package tasks

import (
	"fmt"
	"time"

	"github.com/reacthead/quest/internal/app/model"
	"github.com/reacthead/quest/internal/app/shared/database"
	"github.com/reacthead/quest/internal/app/shared/errorplay"
)

// GetAll gets all the records from the database
func GetAll() ([]model.Task, error) {
	DB, err := database.NewGormOpen()
	errorplay.CheckErr(err)

	var tasks []model.Task
	if err := DB.Find(&tasks).Error; err != nil {
		fmt.Println(err)
	}

	DB.Close()
	return tasks, nil
}

// GetOne gets one the record from the database
func GetOne(uid uint64) (model.Task, error) {

	DB, err := database.NewGormOpen()
	errorplay.CheckErr(err)

	var task model.Task
	if err := DB.Where("uid = ?", uid).First(&task).Error; err != nil {
		fmt.Println(err)
	}

	DB.Close()
	return task, nil
}

// Post inserts all the specific record into the database
func Post(task model.Task) model.Task {

	DB, err := database.NewGormOpen()
	errorplay.CheckErr(err)

	task.DateCreated = time.Now()

	DB.NewRecord(task)
	DB.Create(&task)
	DB.NewRecord(task)

	return task
}

// Put updates an existing record into the database
func Put(uid uint64, task model.Task) (uint64, error) {
	DB, err := database.NewGormOpen()

	var t model.Task

	DB.Model(&t).Updates(task)

	return task.UID, err
}

// Delete removes an existing record into the database
func Delete(uid uint64) (uint64, error) {
	DB, err := database.NewGormOpen()

	var task model.Task

	taskModel := DB.Where("uid = ?", uid).Unscoped().Delete(&model.Task{})

	fmt.Println(taskModel)

	return task.UID, err
}
