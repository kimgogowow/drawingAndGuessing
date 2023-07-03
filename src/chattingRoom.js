export default function ChattingRoom() {

    const getChatting = (value) => {

    }

    return (
        <div className="element">

            <h1>
                ChattingRoom
            </h1>

            <div className="user-avatars">
                <img src="https://w7.pngwing.com/pngs/105/603/png-transparent-anime-avatar-desktop-anime-manga-head-fictional-character.png" />
                <img src="https://w7.pngwing.com/pngs/681/169/png-transparent-kavaii-anime-drawing-art-anime-mammal-face-cg-artwork-thumbnail.png" />
                <img src="https://w7.pngwing.com/pngs/858/291/png-transparent-anime-kawaii-female-chibi-anime-cg-artwork-black-hair-hand-thumbnail.png" />
                <img src="https://w7.pngwing.com/pngs/608/437/png-transparent-anime-anonymous-screenshot-imgur-anime-girl-miscellaneous-child-mammal-thumbnail.png" />
            </div>

            <div className="text-zone">

            </div>
            <div className="input-zone">
                <form>
                    <input
                        className="chatting-input"
                        name="chatting-record"
                        placeholder="typeing..."
                        onChange={getChatting()}
                        type="text"></input>

                    <input type="button" name="submit" value="send" />
                </form>

            </div>




        </div>
    );
}