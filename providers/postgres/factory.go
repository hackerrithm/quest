package postgres

import (
	"sync"

	"github.com/reacthead/quest/shared/database"

	"github.com/reacthead/quest/engine"
)

type (
	storageFactory struct {
		sess database.GORMDB
	}
)

var (
	userRepositoryInstance engine.UserRepository
	userRepositoryOnce     sync.Once
	noteRepositoryInstance engine.NoteRepository
	noteRepositoryOnce     sync.Once
)

func NewStorage(session database.GORMDB) engine.StorageFactory {
	return &storageFactory{session}
}

func (sf *storageFactory) NewUserRepository() engine.UserRepository {
	userRepositoryOnce.Do(func() {
		userRepositoryInstance = NewUserRepository(sf.sess)
	})
	return userRepositoryInstance
}

func (sf *storageFactory) NewNoteRepository() engine.NoteRepository {
	noteRepositoryOnce.Do(func() {
		noteRepositoryInstance = NewNoteRepository(sf.sess)
	})
	return noteRepositoryInstance
}
