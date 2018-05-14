package web

import (
	"fmt"
	"net/http"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
	"github.com/reacthead/quest/engine"
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

	r.Handle("/v1/auth/user/register", errHandlerFunc(user.register)).Methods("POST")
	r.Handle("/v1/auth/user/login", errHandlerFunc(user.login)).Methods("POST")
	r.Handle("/v1/auth/user/retrieve/{id}", (errHandlerFunc(user.retrieve))).Methods("GET")
	r.Handle("/v1/auth/user/edit/{id}", errHandlerFunc(user.edit)).Methods("PUT")
	r.Handle("/v1/auth/user/remove/{id}", errHandlerFunc(user.remove)).Methods("DELETE")

	r.Handle("/v1/auth/note/create", errHandlerFunc(note.create)).Methods("POST")
	r.Handle("/v1/auth/note/{id}/retrieve", (errHandlerFunc(note.retrieve))).Methods("GET")
	r.Handle("/v1/auth/note/retrieve-all", (errHandlerFunc(note.retrieveAll))).Methods("GET")
	r.Handle("/v1/auth/note/{id}/edit", errHandlerFunc(note.edit)).Methods("PUT")
	r.Handle("/v1/auth/note/{id}/remove", errHandlerFunc(note.remove)).Methods("DELETE")

	q := handlers.CORS(handlers.AllowedHeaders([]string{"X-Requested-With", "Content-Type", "Authorization"}),
		handlers.AllowedMethods([]string{"GET", "POST", "PUT", "HEAD", "DELETE", "OPTIONS"}),
		handlers.AllowedOrigins([]string{"*"}))(r)
	return q
}
