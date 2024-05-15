package service

import (
	"back_end/conf"
	"back_end/object"
)

type IUserService interface {
	AddAndUpdateUser(user *object.User) error
	DeleteUser(userId uint) error
	FindUsers(users *[]object.User) error
}

type UserService struct {
}

func (u UserService) AddAndUpdateUser(user *object.User) error {
	conf.AppConf.Db.Save(&user)
	return nil
}

func (u UserService) DeleteUser(userId uint) error {
	conf.AppConf.Db.Delete(&object.User{}, userId)
	return nil
}

func (u UserService) FindUsers(users *[]object.User) error {
	conf.AppConf.Db.Find(&users)
	return nil
}

func NewUserService() IUserService {
	return &UserService{}
}
