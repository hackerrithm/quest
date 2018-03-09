package server

import (
	"fmt"
	"log"
	"net/http"
	"os"
	"os/signal"
	"syscall"
	"time"

	"github.com/reacthead/quest/internal/app/controller"
	"github.com/reacthead/quest/internal/app/shared/database"

	"github.com/gorilla/mux"
)

func greetTheWorld(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello New App!")
}

// DBInitializerCaller starts MySQL db
func DBInitializerCaller() {
	DB, err := database.NewOpen()

	if err != nil {
		panic(err.Error())
	}

	defer DB.Close()

	// Open doesn't open a connection. Validate DSN data:
	err = DB.Ping()
	if err != nil {
		panic(err.Error()) // proper error handling instead of panic in your app
	}

	fmt.Println("Connected to database")

}

// Server starts the app on a port
func Server() {
	DBInitializerCaller()

	router := mux.NewRouter()

	//controller.People = append(controller.People, model.NewPerson(1, "kmr", "passcode", "m", "Kemar", "Galloway", "A", "kg@gmail.com", "", "", ""))
	//controller.People = append(controller.People, model.NewPerson(2, "ashly", "passcode", "f", "Ashley", "Galloway", "A", "ag@gmail.com", "", "", ""))

	router.HandleFunc("/", greetTheWorld).Methods("GET")
	router.HandleFunc("/people", controller.GetPeopleEndpoint).Methods("GET")
	router.HandleFunc("/people/{id}", controller.GetPersonEndpoint).Methods("GET")
	router.HandleFunc("/people/{id}", controller.CreatePersonEndpoint).Methods("POST")
	router.HandleFunc("/people/{id}", controller.DeletePersonEndpoint).Methods("DELETE")

	srv := &http.Server{
		Handler: router,
		Addr:    "127.0.0.1:7000",
		// Good practice: enforce timeouts for servers you create!
		WriteTimeout: 15 * time.Second,
		ReadTimeout:  15 * time.Second,
		IdleTimeout:  120 * time.Minute,
	}

	c := make(chan os.Signal, 1)
	signal.Notify(c, os.Interrupt)
	signal.Notify(c, syscall.SIGTERM)
	go func() {
		<-c
		log.Println("Shutting down server")
		os.Exit(1)
	}()

	log.Fatal(srv.ListenAndServe())
}
