package engine

import (
	"fmt"
	"sync"
	"time"

	"github.com/reacthead/quest/domain"
)

type (
	TokenType uint8

	User interface {
		GenToken(*domain.User, TokenType) (string, error)
		Register(*domain.User) (*domain.User, error)
		Login(*domain.User) (*domain.User, error)
		Get( /**domain.User*/ uint) (*domain.User, error)
		Edit(uint, *domain.User) (*domain.User, error)
		Remove(uint) uint
	}

	user struct {
		repo UserRepository
		jwt  JWTSignParser
	}

	// UserActivateRequest context for user.Activate()
	UserActivateRequest struct {
		Token string `json:"token"`
	}
)

const (
	AuthToken TokenType = iota
	ActivationToken
	PasswordResetToken
)

var (
	userInstance User
	userOnce     sync.Once
)

func (f *factory) NewUser() User {
	userOnce.Do(func() {
		userInstance = &user{
			repo: f.NewUserRepository(),
			jwt:  f.jwt,
		}
	})
	return userInstance
}

func (u *user) GenToken(usr *domain.User, t TokenType) (string, error) {
	claims := map[string]interface{}{
		"type":     t,
		"username": usr.UserName,
	}
	switch t {
	case AuthToken:
		claims["exp"] = time.Now().Add(time.Hour * 6).Unix()
	case ActivationToken:
		claims["exp"] = time.Now().Add(time.Hour * 24).Unix()
	case PasswordResetToken:
		claims["exp"] = time.Now().Add(time.Hour * 3).Unix()
	default:
		return "", fmt.Errorf("undefined token type %v", t)
	}
	return u.jwt.Sign(claims, "YOUR-SECRET-KEY")
}

// func (u *user) Activate(r *UserActivateRequest) error {
// 	email, err := u.getEmailFromToken(r.Token, ActivationToken)
// 	if err != nil {
// 		return err
// 	}

// 	usr, err := u.repo.OneByEmail(email)
// 	if err != nil {
// 		return err
// 	}

// 	// check if already active?
// 	if *usr.IsActive {
// 		return nil
// 	}

// 	// activate user
// 	usr.IsActive = boolPtr(true)

// 	return u.repo.Update(usr)
// }

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

func (u *user) Login(r *domain.User) (*domain.User, error) {

	usr, err := u.repo.OneByUserName(r.UserName)
	if err != nil {
		fmt.Println("errors")
	}
	return usr, nil
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
