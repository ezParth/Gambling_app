package controller

import (
	"encoding/json"
	"fmt"
	"os"
	"path/filepath"

	"github.com/ezParth/utils"
)

type QA struct {
	Question string `json:"question"`
	Answer   string `json:"answer"`
}

type Questioneers struct {
	Questions map[string]string `json:"questions"`
}

func callfunction(t string) {
	fmt.Println("full question: ", t)
}

// /Users/parth/Desktop/coding/ts/gambling/server/data/cricket.en.json
func GenerateWhichTeamWonThisSeason() {
	basePath, err := filepath.Abs("../../gambling/server/data/cricket.en.json")
	if err != nil {
		panic("Error building path: " + err.Error())
	}

	data, err := os.ReadFile(basePath)
	if err != nil {
		panic("Error reading JSON file: " + err.Error())
	}

	var q Questioneers
	err = json.Unmarshal(data, &q)
	if err != nil {
		panic("Error unmarshalling JSON: " + err.Error())
	}

	fmt.Println("Loaded Questions:")
	// fmt.Println(q)
	var Questioneer []QA
	var i int = 0
	for k, v := range q.Questions {
		// fmt.Printf("Q: %s -> A: %s\n", k, v)
		Questioneer = append(Questioneer, QA{Question: k, Answer: v})
		i++
	}

	// for i := 0; i < len(Questioneer); i++ {
	// 	fmt.Println("if question.Question == \"", Questioneer[i].Question, "\" {\n callfunction(\"", Questioneer[i].Answer, "\")\n}")
	// }

	var totalNumber int = 11
	var randomNum int = utils.GenerateRandomNumber(totalNumber)
	// var val types.ReturnQuestion
	var question QA = Questioneer[randomNum]
	if question.Question == "has_more_runs" {
		callfunction(" Who has more runs? ")
	}
	if question.Question == "wins_chasing" {
		callfunction(" Which team has most number of wins while chasing? ")
	}
	if question.Question == "player_season" {
		callfunction("Player of year in ")
	}
	if question.Question == "orange_cap" {
		callfunction(" which player won the orange cap in the year  ")
	}
	if question.Question == "season_winner" {
		callfunction(" Which team won this season? ")
	}
	if question.Question == "purple_cap" {
		callfunction(" Which player won the purple cap in the year  ")
	}
	if question.Question == "height_runs_By_player_season" {
		callfunction(" Most runs scored by a single player in the year  ")
	}
	if question.Question == "player_season_Team" {
		callfunction(" Which team's player has won the player of the season in the year  ")
	}
	if question.Question == "more_runs" {
		callfunction(" Who will score more runs this season? ")
	}
	if question.Question == "match_winner" {
		callfunction(" Which team will win this match? ")
	}
	if question.Question == "scored_more" {
		callfunction(" Who scored more runs? ")
	}
	if question.Question == "more_wickets" {
		callfunction(" Which bowler took more wickets? ")
	}
}
