import axios from "axios";

export const updatePoints = async (Points: boolean) => {
  try {
    const token = localStorage.getItem("token");
    const res = await axios.post(
      "http://localhost:3000/api/points/update-points",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: { isCorrect: Points },
      }
    );

    if (res.data.success) {
      return res.data.success;
    }

    return null;
  } catch (err) {
    console.log("error in update points: ", err);
  }
};

export const getPoints = async () => {
    try {
        const token = localStorage.getItem("token");
        const res = await axios.get('http://localhost:3000/api/points/get-points', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        if(res.data.success) {
            return res.data.points;
        }

        return null
    } catch (error) {
        console.log("error in getting points: ", error);   
    }
}

