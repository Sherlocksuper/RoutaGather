package service

type IAuthService interface {
	RegisterWithEmail(email string, password string)
	LoginWithUsername(username string, password string)
	LoginWithEmail()
}

type AuthService struct {
}

func NewAuthService() IAuthService {
	return &AuthService{}
}
