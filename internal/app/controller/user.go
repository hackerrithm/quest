package controller

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"os"
	"strconv"

	"github.com/gorilla/mux"
	"github.com/reacthead/quest/internal/app/model"
	"github.com/reacthead/quest/internal/app/repository/user"
	"github.com/reacthead/quest/internal/app/shared/errorplay"
)

// GetUser gets a single user
func GetUser(w http.ResponseWriter, req *http.Request) {

	params := mux.Vars(req)
	uid := params["id"]
	i, err := strconv.Atoi(uid)

	errorplay.CheckErr(err)

	id := uint64(i)

	user, err := user.GetOne(id)
	errorplay.CheckErr(err)

	b, err := json.Marshal(user)
	if err != nil {
		fmt.Println("error:", err)
	}
	os.Stdout.Write(b)

}

// GetUsers gets all users
func GetUsers(w http.ResponseWriter, req *http.Request) {
	users, err := user.GetAll()
	errorplay.CheckErr(err)
	b, err := json.Marshal(users)
	if err != nil {
		fmt.Println("error:", err)
	}
	os.Stdout.Write(b)
}

// CreateUser creates a user
func CreateUser(w http.ResponseWriter, req *http.Request) {
	body, readErr := ioutil.ReadAll(req.Body)
	errorplay.CheckErr(readErr)

	requestBody := []byte(body)

	var userModel model.User
	err := json.Unmarshal(requestBody, &userModel)
	if err != nil {
		fmt.Println("error:", err)
	}

	u := user.Post(userModel)

	fmt.Println(u)

}

// UpdateUser updates user by finding the id and updating the attributes
func UpdateUser(w http.ResponseWriter, req *http.Request) {

	params := mux.Vars(req)
	uid := params["id"]

	i, err := strconv.Atoi(uid)
	errorplay.CheckErr(err)

	id := uint64(i)

	body, readErr := ioutil.ReadAll(req.Body)
	errorplay.CheckErr(readErr)

	requestBody := []byte(body)
	var userModel model.User
	err = json.Unmarshal(requestBody, &userModel)
	errorplay.CheckErr(err)
	fmt.Printf("%+v", userModel)

	var changedUID = id
	changedUID, err = user.Put(id, userModel)
	errorplay.CheckErr(err)

	fmt.Println(changedUID)

}

// DeleteUser removes a single user
func DeleteUser(w http.ResponseWriter, req *http.Request) {
	params := mux.Vars(req)

	uid := params["id"]

	i, err := strconv.Atoi(uid)
	errorplay.CheckErr(err)

	id := uint64(i)

	user, err := user.Delete(id)
	errorplay.CheckErr(err)

	json.NewEncoder(w).Encode(user)
}
