package main

import (
	"quest/internal/app/shared/database"
	"quest/internal/app/shared/server"
)

func main() {
	database.StartDataBase()
	server.Server()
}
