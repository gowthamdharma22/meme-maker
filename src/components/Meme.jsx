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
    function handleChange(event){
        const {name, value}=event.target
        setMeme(prev=>({
            ...prev,
            [name]:value
        }))
    }
    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form-inp"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form-inp"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button 
                className="form-btn" 
                onClick={getImage}
                >Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme-img"/>
                <h1 className="meme-text tp">{meme.topText}</h1>
                <h1 className="meme-text bm">{meme.bottomText}</h1>
            </div>
        </main>
    )
}