package postgres

import "github.com/reacthead/quest/shared/database"

type (
	tableName string

	repository struct {
		sess database.GORMDB
	}
)

const (
	users = `users`
	tasks = `tasks`
)

func handleErr(err error) error {
	return err
}
