package web

import (
	"fmt"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/reacthead/alpharithm/engine"
)

type (
	errHandlerFunc func(http.ResponseWriter, *http.Request) error
)

func (h errHandlerFunc) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	if err := h(w, r); err != nil {
		//h.handle(w, err)
		fmt.Println(w, err)
	}
}

func NewWebAdapter(f engine.Factory) http.Handler {
	r := mux.NewRouter()

	f.NewUser()
	f.NewNote()

	user := newUser(f)
	note := newNote(f)

	r.Handle("/v1/auth/register", errHandlerFunc(user.register)).Methods("POST")
	r.Handle("/v1/auth/retrieve/{id}", (errHandlerFunc(user.retrieve))).Methods("GET")
	r.Handle("/v1/auth/edit/{id}", errHandlerFunc(user.edit)).Methods("PUT")
	r.Handle("/v1/auth/remove/{id}", errHandlerFunc(user.remove)).Methods("DELETE")

	r.Handle("/v1/auth/note/create", errHandlerFunc(note.create)).Methods("POST")
	r.Handle("/v1/auth/note/{id}/retrieve", (errHandlerFunc(note.retrieve))).Methods("GET")
	r.Handle("/v1/auth/note/retrieve-all", (errHandlerFunc(note.retrieveAll))).Methods("GET")
	r.Handle("/v1/auth/note/{id}/edit", errHandlerFunc(note.edit)).Methods("PUT")
	r.Handle("/v1/auth/note/{id}/remove", errHandlerFunc(note.remove)).Methods("DELETE")

	return r
}
