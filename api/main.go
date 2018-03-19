package main

import (
	"fmt"

	"github.com/reacthead/alpharithm/adapters/web"
	"github.com/reacthead/alpharithm/engine"
	psqlrepo "github.com/reacthead/alpharithm/providers/postgres"
	"github.com/reacthead/alpharithm/shared/database"
)

func main() {
	session := StartDatabase()
	f := SessionFactoryInitializer(session)
	web.StartServer(f)
}

// StartDatabase starts the database with credentials
func StartDatabase() database.GORMDB {
	session, err := database.NewGormOpen()

	if err != nil {
		panic(err.Error())
	}

	fmt.Println("Connected to database ")

	database.CreateCountry(session)
	database.CreateState(session)
	database.CreateCity(session)
	database.CreateContact(session)
	database.CreateAddress(session)
	database.CreateEmailAddress(session)
	database.CreateUser(session)
	database.CreateProfile(session)
	database.CreateTask(session)
	database.CreateNote(session)

	return session
}

// SessionFactoryInitializer initializes and sets up session
func SessionFactoryInitializer(session database.GORMDB) engine.Factory {
	var sf engine.StorageFactory
	sf = psqlrepo.NewStorage(session)

	f := engine.New(sf)

	return f
}
