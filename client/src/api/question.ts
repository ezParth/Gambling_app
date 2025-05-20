import axios from "axios";

const baseURL = "http://localhost:3000/api"

const getQuestion = async () => {
    try {
        const res = await axios.get(`${baseURL}/questions/get-questions`, {});
        if(!res.data.success) {
            console.log("not successfull: ", res.data);
            return null;
        }

        return res.data.result;
    } catch (error) {
        console.log("Error during getting a question: ", error)
    }
}

export default getQuestion;
