import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from './Title';

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: 'free Cocktails',
                info: "This is a long established fact that a reader will be distracted by the readable content of a page"
            },
            {
                icon: <FaHiking />,
                title: 'Endless Hiking',
                info: "This is a long established fact that a reader will be distracted by the readable content of a page"
            },
            {
                icon: <FaShuttleVan />,
                title: 'free Shuttle',
                info: "This is a long established fact that a reader will be distracted by the readable content of a page"
            },
            {
                icon: <FaBeer />,
                title: 'Strongest beer',
                info: "This is a long established fact that a reader will be distracted by the readable content of a page"
            }
        ]
    }

    render() {
        return (
            <section className='services'>
                <Title title='services' />
                <div className='services-center'>
                    {this.state.services.map((item, index) => {
                        return <article key={index} className='service'>
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
