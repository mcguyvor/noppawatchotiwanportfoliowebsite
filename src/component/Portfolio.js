import React from 'react';
import nytgif from '../media/nytreackhookgif.gif';
import youtubeSearchGif from '../media/youtube-api-react.gif';
import vending from '../media/vendingmachine.gif';
import startup from '../media/startup.png';
import githubIcon from '../media/github-logo.png';
import dogListGif from '../media/react-router-dog-list.gif';
import todoredux from '../media/todolistreduxreduxform.gif';
import pokedexGif from '../media/pokedex.gif';
import '../style/Portfolio.css';
import restaurantmanager from '../media/restaurant-manager.gif';
const Portfolio=()=>{
    const nytGif = nytgif;
    const youtubeGif = youtubeSearchGif;
    const startupIcon = startup;
    const gitIcon = githubIcon;
    const dogList = dogListGif;
    const vendingGif = vending;
    const todoReduxGif = todoredux;
    const restgif = restaurantmanager;
    const pokedex = pokedexGif;
    const listItems =[{
                        imgSrc:nytGif,
                        title:'BANGKOK TIME',
                        detail:'News App, where the users can pick the news by month and year. The app uses NewYork Time API for the resources.',
                        stack:'REACT-REACTHOOK-BOOTSTRAP-AXIOS',
                        pageSrc:'https://nytreacthookpractice.firebaseapp.com/',
                        gitHubSrc:'https://github.com/mcguyvor/react-hook-new-york-time-api'
                        },
                        {
                        imgSrc:youtubeGif,
                        title:'YOUTUBE API SEARCH',
                        detail:'Youtube App for the users to search their video.',
                        stack:'REACT-AXIOS',
                        pageSrc:'https://api-react-350b3.firebaseapp.com/',
                        gitHubSrc:'https://github.com/mcguyvor/react-search-with-youtube-api'
                        },
                        {
                        imgSrc:dogList,
                        title:'Dog List with react-router',
                        detail: "Dog list App for dog lovers to the dogs' profile",
                        stack:'REACT-REACT ROUTER',
                        pageSrc:'https://react-router-dog-list.firebaseapp.com',
                        gitHubSrc:'https://github.com/mcguyvor/doglist-for-react-router-practice-with-navlink-nav'
                        },
                        {
                        imgSrc:vendingGif,
                        title: 'Vending machine',
                        detail:'Vending machine app provided three differents items for the user to pick',
                        stack:'REACT-REACT ROUTER-REDUX',
                        pageSrc:'https://vendingmachinereactrouterredux.firebaseapp.com',
                        gitHubSrc:'https://github.com/mcguyvor/vending-machine-react-routing-redux-prac'
                        },
                        {
                        imgSrc:todoReduxGif,
                        title:'Todo List with redux form',
                        detail:"Todo List app for the users to add their To do's daily. They can filter their To do's by clicking the filter button to show all to do's or completed to do's.",
                        stack:'REACT-REDUX-REDUX_FORM_BOOTSTRAP',
                        pageSrc:'https://todolist-react-redux-reduxform.firebaseapp.com/',
                        gitHubSrc:'https://github.com/mcguyvor/todolist-redux/tree/master/src'
                        },
                        {
                        imgSrc:restgif,
                        title:'Restaurant manager',
                        detail:'Restaurant manager web app, enable users to add or remove products and order products from the website.',
                        stack:'REACT-REDUX-REDUX-FORM-BOOTSTRAP-JSON SERVER-AXIOS',
                        pageSrc:null,
                        gitHubSrc:'https://github.com/mcguyvor/client'
                        },
                        {
                        imgSrc:pokedex,
                        title:'Pokedex',
                        detail:'My very first React web app, this pokedex game calculates the scores for each player by its experience',
                        stack:'REACT',
                        pageSrc:'https://pokedex-473d5.firebaseapp.com/',
                        gitHubSrc:'https://github.com/mcguyvor/pokedex'
                            }
];
    return( 
        <div className='container ' id='portfolio'>
            <h1 className='title text-center'>Portfolio</h1>
            <div className='card-columns'>
                {listItems.map((idx=>{return(
                <div className='card p-2 sha threed col-xs-12'>
                    <img style={{width:'100%'}}src={idx.imgSrc} className='shadow-lg rounded card-img-top p-2'/> 
                        <div className="card-body">
                            <h5 className="card-title title font-weight-bold text-monospace"><u>{idx.title}</u></h5>
                            <p className="card-text">{idx.detail}</p>
                            <p className="card-text font-weight-bold text-center"><small><strong>{idx.stack}</strong></small></p>
                            <div className='d-flex justify-content-center'>
                                {idx.pageSrc!==null?
                                <a className="btn btn-primary rounded-pill mr-2 shadow btn-change" href={idx.pageSrc} role="button" target='_blank'>
                                <span><img src={startupIcon} className='mr-1'style={{width:'1rem'}}/></span>
                                Visit</a>
                                : null}
                                <a className="btn btn-outline-primary rounded-pill shadow btn-change" href={idx.gitHubSrc} role="button" target='_blank'>
                                <span><img src={gitIcon} className='mr-1' style={{width:'1rem'}}/></span>
                                Github</a>
                            </div>
                        </div>
                </div>
                )})
                )
                }
                
            </div>
        </div>
        
    );
}
export default Portfolio;