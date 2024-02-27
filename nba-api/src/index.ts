import axios from 'axios';
import * as dotenv from "dotenv"; 

dotenv.config();

const {
  RAPID_API_KEY
} = process.env;

/**
 * 指定した日付のNBAの試合のデータを取得するサンプルスクリプト
 */
async function main() {
  console.log(" =================================== [Start] =================================== ");

  const options = {
    method: 'GET',
    url: 'https://v1.basketball.api-sports.io/games',
    params: {
      date: '2023-02-12'
    },
    headers: {
      'X-RapidAPI-Key': RAPID_API_KEY,
      'X-RapidAPI-Host': 'v2.nba.api-sports.io'
    }
  };
  
  try {
    const response = await axios.request(options);
    const games = response.data.response;
    console.log("response:", games);

    for(let i = 0; i < games.length; i++) {
      const scores = games[i].scores;
      // console.log("gameScore:", JSON.stringify(scores));
      // homeとvisitorsのスコアを比較して勝者を出力する。
      if(scores.home.total > scores.away.total) {
        console.log("home win")
      } else {
        console.log("away win")
      }
    }
  } catch (error) {
    console.error(error);
  }

  console.log(" =================================== [End] =================================== ");
}

main()
  .catch((error) => {
    console.error("error:", error)
    process.exitCode = 1
  })