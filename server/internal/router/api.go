package router

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

//RunAPI ->route setup
func RunAPI(address string) error {

	r := gin.Default()

	r.GET("/", func(ctx *gin.Context) {
		ctx.String(http.StatusOK, "Welcome to app")
	})

	r.GET("/new", func(ctx *gin.Context) {
		ctx.String(http.StatusOK, "them chuc nang")
	})

	r.GET("/hello", func(ctx *gin.Context) {
		ctx.String(http.StatusOK, "them chuc nang lan 2")
	})

	return r.Run(address)

}
