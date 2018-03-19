package postgres

import (
	"fmt"

	"github.com/reacthead/alpharithm/engine"

	"github.com/reacthead/alpharithm/domain"
	"github.com/reacthead/alpharithm/shared/database"
)

type (
	noteRepository struct {
		sess database.GORMDB
	}
)

func NewNoteRepository(sess database.GORMDB) engine.NoteRepository {
	return noteRepository{sess: sess}
}

func (tsk noteRepository) Add(u *domain.Note) error {
	tsk.sess.NewRecord(u)
	tsk.sess.Create(&u)
	tsk.sess.NewRecord(u)
	return nil
}

func (tsk noteRepository) Find(id uint, userID uint) (*domain.Note, error) {
	var u domain.Note
	err := tsk.sess.Where(`id=? AND user_id=?`, id, userID).Find(&u)
	if err != nil {
		fmt.Println(err)
	}
	return &u, nil

}

func (tsk noteRepository) FindAll(userID uint) (*[]domain.Note, error) {
	var notes []domain.Note
	err := tsk.sess.Where(`user_id=?`, userID).Find(&notes)
	if err != nil {
		fmt.Println(err)
	}
	return &notes, nil

}

func (tsk noteRepository) Update(id uint, userID uint, note *domain.Note) (*domain.Note, error) {
	var u domain.Note
	err := tsk.sess.Where(`id = ?  AND user_id = ?`, id, userID).Model(&u).Updates(note)
	if err != nil {
		fmt.Println(err)
	}
	return &u, nil

}

func (tsk noteRepository) Delete(id uint, userID uint) uint {
	tsk.sess.Where(`id = ? AND user_id = ?`, id, userID).Unscoped().Delete(&domain.Note{})
	return id
}
