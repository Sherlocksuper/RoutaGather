package handler

import "back_end/service"

type IUserHandler interface {
}

type UserHandler struct {
	UserService service.UserService
}

func NewUserHandler(service service.UserService) IUserHandler {
	return &UserHandler{
		UserService: service,
	}
}
