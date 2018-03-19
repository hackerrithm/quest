package postgres

import (
	"fmt"

	"github.com/reacthead/alpharithm/domain"
	"github.com/reacthead/alpharithm/engine"
	"github.com/reacthead/alpharithm/shared/database"
)

type (
	userRepository struct {
		sess database.GORMDB
	}
)

func NewUserRepository(sess database.GORMDB) engine.UserRepository {
	return userRepository{sess: sess}
}

func (ur userRepository) Add(u *domain.User) error {
	ur.sess.NewRecord(u)
	ur.sess.Create(&u)
	ur.sess.NewRecord(u)
	return nil
}

func (ur userRepository) Find(id uint) (*domain.User, error) {
	var u domain.User
	err := ur.sess.Where(`id=?`, id).Find(&u)
	if err != nil {
		fmt.Println(err)
	}
	return &u, nil

}

func (ur userRepository) Update(id uint, user *domain.User) (*domain.User, error) {
	var u domain.User
	err := ur.sess.Where("id = ?", id).Model(&u).Updates(user)
	if err != nil {
		fmt.Println(err)
	}
	return &u, nil

}

func (ur userRepository) Delete(id uint) uint {
	ur.sess.Where("id = ?", id).Unscoped().Delete(&domain.User{})
	return id
}
