package handler

import (
	"back_end/object"
	"back_end/service"
	"errors"
	"github.com/gin-gonic/gin"
	"strconv"
)

type IPostHandler interface {
	AddAndUpdatePost(context *gin.Context)
	DeletePost(context *gin.Context)
}

type PostHandler struct {
	PostService service.PostService
}

func NewPostHandler(service service.PostService) IPostHandler {
	return &PostHandler{
		PostService: service,
	}
}

// AddAndUpdatePost godoc
func (p PostHandler) AddAndUpdatePost(context *gin.Context) {
	var err = errors.New("")
	var response Response
	var post object.Post
	
	err = context.BindJSON(&post)
	err = p.PostService.AddAndUpdatePost(post)
	
	response = Response{
		Code: SuccessCode,
		Msg:  err.Error(),
		Data: nil,
	}
	
	context.JSON(200, response.toGin())
}

// DeletePost GET
func (p PostHandler) DeletePost(context *gin.Context) {
	var err = errors.New("")
	var response Response
	var postID uint
	
	//转化为uint
	idStr := context.Query("id")
	idInt, err := strconv.Atoi(idStr)
	postID = uint(idInt)
	
	err = p.PostService.DeletePost(postID)
	
	response = Response{
		Code: SuccessCode,
		Msg:  err.Error(),
		Data: nil,
	}
	
	context.JSON(SuccessCode, response.toGin())
}
