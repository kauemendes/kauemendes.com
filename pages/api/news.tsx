
const between = (min, max) => {  
    return Math.floor(
      Math.random() * (max - min) + min
    )
  }

export default function handler(req, res) {
    const randomLastNews = [
        "https://oglobo.globo.com/economia/fome-cresce-pela-1-vez-em-17-anos-mais-da-metade-da-populacao-nao-tem-garantia-de-comida-na-mesa-24956620?utm_source=Twitter&utm_medium=Social&utm_campaign=O%20Globo",
        "https://www.theverge.com/22367727/facebook-data-breach-haveibeenpwned",
        "https://www.theverge.com/2021/4/6/22369698/ai-emotion-recognition-unscientific-emojify-web-browser-game",
        "https://www.theverge.com/2021/4/5/22368345/epic-fortnite-houseparty-gameplay-streaming-app-video-chat-integration"
    ]
    
    res.status(200).json({
        news: randomLastNews[between(0, 4)]
    })
}