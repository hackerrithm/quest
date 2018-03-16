package user

import (
	"fmt"
	"time"

	"github.com/reacthead/quest/internal/app/domain/model"
	"github.com/reacthead/quest/internal/app/infrastructure/shared/database"
	"github.com/reacthead/quest/internal/app/infrastructure/shared/errorplay"
)

// GetAll gets all the records from the database
func GetAll() ([]model.User, error) {
	DB, err := database.NewGormOpen()
	errorplay.CheckErr(err)

	var users []model.User
	if err := DB.Find(&users).Error; err != nil {
		fmt.Println(err)
	}

	DB.Close()
	return users, nil
}

// GetOne gets one the record from the database
func GetOne(uid uint64) (model.User, error) {

	DB, err := database.NewGormOpen()
	errorplay.CheckErr(err)

	var user model.User
	if err := DB.Where("uid = ?", uid).First(&user).Error; err != nil {
		fmt.Println(err)
	}

	DB.Close()
	return user, nil
}

// Post inserts all the specific record into the database
func Post(user model.User) model.User {

	DB, err := database.NewGormOpen()
	errorplay.CheckErr(err)

	user.DateJoined = time.Now()

	DB.NewRecord(user)
	DB.Create(&user)
	DB.NewRecord(user)

	return user
}

// Put updates an existing record into the database
func Put(uid uint64, user model.User) (uint64, error) {
	DB, err := database.NewGormOpen()

	var u model.User

	DB.Model(&u).Updates(user)

	return user.UID, err
}

// Delete removes an existing record into the database
func Delete(uid uint64) (uint64, error) {
	DB, err := database.NewGormOpen()

	var user model.User
	//userModel := DB.Find(&user, &model.User{UID: uid})

	userModel := DB.Where("uid = ?", uid).Unscoped().Delete(&model.User{})

	fmt.Println(userModel)

	return user.UID, err
}
