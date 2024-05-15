package object

type Comment struct {
	OrmModal
	PostID  uint   `json:"postId"`
	Post    Post   `json:"post" gorm:"foreignKey:PostID"`
	UserID  uint   `json:"userId"`
	User    User   `json:"user" gorm:"foreignKey:UserID"`
	Content string `json:"content" gorm:"type:text"`
}
