package conf

import "os"

type Redis struct {
	Host string `json:"host"`
	Port string `json:"port"`
}

func (r Redis) init() {
	r.Host = os.Getenv("REDIS_HOST")
	r.Port = os.Getenv("REDIS_PORT")
}
