package repository

import (
	"fmt"

	"github.com/reacthead/quest/internal/app/model"
	"github.com/reacthead/quest/internal/app/shared/database"
)

// GetAll gets all the records from the database
func GetAll() ([]model.Person, error) {
	DB, err := database.NewOpen()

	rows, err := DB.Query("SELECT user_name, first_name FROM person LIMIT $1", 3)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	bks := make([]model.Person, 0)
	for rows.Next() {
		var userName string
		var firstName string
		bk := model.Person{}
		err := rows.Scan(&userName, &firstName)
		if err != nil {
			return nil, err
		}
		bk.UserName = userName
		bk.FirstName = firstName
		fmt.Printf("%8v | %6v \n", userName, firstName)
		bks = append(bks, bk)
	}
	if err = rows.Err(); err != nil {
		return nil, err
	}

	DB.Close()

	return bks, nil
}
