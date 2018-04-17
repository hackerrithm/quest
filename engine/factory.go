package engine

type (

	// Factory engine factory interface
	Factory interface {
		NewUser() User
		NewNote() Note
	}

	// JWTSignParser interface
	JWTSignParser interface {
		Sign(claims map[string]interface{}, secret string) (string, error)
		Parse(tokenStr string, secret string) (map[string]interface{}, error)
	}

	factory struct {
		StorageFactory
		jwt JWTSignParser
	}
)

// New instances new engine factory
func New(sf StorageFactory, jwt JWTSignParser) Factory {
	return &factory{
		StorageFactory: sf,
		jwt:            jwt,
	}
}
