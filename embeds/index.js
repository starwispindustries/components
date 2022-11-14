import React from 'react';


class YoutubeEmbed extends React.Component {
    render() {
        const { attrs } = this.props;
        const videoId = attrs.matches[1];

        return (
            <iframe
                className={this.props.isSelected ? "ProseMirror-selectednode" : ""}
                src={`https://www.youtube.com/embed/${videoId}?modestbranding=2`}
            />
        );
    }
}

export const embeds = [
    {
        title: "YouTube",
        keywords: "youtube video tube google",
        defaultHidden: true,
        // eslint-disable-next-line react/display-name
        matcher: url => {
            return url.match(
                /(?:https?:\/\/)?(?:www\.)?youtu\.?be(?:\.com)?\/?.*(?:watch|embed)?(?:.*v=|v\/|\/)([a-zA-Z0-9_-]{11})$/i
            );
        },
        component: YoutubeEmbed,
    },
];