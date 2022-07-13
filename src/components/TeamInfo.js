import React from "react"

class TeamInfo extends React.Component {
    render() {
        return(
            <article className="flex border box align-item_center gap5">
                <div>
                    <img src={this.props.picture} alt="team crest" className="img-size"/>
                </div>
                <div>
                    <h2 className="font-size">{this.props.shortName}</h2>
                    <h3 className="font-size">{this.props.stade}</h3>
                    <h3 className="font-size">{this.props.address}</h3>
                    <h3 className="font-size">{this.props.email}</h3>
                    <h3 className="font-size">{this.props.tel}</h3>
                    <h3 className="font-size">{this.props.foundationDate}</h3>
                </div>
            </article> 
        )
    }


}

export default TeamInfo