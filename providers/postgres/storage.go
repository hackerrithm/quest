package postgres

import "github.com/reacthead/alpharithm/shared/database"

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
