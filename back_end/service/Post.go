package service

import (
	"back_end/conf"
	"back_end/object"
	"errors"
)

type IPostService interface {
	JudgeValidPost(post object.Post) bool
	AddAndUpdatePost(post object.Post) error
	DeletePost(postId uint) error
	FindPost(post object.Post) error
}

type PostService struct {
}

func (p PostService) JudgeValidPost(post object.Post) bool {
	return !(post.Title == "" && post.Content == "" && post.UserID == 0)
}

// AddAndUpdatePost godoc
// 如果存在则更新，不存在则添加
// 会更新所有字段，即使为空
func (p PostService) AddAndUpdatePost(post object.Post) error {
	if !p.JudgeValidPost(post) {
		return errors.New("数据不合法")
	}
	conf.AppConf.Db.Save(&post)
	return nil
}

func (p PostService) DeletePost(postId uint) error {
	panic("implement me")
	return nil
}

func (p PostService) FindPost(post object.Post) error {
	panic("implement me")
	return nil
}

func NewPostService() IPostService {
	return &PostService{}
}
