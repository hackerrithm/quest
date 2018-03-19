package web

import (
	"fmt"
	"log"
	"net/http"
	"strconv"

	"github.com/gorilla/mux"
	"github.com/reacthead/alpharithm/domain"
	"github.com/reacthead/alpharithm/engine"
)

type response struct {
	Result interface{} `json:"result"`
}

type (
	user struct {
		engine.User
	}
)

func newUser(f engine.Factory) *user {
	return &user{f.NewUser()}
}

func (u *user) retrieve(w http.ResponseWriter, r *http.Request) error {

	params := mux.Vars(r)
	uid := params["id"]
	i, err := strconv.Atoi(uid)
	if err != nil {
		return err
	}
	id := uint(i)

	usr, err := u.Get(&domain.User{UID: id})
	if err != nil {
		return err
	}

	RespondWithJson(w, http.StatusOK, usr)
	return nil
}

func (u *user) register(w http.ResponseWriter, r *http.Request) error {
	req := new(domain.User)
	if err := decodeReq(r, req); err != nil {
		return err
	}

	usr, err := u.Register(req)
	if err != nil {
		return err
	}

	RespondWithJson(w, http.StatusOK, usr)

	return nil
}

func (u *user) edit(w http.ResponseWriter, r *http.Request) error {
	params := mux.Vars(r)
	uid := params["id"]
	i, err := strconv.Atoi(uid)
	if err != nil {
		return err
	}
	id := uint(i)

	req := new(domain.User)
	if err := decodeReq(r, req); err != nil {
		return err
	}

	usr, err := u.Edit(id, req)
	if err != nil {
		return err
	}

	RespondWithJson(w, http.StatusOK, usr)

	return nil
}

func (u *user) remove(w http.ResponseWriter, r *http.Request) error {
	params := mux.Vars(r)
	uid := params["id"]
	i, err := strconv.Atoi(uid)
	if err != nil {
		log.Fatal(err)
	}
	id := uint(i)

	removedObjID := u.Remove(id)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println(removedObjID)

	return nil
}
