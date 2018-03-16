package controller

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"os"
	"strconv"

	"github.com/gorilla/mux"
	"github.com/reacthead/quest/internal/app/domain/model"
	"github.com/reacthead/quest/internal/app/infrastructure/shared/errorplay"
	"github.com/reacthead/quest/internal/app/interfaces/repository/task"
)

// GetTask gets a single task
func GetTask(response http.ResponseWriter, req *http.Request) {

	params := mux.Vars(req)
	uid := params["id"]
	i, err := strconv.Atoi(uid)
	errorplay.CheckErr(err)
	id := uint64(i)

	taskModel, err := task.GetOne(id)
	errorplay.CheckErr(err)

	taskJSON, err := json.Marshal(taskModel)
	if err != nil {
		fmt.Println("error:", err)
	}
	os.Stdout.Write(taskJSON)

	response.Header().Set("Content-Type", "application/json")
	response.WriteHeader(http.StatusCreated)
	response.Write(taskJSON)

}

// GetTasks gets all tasks
func GetTasks(response http.ResponseWriter, req *http.Request) {

	param1 := req.URL.Query().Get("user-id")

	i, err := strconv.Atoi(param1)
	errorplay.CheckErr(err)

	id := uint64(i)
	tasks, err := task.GetAllForUser(id)
	errorplay.CheckErr(err)

	taskJSON, err := json.Marshal(tasks)
	if err != nil {
		fmt.Println("error:", err)
	}
	os.Stdout.Write(taskJSON)

	response.Header().Set("Content-Type", "application/json")
	response.WriteHeader(http.StatusCreated)
	response.Write(taskJSON)
}

// CreateTask creates a task
func CreateTask(response http.ResponseWriter, req *http.Request) {

	var taskModel model.Task

	err := json.NewDecoder(req.Body).Decode(&taskModel)
	errorplay.CheckErr(err)

	userJSON, err := json.Marshal(taskModel)
	errorplay.CheckErr(err)

	u := task.Post(taskModel)

	un := json.Unmarshal(userJSON, &u)

	fmt.Println(un)

	response.Header().Set("Content-Type", "application/json")
	response.WriteHeader(http.StatusCreated)
	response.Write(userJSON)

}

// UpdateTask updates task by finding the id and updating the attributes
func UpdateTask(response http.ResponseWriter, req *http.Request) {

	param1 := req.URL.Query().Get("user-id")

	index, err := strconv.Atoi(param1)
	errorplay.CheckErr(err)

	userID := uint64(index)

	fmt.Println(userID)

	params := mux.Vars(req)
	uid := params["id"]

	i, err := strconv.Atoi(uid)
	errorplay.CheckErr(err)

	id := uint64(i)

	body, readErr := ioutil.ReadAll(req.Body)
	errorplay.CheckErr(readErr)

	requestBody := []byte(body)
	var taskModel model.Task
	err = json.Unmarshal(requestBody, &taskModel)
	errorplay.CheckErr(err)
	fmt.Printf("%+v", taskModel)

	var changedUID = id
	changedUID, err = task.Put(id, taskModel)
	errorplay.CheckErr(err)

	fmt.Println(changedUID)

	response.Header().Set("Content-Type", "application/json")
	response.WriteHeader(http.StatusCreated)
	response.Write(requestBody)
}

// UpdateAllTask updates task by finding the id and updating the attributes
func UpdateAllTask(response http.ResponseWriter, req *http.Request) {

	param1 := req.URL.Query().Get("user-id")

	userID, err := strconv.Atoi(param1)
	errorplay.CheckErr(err)

	id := uint64(userID)

	body, readErr := ioutil.ReadAll(req.Body)
	errorplay.CheckErr(readErr)

	requestBody := []byte(body)
	var taskModel model.Task
	err = json.Unmarshal(requestBody, &taskModel)
	errorplay.CheckErr(err)
	fmt.Printf("%+v", taskModel)

	var changedUID = id
	changedUID, err = task.PutAll(id, taskModel)
	errorplay.CheckErr(err)

	fmt.Println(changedUID)

	response.Header().Set("Content-Type", "application/json")
	response.WriteHeader(http.StatusCreated)
	response.Write(requestBody)

}

// DeleteTask removes a single task
func DeleteTask(response http.ResponseWriter, req *http.Request) {
	params := mux.Vars(req)

	uid := params["id"]

	i, err := strconv.Atoi(uid)
	errorplay.CheckErr(err)

	id := uint64(i)

	taskModel, err := task.Delete(id)
	errorplay.CheckErr(err)

	json.NewEncoder(response).Encode(taskModel)
}

// DeleteAllTask removes a single task
func DeleteAllTask(response http.ResponseWriter, req *http.Request) {

	param1 := req.URL.Query().Get("user-id")

	i, err := strconv.Atoi(param1)
	errorplay.CheckErr(err)

	id := uint64(i)

	taskModel, err := task.DeleteAll(id)
	errorplay.CheckErr(err)

	json.NewEncoder(response).Encode(taskModel)
}
