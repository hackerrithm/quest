package server

import (
	"context"
	"fmt"
	"log"
	"net/http"
	"os"
	"os/signal"
	"time"

	"github.com/reacthead/quest/internal/app/controller"
	"github.com/reacthead/quest/internal/app/shared/database"

	"github.com/gorilla/mux"
)

// DBInitializerCaller starts Postgres db
func DBInitializerCaller() {
	DB, err := database.NewGormOpen()

	if err != nil {
		panic(err.Error())
	}

	fmt.Println("Connected to database: ", DB)

	//Create table for model `Task`
	// DB.CreateTable(&model.User{})

	//will append "ENGINE=InnoDB" to the SQL statement when creating table `task`
	// DB.Set("gorm:table_options", "ENGINE=InnoDB").CreateTable(&model.User{})

	//Create table for model `Task`
	// DB.CreateTable(&model.Task{})

	//will append "ENGINE=InnoDB" to the SQL statement when creating table `task`
	//DB.Set("gorm:table_options", "ENGINE=InnoDB").CreateTable(&model.Task{})

}

// Server starts the app on a port
func Server() {
	var wait time.Duration
	DBInitializerCaller()

	router := mux.NewRouter()

	router.HandleFunc("/users", controller.GetUsers).Methods("GET")
	router.HandleFunc("/user/{id}", controller.GetUser).Methods("GET")
	router.HandleFunc("/users", controller.CreateUser).Methods("POST")
	router.HandleFunc("/user/{id}", controller.UpdateUser).Methods("PUT")
	router.HandleFunc("/user/{id}", controller.DeleteUser).Methods("DELETE")

	router.HandleFunc("/tasks", controller.GetTasks).Methods("GET")
	router.HandleFunc("/task/{id}", controller.GetTask).Methods("GET")
	router.HandleFunc("/tasks", controller.CreateTask).Methods("POST")
	router.HandleFunc("/task/{id}", controller.UpdateTask).Methods("PUT")
	router.HandleFunc("/task/{id}", controller.DeleteTask).Methods("DELETE")

	srv := &http.Server{
		Handler: router,
		Addr:    "127.0.0.1:7000",
		// Good practice: enforce timeouts for servers you create!
		WriteTimeout: 15 * time.Second,
		ReadTimeout:  15 * time.Second,
		IdleTimeout:  120 * time.Minute,
	}

	// Run our server in a goroutine so that it doesn't block.
	go func() {
		if err := srv.ListenAndServe(); err != nil {
			log.Println(err)
		}
	}()

	c := make(chan os.Signal, 1)
	signal.Notify(c, os.Interrupt)

	// Block until we receive our signal.
	<-c

	// Create a deadline to wait for.
	ctx, cancel := context.WithTimeout(context.Background(), wait)
	defer cancel()
	// Doesn't block if no connections, but will otherwise wait
	// until the timeout deadline.
	srv.Shutdown(ctx)
	// Optionally, you could run srv.Shutdown in a goroutine and block on
	// <-ctx.Done() if your application should wait for other services
	// to finalize based on context cancellation.
	log.Println("shutting down")
	os.Exit(0)
}
