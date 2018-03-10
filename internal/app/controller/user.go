package controller

import (
	"bytes"
	"database/sql"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"strconv"

	"github.com/gorilla/mux"
	"github.com/reacthead/quest/internal/app/model"
	"github.com/reacthead/quest/internal/app/repository"
)

var User []model.User

func GetUser(w http.ResponseWriter, req *http.Request) {

	params := mux.Vars(req)
	uid := params["id"]

	i, err := strconv.Atoi(uid)
	if err != nil {
		fmt.Println(err)
	}

	id := uint64(i)

	user, err := repository.GetOne(id)
	if err != nil {
		fmt.Println(err)
	}

	json.NewEncoder(w).Encode(user)
}

func GetUsers(w http.ResponseWriter, req *http.Request) {

	Users, err := repository.GetAll()
	if err != nil {
		fmt.Println("error")
	}
	json.NewEncoder(w).Encode(Users)
}

func CreateUser(w http.ResponseWriter, req *http.Request) {
	body, readErr := ioutil.ReadAll(req.Body)
	if readErr != nil {
		log.Fatal(readErr)
	}

	requestBody := []byte(body)
	dec := json.NewDecoder(bytes.NewReader(requestBody))
	registerInstance := model.User{}
	err := dec.Decode(&registerInstance)
	if err != nil {
		fmt.Println(err)
	}

	u := repository.Post(registerInstance)

	fmt.Println(u)

}

func DeleteUser(w http.ResponseWriter, req *http.Request) {
	params := mux.Vars(req)
	for index, item := range User {
		i, err := strconv.ParseInt(params["id"], 10, 32)
		if err != nil {
			panic(err)
		}
		result := uint64(i)
		if item.UID == result {
			User = append(User[:index], User[index+1:]...)
			break
		}
	}
	json.NewEncoder(w).Encode(User)
}

//ToNullString invalidates a sql.NullString if empty, validates if not empty
func ToNullString(s string) sql.NullString {
	return sql.NullString{String: s, Valid: s != ""}
}
