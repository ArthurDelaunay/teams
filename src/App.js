import React from "react"
import teams from "./teams.json"
import TeamInfo from "./components/TeamInfo"
import Counter from "./components/Counter"
import "./reset.css"
import "./App.css"

class App extends React.Component {
    constructor () {
        super()
        this.state = {
            count: 10,
        }
        }
    handleClickIncrementCount = () => {
        if (this.state.count < teams.length) {
            this.setState({
                count: this.state.count +1
            })
        }
            
    }
    handleClickDecrementCount = () => {
        if (this.state.count > 1){
                this.setState({
                count: this.state.count - 1
                })
        }
    }             

    


    render() {
        return (
            <div>
                <Counter 
                    count={this.state.count}
                    increment={this.handleClickIncrementCount}
                    substract={this.handleClickDecrementCount}
                />
                <section className="flex wrap gap5 justify-content_center ">
                {teams
                    .filter( (team, i) => {
                        return i <= this.state.count - 1
                    })
                    .map( (team) => {
                        return ( 
                                <TeamInfo 
                                    key={team.id}
                                    shortName={team.shortName}
                                    picture={team.crestUrl}
                                    stade={team.venue}
                                    address={team.address}
                                    email={team.email}
                                    tel={team.phone}
                                    foundationDate={team.founded}
                                />
                        ) 
                    })
                }
                </section>
            </div>
            
        )
    }
}


export default App