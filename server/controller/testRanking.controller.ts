import odiRankings from '../data/IccBatsmanRanking.json'

const generateTestRanking = () => {
    try {
        let result = [];
        const batsmen = odiRankings.test;

        result = batsmen.map(b => ({
            batsman: b.name,
            country: b.country,
            rank: b.rank,
            rating: b.rating
        }));

        console.log(result);
        return result;
    } catch (error) {
        console.log("Error during generating test ranking", error);
    }
}

export { generateTestRanking }