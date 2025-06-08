package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	// "github.com/ezParth/utils"

	"github.com/ezParth/controller"
	"github.com/ezParth/utils"
	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	godotenv "github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load(".env")
	// utils.ConnectToMongo()
	controller.GenerateWhichTeamWonThisSeason()
	utils.GenerateRandomNumber(10)
	if err != nil {
		log.Fatal("Unable to load dotenv => ", err)
	}
	r := chi.NewRouter()
	r.Use(middleware.Logger)
	r.Get("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Println("dotenv: ", os.Getenv("GREETING"))
		w.Write([]byte("welcome"))
	})
	// fmt.Println("connected to port 3000")
	// http.ListenAndServe(":3000", r)
}
