package conf

import (
	"back_end/object"
	"fmt"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"os"
)

type MySQL struct {
	Host     string `json:"host"`
	Port     string `json:"port"`
	Username string `json:"username"`
	Password string `json:"password"`
	Database string `json:"database"`
}

func (m *MySQL) init() {
	m.Host = os.Getenv("DB_HOST")
	m.Port = os.Getenv("DB_PORT")
	m.Username = os.Getenv("DB_USER")
	m.Password = os.Getenv("DB_PASSWORD")
	m.Database = os.Getenv("DB_DATABASE")
}

func (m *MySQL) getDNS() string {
	return fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?charset=utf8mb4&parseTime=True&loc=Local",
		m.Username,
		m.Password,
		m.Host,
		m.Port,
		m.Database)
}

func (m *MySQL) initDB() *gorm.DB {
	db, err := gorm.Open(mysql.Open(m.getDNS()), &gorm.Config{})
	if err != nil {
		panic(err)
	}
	
	err = db.AutoMigrate(&object.User{})
	err = db.AutoMigrate(&object.Post{})
	err = db.AutoMigrate(&object.Comment{})
	
	if err != nil {
		panic(err)
	}
	
	return db
}
