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
	"github.com/reacthead/quest/internal/app/repository/task"
	"github.com/reacthead/quest/internal/app/shared/errorplay"
)

// GetTask gets a single task
func GetTask(w http.ResponseWriter, req *http.Request) {

	params := mux.Vars(req)
	uid := params["id"]
	i, err := strconv.Atoi(uid)

	errorplay.CheckErr(err)

	id := uint64(i)

	taskModel, err := task.GetOne(id)
	errorplay.CheckErr(err)

	b, err := json.Marshal(taskModel)
	if err != nil {
		fmt.Println("error:", err)
	}
	os.Stdout.Write(b)

}

// GetTasks gets all tasks
func GetTasks(w http.ResponseWriter, req *http.Request) {

	param1 := req.URL.Query().Get("user-id")

	i, err := strconv.Atoi(param1)
	errorplay.CheckErr(err)

	id := uint64(i)
	tasks, err := task.GetAllForUser(id)
	errorplay.CheckErr(err)

	b, err := json.Marshal(tasks)
	if err != nil {
		fmt.Println("error:", err)
	}
	os.Stdout.Write(b)
}

// CreateTask creates a task
func CreateTask(w http.ResponseWriter, req *http.Request) {
	body, readErr := ioutil.ReadAll(req.Body)
	errorplay.CheckErr(readErr)

	requestBody := []byte(body)

	var taskModel model.Task
	err := json.Unmarshal(requestBody, &taskModel)
	if err != nil {
		fmt.Println("error:", err)
	}

	u := task.Post(taskModel)

	fmt.Println(u)

}

// UpdateTask updates task by finding the id and updating the attributes
func UpdateTask(w http.ResponseWriter, req *http.Request) {

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

}

// UpdateAllTask updates task by finding the id and updating the attributes
func UpdateAllTask(w http.ResponseWriter, req *http.Request) {

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

}

// DeleteTask removes a single task
func DeleteTask(w http.ResponseWriter, req *http.Request) {
	params := mux.Vars(req)

	uid := params["id"]

	i, err := strconv.Atoi(uid)
	errorplay.CheckErr(err)

	id := uint64(i)

	taskModel, err := task.Delete(id)
	errorplay.CheckErr(err)

	json.NewEncoder(w).Encode(taskModel)
}

// DeleteAllTask removes a single task
func DeleteAllTask(w http.ResponseWriter, req *http.Request) {

	param1 := req.URL.Query().Get("user-id")

	i, err := strconv.Atoi(param1)
	errorplay.CheckErr(err)

	id := uint64(i)

	taskModel, err := task.DeleteAll(id)
	errorplay.CheckErr(err)

	json.NewEncoder(w).Encode(taskModel)
}
