import React, {Component} from 'react';
import HeroListElement from "../HeroListElement";
import { Redirect } from "react-router-dom";

import fetchSinglePersonageData from '../../services/fetch-data';

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
                <Redirect push to="../404-error"/>
            )
        }

        return(
            <section className="Home__ShowcaseWrapper">
                <div className="Home__ShowcaseInner">

                    {
                        Object.keys(hero).length?
                            <HeroListElement hero={hero} nolinkmore={true}/>
                            :
                            <div>No data yet</div>
                    }

                    {/*{hero.name}*/}

                </div>
            </section>
        )
    }

    componentDidMount() {

        const {id} = this.props.match.params;

        fetchSinglePersonageData(`https://rickandmortyapi.com/api/character/${id}`)
            .then(res => {
                this.setState({
                    hero: res
                })
            })
            .catch(err => {
                console.log(err);
                this.setState({
                    error: true
                });
            })
    }
}

export default SingleHeroPage;