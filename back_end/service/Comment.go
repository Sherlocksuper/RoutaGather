package service

import (
	"back_end/conf"
	"back_end/object"
)

type ICommentService interface {
	JudgeValidComment(comment *object.Comment) bool
	AddAndUpdateComment(comment *object.Comment) error
	DeleteComment(commentId uint) error
}

type CommentService struct {
}

// JudgeValidComment 判断Comment是否合法
func (c CommentService) JudgeValidComment(comment *object.Comment) bool {
	return !(comment.PostID == 0 && comment.UserID == 0 && comment.Content == "")
}

// AddAndUpdateComment 添加Comment
func (c CommentService) AddAndUpdateComment(comment *object.Comment) error {
	conf.AppConf.Db.Save(&comment)
	return nil
}

// DeleteComment 删除Comment
func (c CommentService) DeleteComment(commentId uint) error {
	conf.AppConf.Db.Delete(&object.Comment{}, commentId)
	return nil
}

// FindComment 查找Comment
func (c CommentService) FindComment() {
	//TODO implement me
	panic("implement me")
}

func NewCommentService() ICommentService {
	return &CommentService{}
}
