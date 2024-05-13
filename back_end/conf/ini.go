package conf

import (
	"github.com/joho/godotenv"
	"gorm.io/gorm"
)

type App struct {
	MySql *MySQL
	Db    *gorm.DB
	Redis *Redis
}

func (appConf App) init() {
	err := godotenv.Load()
	if err != nil {
		panic(err)
	}
	
	appConf.MySql.init()
	appConf.Redis.init()
	
	appConf.Db = appConf.MySql.initDB()
}
