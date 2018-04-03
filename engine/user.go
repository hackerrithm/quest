package engine

import (
	"sync"

	"github.com/reacthead/quest/domain"
)

type (
	User interface {
		Register(*domain.User) (*domain.User, error)
		Get( /**domain.User*/ uint) (*domain.User, error)
		Edit(uint, *domain.User) (*domain.User, error)
		Remove(uint) uint
	}

	user struct {
		repo UserRepository
	}
)

var (
	userInstance User
	userOnce     sync.Once
)

func (f *factory) NewUser() User {
	userOnce.Do(func() {
		userInstance = &user{
			repo: f.NewUserRepository(),
		}
	})
	return userInstance
}

func (u *user) Get(r uint /**domain.User*/) (*domain.User, error) {
	return u.repo.Find(r /*.ID*/)
}

func (u *user) Register(r *domain.User) (*domain.User, error) {

	var usr domain.User

	usr.FirstName = r.FirstName
	usr.LastName = r.LastName
	usr.UserName = r.UserName
	usr.SetPassword(r.Password)
	usr.Gender = r.Gender
	usr.MiddleName = r.MiddleName
	usr.PermissionLevel = r.PermissionLevel
	usr.Role = r.Role
	usr.Status = r.Status

	err := u.repo.Add(&usr)
	if err != nil {
		return nil, err
	}

	return &usr, nil
}

func (u *user) Edit(id uint, r *domain.User) (*domain.User, error) {

	var usr domain.User
	usr = *r
	// usr.FirstName = r.FirstName
	// usr.LastName = r.LastName
	// usr.UserName = r.UserName
	// usr.SetPassword(r.Password)
	// usr.IsActive = r.IsAdmin
	// usr.IsAdmin = r.IsAdmin
	// usr.Gender = r.Gender
	// usr.MiddleName = r.MiddleName
	// usr.IsBlocked = r.IsBlocked
	// usr.IsReported = r.IsReported
	// usr.PermissionLevel = r.PermissionLevel
	// usr.Role = r.Role
	// usr.Status = r.Status
	// usr.Picture = r.Picture

	userObj, err := u.repo.Update(id, &usr)
	if err != nil {
		return nil, err
	}

	return userObj, nil
}

func (u *user) Remove(id uint) uint {
	uid := u.repo.Delete(id)
	return uid
}
