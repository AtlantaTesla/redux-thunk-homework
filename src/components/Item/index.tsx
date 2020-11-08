import React, { Component } from 'react';

interface IProps {}

interface IState {}

class Item extends Component<IProps & any, IState> {
    render() {
        const { id, snippet } = this.props;
        return (
            <div className="item">
                <div className="video">
                    <iframe
                        src={`https://www.youtube.com/embed/${id}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
                <div>{snippet.title}</div>
            </div>
        );
    }
}

export default Item;
