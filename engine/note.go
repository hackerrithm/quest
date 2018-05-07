package engine

import (
	"sync"

	"github.com/reacthead/quest/domain"
)

type (
	Note interface {
		Show(uint, uint) (*domain.Note, error)
		ShowAll(uint) (*[]domain.Note, error)
		Create(*domain.Note) (*domain.Note, error)
		Edit(uint, uint, *domain.Note) (*domain.Note, error)
		Remove(uint, uint) uint
	}

	note struct {
		repo NoteRepository
	}
)

var (
	noteInstance Note
	noteOnce     sync.Once
)

func (f *factory) NewNote() Note {
	noteOnce.Do(func() {
		noteInstance = &note{
			repo: f.NewNoteRepository(),
		}
	})
	return noteInstance
}

func (n *note) Show(id uint, userID uint) (*domain.Note, error) {
	return n.repo.Find(id, userID)
}

func (n *note) ShowAll(userParam1Index uint) (*[]domain.Note, error) {
	return n.repo.FindAll(userParam1Index)
}

func (n *note) Create(r *domain.Note) (*domain.Note, error) {

	var nte domain.Note

	nte.Title = r.Title
	nte.Content = r.Content
	nte.Category = r.Category
	nte.Status = r.Status
	nte.UserID = r.UserID

	err := n.repo.Add(&nte)
	if err != nil {
		return nil, err
	}

	return &nte, nil
}

func (n *note) Edit(id uint, userID uint, r *domain.Note) (*domain.Note, error) {

	var nte domain.Note
	nte = *r

	noteObj, err := n.repo.Update(id, userID, &nte)
	if err != nil {
		return nil, err
	}

	return noteObj, nil
}

func (n *note) Remove(id uint, userID uint) uint {
	uid := n.repo.Delete(id, userID)
	return uid
}
