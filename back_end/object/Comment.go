package object

type Comment struct {
	OrmModal
	PostID  uint   `json:"postId"`
	Author  string `gorm:"type:varchar(100)" json:"author"`
	Content string `gorm:"type:text" json:"content"`
}
