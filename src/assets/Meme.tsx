import { useEffect, useState } from "react";
import randomIcon from "./randomMeme.svg";
import downloadIcon from "./downloadIcon.svg"


let react = useState;

export default function Meme() {

    const [allMemes, setAllMemes] = useState<any[]>([]);
    const [meme, setMeme] = useState("");
    const [formText, setForm] = useState({
        topText: "",
        bottomText: "",
        fontSize: 4
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

    function increaseFont() {
        setForm((prev) => {
            return ({
                ...prev,
                fontSize: prev.fontSize + 0.2
            })
        })
    }

    function decreaseFont() {
        setForm((prev) => {
            return ({
                ...prev,
                fontSize: prev.fontSize - 0.2
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
            {/* <p>LeetMemes is the best platform to practice making memes, master internet speak and crack the code to internet points.</p> */}

            <input className="textInput"
                type="text"
                placeholder="Top Sentence"
                name="topText"
                onChange={onChange} />

            <div className="memeDiv">
                <h1 className="top memeText" style={{ fontSize: `${formText.fontSize}rem` }}>{formText.topText}</h1>
                <img className="memeImage" src={meme} alt="memeImage" />
                <h1 className="bottom memeText" style={{ fontSize: `${formText.fontSize}rem` }}>{formText.bottomText}</h1>
            </div>

            <input className="textInput"
                type="text"
                placeholder="Bottom Sentence"
                name="bottomText"
                onChange={onChange} />

            <div className="buttonContainer">

                <button className="formSubmit" onClick={randomMeme} >
                    <img src={randomIcon} className="buttonIcon"></img>
                    <span className="buttonText">Randomize</span>
                </button>

                <button className="downloadMeme">

                    <img src={downloadIcon} className="buttonIcon"></img>
                    <span className="buttonText">Download</span>
                </button>

                <div className="adjustFont">
                    <h2 className="buttonText">Font Size</h2>
                    <button className="fontAdjust" onClick={increaseFont}>+</button>
                    <button className="fontAdjust" onClick={decreaseFont}>-</button>
                </div>



            </div>






        </section>

    );
}