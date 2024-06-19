import React, { Component } from 'react';

class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feed: [
                { id: 1, username: 'Mateus', curtidas: 10, comentarios: 2 },
                { id: 2, username: 'Lucas', curtidas: 120, comentarios: 52 },
                { id: 3, username: 'Pedro', curtidas: 100, comentarios: 22 },
                { id: 4, username: 'João', curtidas: 10, comentarios: 2 },
                { id: 5, username: 'Maria', curtidas: 1, comentarios: 0 },
            ]
        };
    }

    render() {
        return (
            <div>
                {this.state.feed.map((item) => {
                    return (
                        <div key={item.id}>
                            <h3>{item.username}</h3>
                            <a>{item.curtidas > 1 ? item.curtidas + ' curtidas' : item.curtidas + ' curtida'} /
                                {item.comentarios > 1 ? item.comentarios + ' comentarios' : item.curtidas + ' comentario'} </a>
                            <hr />
                        </div>
                    );
                })}
            </div>
        ); 
    }
}

export default Feed;