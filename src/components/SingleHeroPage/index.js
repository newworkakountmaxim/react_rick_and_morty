import React, {Component} from 'react';
import HeroListElement from "../HeroListElement";
import { Redirect } from "react-router-dom";

class SingleHeroPage extends Component {

    state = {
        hero: {},
        error: false
    };

    render() {
        const {hero,error} = this.state;
        console.log(hero);

        if(error){
            return(
                <Redirect push to="/"/>
            )
        }

        return(
            <section className="Home__ShowcaseWrapper">
                <div className="Home__ShowcaseInner">

                    {
                        Object.keys(hero).length?
                            <HeroListElement hero={hero} />
                            :
                            <div>No data yet</div>
                    }

                </div>
            </section>
        )
    }

    componentDidMount() {
        console.log("componentDidMount");

        const {id} = this.props.match.params;

        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then(res => res.json())
            .then(res => {
                console.log(res);
                this.setState({
                    hero: res
                })
            })
            .catch(err => {
                console.log(err);
                this.setState({
                    error: true
                })
            })
    }
}

export default SingleHeroPage;