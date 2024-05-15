package handler

import "github.com/gin-gonic/gin"

type Response struct {
	Code int    `json:"code"`
	Msg  string `json:"msg" default:"success"`
	Data any    `json:"data"`
}

//toGin
func (r *Response) toGin() gin.H {
	
	if r.Msg == "" {
		r.Msg = "success"
	}
	
	return gin.H{
		"code": r.Code,
		"msg":  r.Msg,
		"data": r.Data,
	}
}
