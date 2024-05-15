package thirdparty

import (
	"github.com/jordan-wright/email"
	"log"
	"net/smtp"
	"os"
)

type IEmailService interface {
	Send()
}

type EmailService struct {
	EmailHandler *email.Email
	EmailSender  string
	EmailKey     string
}

func (e EmailService) Send() {
}

func NewEmailService() IEmailService {
	return &EmailService{
		EmailHandler: email.NewEmail(),
		EmailSender:  os.Getenv("EMAIL_SENDER"),
		EmailKey:     os.Getenv("EMAIL_SECRETKEY"),
	}
}

func Send() {
	e := email.NewEmail()
	
	e.From = "dj <XXX@qq.com>"
	e.To = []string{"XXX@qq.com"}
	e.Subject = "这是主题"
	e.Text = []byte("www.topgoer.com是个不错的go语言中文文档")
	
	err := e.Send("smtp.qq.com:25", smtp.PlainAuth("", "你的邮箱账号", "这块是你的授权码", "smtp.qq.com"))
	if err != nil {
		log.Fatal(err)
	}
}
