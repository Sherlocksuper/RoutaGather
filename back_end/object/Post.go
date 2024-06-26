package object

type Post struct {
	OrmModal
	UserID      uint      `json:"userId"`
	User        User      `gorm:"foreignKey:UserID" json:"user"`
	Title       string    `gorm:"type:varchar(100)" json:"title"`
	Description string    `gorm:"type:text" json:"description"`
	Content     string    `gorm:"type:text" json:"content"`
	Comments    []Comment `gorm:"foreignKey:PostID" json:"comments"`
	Likes       int       `json:"likes"`
	Views       int       `json:"views"`
	Favorites   int       `json:"favorites"`
	Forwards    int       `json:"forwards"`
}
