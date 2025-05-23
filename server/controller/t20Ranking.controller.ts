import odiRankings from '../data/IccBatsmanRanking.json'

const generateT20Ranking = () => {
    try {
        let result = [];
        const batsmen = odiRankings.t20;

        result = batsmen.map(b => ({
            batsman: b.name,
            country: b.country,
            rank: b.rank,
            rating: b.rating
        }));

        console.log(result);
        return result;
    } catch (error) {
        console.log("Error during generating t20 ranking", error);
    }
}

export { generateT20Ranking }