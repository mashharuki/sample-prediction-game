import axios from 'axios';
import * as dotenv from "dotenv"; 

dotenv.config();

const {
  RAPID_API_KEY
} = process.env;

/**
 * リーグ情報を取得するAPI
 */
async function main() {
  console.log(" =================================== [Start] =================================== ");

  const options = {
    method: 'GET',
    url: 'https://v1.basketball.api-sports.io/leagues?',
    headers: {
      'X-RapidAPI-Key': RAPID_API_KEY,
      'X-RapidAPI-Host': 'v2.nba.api-sports.io'
    }
  };
  
  try {
    const response = await axios.request(options);
    console.log("response:", response.data);

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