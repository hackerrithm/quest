package domain

type (
	FriendShip struct {
		ID     uint
		User   User
		UserID uint
		Friend User
	}
)
