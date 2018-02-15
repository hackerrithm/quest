package server

import (
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/reacthead/quest/internal/app/controller"
	"github.com/reacthead/quest/internal/app/model"
)

func greetTheWorld(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello New App!")
}

// Server starts the app on a port
func Server() {
	router := mux.NewRouter()
	//database.StartDataBase()
	controller.People = append(controller.People, model.NewPerson(1, "kmr", "passcode", "m", "Kemar", "Galloway", "A", "kg@gmail.com", "", "", ""))
	controller.People = append(controller.People, model.NewPerson(2, "ashly", "passcode", "f", "Ashley", "Galloway", "A", "ag@gmail.com", "", "", ""))

	router.HandleFunc("/people", controller.GetPeopleEndpoint).Methods("GET")
	router.HandleFunc("/people/{id}", controller.GetPersonEndpoint).Methods("GET")
	router.HandleFunc("/people/{id}", controller.CreatePersonEndpoint).Methods("POST")
	router.HandleFunc("/people/{id}", controller.DeletePersonEndpoint).Methods("DELETE")
	log.Fatal(http.ListenAndServe(":7000", router))
}
