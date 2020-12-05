import React, { Component, useState } from 'react'
import Games from '../GamesGraphs/Index'
import Navbar from '../Navbar'
import PlayerInfo from '../PlayerBasicDetails'
import axios from 'axios'


const api = axios.create({
    baseURL: `http://localhost:5000/Users`
})

const api_game1 = axios.create({
    baseURL: `http://localhost:5000/ShootingGame`
})

const api_game2 = axios.create({
    baseURL: `http://localhost:5000/KartGame`
})

const api_game3 = axios.create({
    baseURL: `http://localhost:5000/TankGame`
})

class PlayerProfiler extends Component {

    

    state = {
        playerName: "",
        PlayerEmail: "",
        ShootingGame:{
            x:[],
            y:[]
        },
        KartGame:{
            x:[],
            y:[]
        },
        TankGame:{
            Player1:[],
            Player2:[]
        }
        
    }

    componentDidMount() {
        
        api.get('/' + this.props.PlayerId).then((x) => {

            this.setState({
                playerName: x.data.userName,
                PlayerEmail: x.data.email
            })
            console.log(this.state.playerName + " :  " + this.state.PlayerEmail);
            
            api_game1.get('/'+x.data.ShootingGameID).then((x1)=>{
                this.setState({
                    ShootingGame:{
                        x:(x1.data.Wins).split(',').map(Number),
                        y:(x1.data.Loose).split(',').map(Number)
                    }
                })
                console.log(this.state.ShootingGame.x);
                console.log(this.state.ShootingGame.y);
            }).catch((err)=>{
                console.log(err);
            });

            api_game2.get('/'+x.data.KartGameID).then((x1)=>{
                this.setState({
                    KartGame:{
                        x:(x1.data.Wins).split(',').map(Number),
                        y:(x1.data.Loose).split(',').map(Number)
                    }
                })
                console.log(this.state.KartGame.x);
                console.log(this.state.KartGame.y);
            }).catch((err)=>{
                console.log(err);
            });

            api_game3.get('/'+x.data.TankGameID).then((x1)=>{
                this.setState({
                    TankGame:{
                        Player1:(x1.data.Player1).split(',').map(Number),
                        Player2:(x1.data.Player2).split(',').map(Number)
                    }
                })
                console.log(this.state.TankGame.Player1);
                console.log(this.state.TankGame.Player2);
                console.log(x1.data);
            }).catch((err)=>{
                console.log(err);
            });
            
        }).catch((err) => {
            console.log(err);
        })
    }

    render() {
        return (
            <div>
                <Navbar />
                <PlayerInfo playername={this.state.playerName} playeremail={this.state.PlayerEmail} /> 
                <Games game1x={this.state.ShootingGame} game2x={this.state.KartGame} game3x={this.state.TankGame} />
                
            </div>
        )
    }

}

export default PlayerProfiler
