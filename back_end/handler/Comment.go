package handler

import "back_end/service"

type ICommentHandler interface {
}

type CommentHandler struct {
	CommentService service.CommentService
}

func NewCommentHandler(service service.CommentService) ICommentHandler {
	return &CommentHandler{
		CommentService: service,
	}
}
