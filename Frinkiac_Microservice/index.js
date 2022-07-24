const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 8080;

app.use( express.json() );

app.get('/', (req, res) => {

    async function random() {
        
        const url = "https://frinkiac.com/api/random";
        let res = await axios.get(url);

        let subs=[]
            for(let i = 0; i < res.data.Subtitles.length; i++) {
                subs.push(res.data.Subtitles[i].Content);
            }
    
        let newEntry = {
            Episode:    res.data.Episode.Key,
            Timestamp:  res.data.Frame.Timestamp,
            Title:      res.data.Episode.Title,
            Director:   res.data.Episode.Director,
            Writer:     res.data.Episode.Writer,
            Airdate:    res.data.Episode.Airdate,
    
            Image:      `https://frinkiac.com/img/${res.data.Episode.Key}/${res.data.Frame.Timestamp}.jpg`,
            Subtitles:  subs
        }

        return newEntry
    }

    random().then((data) => 
        res.status(200).send({data})
    )

});


app.listen(
    PORT,
    () => console.log(`Server started on localhost:${PORT}`)
)





    // const getRandom = () => {
    //     axios
    //     .get('https://frinkiac.com/api/random')
    //     .then(res => {
    //     console.log(`statusCode: ${res.status}`);
    
    //     let subs=[]
    //     for(let i = 0; i < res.data.Subtitles.length; i++) {
    //         subs.push(res.data.Subtitles[i].Content);
    //     }
    
    
    //     let newEntry = {
    //         Episode:    res.data.Episode.Key,
    //         Timestamp:  res.data.Frame.Timestamp,
    //         Title:      res.data.Episode.Title,
    //         Director:   res.data.Episode.Director,
    //         Writer:     res.data.Episode.Writer,
    //         Airdate:    res.data.Episode.Airdate,
    
    //         Image:      `https://frinkiac.com/img/${res.data.Episode.Key}/${res.data.Frame.Timestamp}.jpg`,
    //         Subtitles:  subs
    
    //     }
        
    //     // console.log(newEntry)

    //     return newEntry
        
    //     })
    //     .catch(error => {
    //     console.error(error);
    //     });
    // }
