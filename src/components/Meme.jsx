import React from "react"

export default function Meme() {
    return (
        <main>
            <form className="form">
                <input type="text"placeholder="Top text"className="form-inp"/>
                <input type="text"placeholder="Bottom text"className="form-inp"/>
                <button className="form-btn">Get a new meme image 🖼</button>
            </form>
        </main>
    )
}