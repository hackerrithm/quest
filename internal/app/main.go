package main

import (
	"github.com/reacthead/quest/internal/app/shared/database"
	"github.com/reacthead/quest/internal/app/shared/server"
)

func main() {
	database.StartDataBase()
	server.Server()
}
