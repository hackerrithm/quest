package serveup

import (
	"fmt"
	"log"
	"net/http"
)

func greetTheWorld(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello New App!")
}

// ServeUp starts the app on a port
func ServeUp() {
	http.HandleFunc("/", greetTheWorld)
	err := http.ListenAndServe(":9000", nil)
	if err != nil {
		log.Fatal("ListenAndServe: ", err)
	}
}
