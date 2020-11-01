import * as React from "react";
import {useSelector} from "react-redux";
import {IStore} from "../../mainReducer";

export const Content = () => {
    const selectedVideo = useSelector((store: IStore) => store.selectedVideo);

    console.log(selectedVideo);

    const ytEmbedLink = `https://www.youtube.com/embed/${selectedVideo}`;

    return (
        <section>
            <iframe width="560" height="315" src={ytEmbedLink} frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen/>
        </section>
    )
};
