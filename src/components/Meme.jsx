import React from "react"
import Data from "../Data.js"

export default function Meme() {
    const [meme,setMeme]=React.useState({
        topText:"",
        bottomText:"",
        randomImage:"http://i.imgflip.com/1bij.jpg"
    })
    const [allMemeImages,setAllMemeImages]=React.useState(Data)
    function getImage(){
        const memeArray=allMemeImages.data.memes
        const randomNo=Math.floor(Math.random()*memeArray.length)
        const url=memeArray[randomNo].url
        setMeme(prev=>({
            ...prev,
            randomImage:url
        }))
    }
    return (
        <main>
            <div className="form">
                <input type="text"placeholder="Top text"className="form-inp"/>
                <input type="text"placeholder="Bottom text"className="form-inp"/>
                <button className="form-btn" onClick={getImage}>Get a new meme image 🖼</button>
            </div>
           <img src={meme.randomImage} className="meme-img"/>
        </main>
    )
}