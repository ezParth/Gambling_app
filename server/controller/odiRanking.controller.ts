import odiRankings from '../data/IccBatsmanRanking.json'

const generateOdiBatsmanRanking = () => {
    try {
        let result = [];
        const batsmen = odiRankings.odi;

        result = batsmen.map(b => ({
            batsman: b.name,
            country: b.country,
            rank: b.rank,
            rating: b.rating
        }));

        // console.log(result);
        return result; // if you want to return the result
    } catch (error) {
        console.log("Error during generating odi ranking", error);
    }
}

export { generateOdiBatsmanRanking }