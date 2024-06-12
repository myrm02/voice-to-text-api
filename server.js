import express, { json } from 'express';
import cors from "cors";
import axios from "axios";

const app = express()

app.use(cors());
app.use(json());

app.get('/', function (req, res) {
  const query = req.body

  axios.post('https://deep-translate1.p.rapidapi.com/language/translate/v2', query, {
    headers: {
        'x-rapidapi-key': '5279274116mshfb09f8d31d5c9e4p18d144jsn5da42cdeb7c7',
        'x-rapidapi-host': 'deep-translate1.p.rapidapi.com',
        'Content-Type': 'application/json'
    }
  })
  .then(function (response) {
    console.log(response);
    res.send(response.data.data.translations.translatedText)
  })
  .catch(function (error) {
    console.log(error);
    res.send("Translate does not work !")
  });
})

app.listen(3000)
