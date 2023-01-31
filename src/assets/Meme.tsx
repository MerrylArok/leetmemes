import { useEffect, useState } from "react";


let react = useState;

export default function Meme() {

    const [allMemes, setAllMemes] = useState<any[]>([]);


    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        memeImage: ""
    })

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
         console.log('I ran!!!')
         console.log(meme)
        }
      }, [allMemes]);



    function randomMeme() {
        const randomNumber = Math.floor(Math.random() * allMemes.length);

        setMeme((previous) => {
            return ({
                ...previous,
                memeImage: allMemes[randomNumber].url
            })
        })
    }

    return (

        <section className="main">
            <h2>A Breakthrough Approach to Mastering the Art of Creating Hilarious Memes</h2>
            <p>LeetMemes is the best platform to practice making memes, master internet speak and crack the code to internet points.</p>
            <form action="" className="form">
                <input className="form--textElement"
                    type="text"
                    placeholder="Top Sentence"
                    name="top" />
                <input className="form--textElement" type="text" placeholder="Bottom Sentence" />
                <button className="form--submit">Generate random meme</button>
            </form>
        </section>

    );
}