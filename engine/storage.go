package engine

import (
	"github.com/reacthead/quest/domain"
)

type (
	// UserRepository to be decided
	UserRepository interface {
		Add(*domain.User) error
		Find(uint) (*domain.User, error)
		OneByUserName(string) (*domain.User, error)
		Update(uint, *domain.User) (*domain.User, error)
		Delete(uint) uint
	}

	// NoteRepository to be decided
	NoteRepository interface {
		Add(*domain.Note) error
		Find(uint, uint) (*domain.Note, error)
		FindAll(uint) (*[]domain.Note, error)
		Update(uint, uint, *domain.Note) (*domain.Note, error)
		Delete(uint, uint) uint
	}

	// StorageFactory to be decided
	StorageFactory interface {
		NewUserRepository() UserRepository
		NewNoteRepository() NoteRepository
	}
)
