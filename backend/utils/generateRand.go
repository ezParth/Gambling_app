package utils

import (
	"fmt"
	"math/rand"
)

func GenerateRandomNumber(limit int) int {
	randomNum := rand.Intn(limit)
	fmt.Println("Random int:", randomNum)
	return randomNum
}
