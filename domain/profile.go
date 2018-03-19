package domain

type (
	Profile struct {
		UID                 uint `gorm:"primary_key"`
		UserID              uint
		About               string `json:"about"`
		ProfileType         string `json:"profileType"`
		ProfilePicture      Image  `json:"profilePicture"`
		ProfilePictureID    uint
		BackgroundPicture   Image `json:"backgroundPicture"`
		BackgroundPictureID uint
		Followers           []User `gorm:"many2many:user_followers"`
	}

	Image struct {
		ID   uint `gorm:"primary_key"`
		SRC  string
		ALT  string
		Type string
		Name string
	}

	About struct {
		ID         uint `gorm:"primary_key"`
		Occupation Occupation
		Education  Education
	}

	Family struct {
		ID uint `gorm:"primary_key"`
	}

	Occupation struct {
		ID       uint `gorm:"primary_key"`
		Position string
		Company  string
	}

	Education struct {
		ID         uint `gorm:"primary_key"`
		HighSchool string
		College    string
	}
)
