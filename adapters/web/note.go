package web

import (
	"fmt"
	"log"
	"net/http"
	"strconv"

	"github.com/gorilla/mux"
	"github.com/reacthead/quest/domain"
	"github.com/reacthead/quest/engine"
)

type (
	note struct {
		engine.Note
	}
)

func newNote(f engine.Factory) *note {
	return &note{f.NewNote()}
}

func (u *note) retrieve(w http.ResponseWriter, r *http.Request) error {

	userParam1Index, err := getUserParam(r)
	if err != nil {
		return err
	}

	params := mux.Vars(r)
	uid := params["id"]
	i, err := strconv.Atoi(uid)
	if err != nil {
		return err
	}
	id := uint(i)

	usr, err := u.Show(id, userParam1Index)
	if err != nil {
		return err
	}

	RespondWithJson(w, http.StatusOK, usr)
	return nil
}

func (u *note) retrieveAll(w http.ResponseWriter, r *http.Request) error {

	userParam1Index, err := getUserParam(r)
	if err != nil {
		return err
	}

	usrs, err := u.ShowAll(userParam1Index)
	if err != nil {
		return err
	}

	RespondWithJson(w, http.StatusOK, usrs)
	return nil
}

func (u *note) create(w http.ResponseWriter, r *http.Request) error {
	req := new(domain.Note)
	if err := decodeReq(r, req); err != nil {
		return err
	}
	usr, err := u.Create(req)
	if err != nil {
		return err
	}

	RespondWithJson(w, http.StatusOK, usr)

	return nil
}

func (u *note) edit(w http.ResponseWriter, r *http.Request) error {

	userParam1Index, err := getUserParam(r)
	if err != nil {
		return err
	}

	params := mux.Vars(r)
	uid := params["id"]
	i, err := strconv.Atoi(uid)
	if err != nil {
		return err
	}
	id := uint(i)

	req := new(domain.Note)
	if err := decodeReq(r, req); err != nil {
		return err
	}

	usr, err := u.Edit(id, userParam1Index, req)
	if err != nil {
		return err
	}

	RespondWithJson(w, http.StatusOK, usr)

	return nil
}

func (u *note) remove(w http.ResponseWriter, r *http.Request) error {

	userParam1Index, err := getUserParam(r)
	if err != nil {
		return err
	}

	params := mux.Vars(r)
	uid := params["id"]
	i, err := strconv.Atoi(uid)
	if err != nil {
		log.Fatal(err)
	}
	id := uint(i)

	removedObjID := u.Remove(id, userParam1Index)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println(removedObjID)

	return nil
}

func getUserParam(r *http.Request) (uint, error) {
	param1 := r.URL.Query().Get("user-id")

	index, err := strconv.Atoi(param1)
	if err != nil {
		return 0, err
	}

	userParam1Index := uint(index)

	return userParam1Index, nil
}
