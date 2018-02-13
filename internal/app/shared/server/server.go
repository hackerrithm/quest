package server

import (
	"fmt"
	"log"
	"net/http"
)

func greetTheWorld(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello New App!")
}

// Server starts the app on a port
func Server() {
	http.HandleFunc("/", greetTheWorld)
	err := http.ListenAndServe(":7000", nil)
	if err != nil {
		log.Fatal("ListenAndServe: ", err)
	}
}
