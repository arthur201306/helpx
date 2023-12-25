package main

import (
	"database/sql"
	"fmt"
	"os"

	"github.com/gin-gonic/gin"
)

func main() {
	dbUser := os.Getenv("DB_USER")
	dbPass := os.Getenv("DB_PASS")
	dbHost := os.Getenv("DB_HOST")
	dbPort := os.Getenv("DB_PORT")
	dbName := os.Getenv("DB_NAME")

	connectionString := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s", dbUser, dbPass, dbHost, dbPort, dbName)

	_, err := database.NewConnection(connectionString)
	if err != nil {
		panic(err)
	}

	g := gin.Default()
	g.GET("/", func(ctx *gin.Context) {
		ctx.JSON(200, gin.H{
			"message": "Hello World !",
		})
	})

	g.Run(":3000")
}
