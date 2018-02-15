package repository

import (
	"github.com/reacthead/quest/internal/app/model"
	"github.com/reacthead/quest/internal/app/shared/database"
)

// func GetAll()  {
// 	rows, err := db.Query("SELECT user_name, first_name FROM person LIMIT $1", 3)
// 	if err != nil {
// 		// handle this error better than this
// 		panic(err)
// 	}
// 	defer rows.Close()
// 	for rows.Next() {
// 		//var id uint64
// 		var userName string
// 		var firstName string
// 		err = rows.Scan(&userName, &firstName)
// 		if err != nil {
// 			// handle this error
// 			panic(err)
// 		}
// 		fmt.Println(userName, firstName)
// 	}
// }

func GetAll() ([]model.Person, error) {
	rows, err := database.DB.Query("SELECT user_name, first_name FROM person LIMIT $1", 3)
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
		bks = append(bks, bk)
	}
	if err = rows.Err(); err != nil {
		return nil, err
	}
	return bks, nil
}
