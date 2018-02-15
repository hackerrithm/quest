package controller

import (
	"encoding/json"
	"fmt"
	"net/http"
	"strconv"

	"github.com/gorilla/mux"
	"github.com/reacthead/quest/internal/app/model"
	"github.com/reacthead/quest/internal/app/repository"
)

var People []model.Person

func GetPersonEndpoint(w http.ResponseWriter, req *http.Request) {
	params := mux.Vars(req)
	for _, item := range People {
		i, err := strconv.ParseInt(params["id"], 10, 32)
		if err != nil {
			panic(err)
		}
		result := uint64(i)
		if item.UID == result {
			json.NewEncoder(w).Encode(item)
			return
		}
	}
	json.NewEncoder(w).Encode(&model.Person{})
}

func GetPeopleEndpoint(w http.ResponseWriter, req *http.Request) {

	People, err := repository.GetAll()
	if err != nil {
		fmt.Println("error")
	}
	json.NewEncoder(w).Encode(People)
}

func CreatePersonEndpoint(w http.ResponseWriter, req *http.Request) {
	params := mux.Vars(req)
	var person model.Person
	_ = json.NewDecoder(req.Body).Decode(&person)
	i, err := strconv.ParseInt(params["id"], 10, 32)
	if err != nil {
		panic(err)
	}
	result := uint64(i)
	person.UID = result
	People = append(People, person)
	json.NewEncoder(w).Encode(People)
}

func DeletePersonEndpoint(w http.ResponseWriter, req *http.Request) {
	params := mux.Vars(req)
	for index, item := range People {
		i, err := strconv.ParseInt(params["id"], 10, 32)
		if err != nil {
			panic(err)
		}
		result := uint64(i)
		if item.UID == result {
			People = append(People[:index], People[index+1:]...)
			break
		}
	}
	json.NewEncoder(w).Encode(People)
}
