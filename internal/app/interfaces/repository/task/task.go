package task

import (
	"fmt"
	"time"

	"github.com/reacthead/quest/internal/app/domain/model"
	"github.com/reacthead/quest/internal/app/infrastructure/shared/database"
	"github.com/reacthead/quest/internal/app/infrastructure/shared/errorplay"
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

// GetAllForUser gets all the records from the database
func GetAllForUser(id uint64) ([]model.Task, error) {
	DB, err := database.NewGormOpen()
	errorplay.CheckErr(err)

	var tasks []model.Task
	if err := DB.Where("user_id = ?", id).Find(&tasks).Error; err != nil {
		fmt.Println(err)
	}

	DB.Close()
	return tasks, nil
}

// GetAllForUserPaginated gets all the records from the database
/*func GetAllForUserPaginated(id uint64, request *http.Request) ([]model.Task, error) {
	DB, err := database.NewGormOpen()
	errorplay.CheckErr(err)

	var tasks []model.Task

	store, err := paging.NewGORMStore(DB.DB, tasks)
	if err != nil {
		log.Fatal(err)
	}

	errorplay.CheckErr(err)

	options := paging.NewOptions()

	paginator, _ := paging.NewOffsetPaginator(store, request, options)

	err = paginator.Page()
	if err != nil {
		log.Fatal(err)
	}

	if err := DB.Where("user_id = ?", id).Find(&tasks).Error; err != nil {
		fmt.Println(err)
	}

	DB.Close()
	return tasks, nil
}*/

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

	DB.Where("uid = ?", uid).Model(&t).Updates(task)

	DB.Close()

	return task.UID, err

}

// PutAll updates an existing record into the database
func PutAll(uid uint64, task model.Task) (uint64, error) {
	DB, err := database.NewGormOpen()

	DB.Where("uid = ?", uid).Model(model.Task{}).Updates(task)

	DB.Close()

	return task.UID, err
}

// Delete removes an existing record into the database
func Delete(uid uint64) (uint64, error) {
	DB, err := database.NewGormOpen()

	var task model.Task

	taskModel := DB.Where("uid = ?", uid).Unscoped().Delete(&model.Task{})

	DB.Close()

	fmt.Println(taskModel)

	return task.UID, err
}

// DeleteAll removes all existing records into the database
func DeleteAll(userID uint64) (uint64, error) {
	DB, err := database.NewGormOpen()

	taskModel := DB.Where("user_id = ?", userID).Unscoped().Delete(&model.Task{})

	DB.Close()

	fmt.Println(taskModel)

	return userID, err
}