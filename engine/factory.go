package engine

type (

	// Factory engine factory interface
	Factory interface {
		NewUser() User
		NewNote() Note
	}

	factory struct {
		StorageFactory
	}
)

// New instances new engine factory
func New(sf StorageFactory) Factory {
	return &factory{
		StorageFactory: sf,
	}
}
