package object

import (
	"time"
)

type User struct {
	OrmModal
	Username          string    `gorm:"type:varchar(100)" json:"username"`
	Email             string    `gorm:"type:varchar(100)" json:"email"`
	Avatar            string    `gorm:"type:varchar(100)" json:"avatar"`
	Role              string    `gorm:"type:varchar(100)" json:"role"`
	CreatedAt         time.Time `json:"createdAt"`
	Posts             []Post    `gorm:"foreignKey:UserID" json:"posts"`
	ReceivedLikes     int       `json:"receivedLikes"`
	ReceivedFavorites int       `json:"receivedFavorites"`
	Followers         int       `json:"followers"`
	LikedPosts        []Post    `gorm:"foreignKey:UserID" json:"likedPosts"`
	CollectionPosts   []Post    `gorm:"foreignKey:UserID" json:"collectionPosts"`
	FollowingUsers    []User    `gorm:"foreignKey:UserID" json:"followingUsers"`
}
