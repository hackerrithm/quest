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

	router.HandleFunc("/", greetTheWorld).Methods("GET")
	router.HandleFunc("/people", controller.GetUsers).Methods("GET")
	router.HandleFunc("/people/{id}", controller.GetUser).Methods("GET")
	router.HandleFunc("/people", controller.CreateUser).Methods("POST")
	router.HandleFunc("/people/{id}", controller.DeleteUser).Methods("DELETE")

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
