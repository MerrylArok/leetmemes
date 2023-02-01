import { useEffect, useState } from "react";


let react = useState;

export default function Meme() {

    const [allMemes, setAllMemes] = useState<any[]>([]);
    const [meme, setMeme] = useState("");
    const [formText, setForm] = useState({
        topText: "",
        bottomText: "",
    })


    function randomMeme() {
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        setMeme(allMemes[randomNumber].url);
    }

    function onChange(event: any) {
        const { name, value } = event.target;
        setForm((prev) => {
            return ({
                ...prev,
                [name]: value,
            })
        })
    }



    useEffect(() => {
        (async function getMemes() {
            const getMemesAPI = await fetch('https://api.imgflip.com/get_memes');
            const parsedInfo = await getMemesAPI.json();
            setAllMemes(parsedInfo.data.memes);
        })();
    }, [])

    useEffect(() => {
        if (allMemes.length) {
            randomMeme();
        }
    }, [allMemes]);



    return (

        <section className="main">
            {/* <h2>A Breakthrough Approach to Mastering the Art of Creating Hilarious Memes</h2> */}
            <p>LeetMemes is the best platform to practice making memes, master internet speak and crack the code to internet points.</p>
            <section className="form">
                <input className="form--textElement"
                    type="text"
                    placeholder="Top Sentence"
                    name="topText"
                    onChange={onChange} />

                <input className="form--textElement"
                    type="text"
                    placeholder="Bottom Sentence"
                    name="bottomText"
                    onChange={onChange} />

                <div className="memeDiv">
                    <h1 className="top memeText">{formText.topText}</h1>
                    <img className="memeImage" src={meme} alt="memeImage" />
                    <h1 className="bottom memeText">{formText.bottomText}</h1>
                </div>

                <button className="form--submit" onClick={randomMeme} >Generate random meme</button>
            </section>

        </section>

    );
}