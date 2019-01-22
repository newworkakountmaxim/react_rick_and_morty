import React, {Component, Fragment} from 'react';
import './style.css';
import HeroListElement from "../HeroListElement";

class HeroList extends Component {

    state = {
        heros: [],
        info: {}
    };

    createHerosListHTML = () => {
        const {heros} = this.state;

        if(heros.length){
            return heros.map(hero => <HeroListElement key={hero.id} hero={hero}/>)
        }
        return <div className="Home__SubTitle">No hero yet</div>
    };

    render() {
        console.log("render");
        return(
            <Fragment>
                <section className="Home__ShowcaseWrapper">
                    <div className="Home__ShowcaseInner">

                        {this.createHerosListHTML()}

                    </div>
                </section>
                <section>
                    <a href="">Prev</a>
                    <span>25</span>
                    <a href="">Next</a>
                </section>
            </Fragment>
        )
    }

    componentDidMount() {
        console.log("componentDidMount");

        fetch("https://rickandmortyapi.com/api/character/?page=25")
            .then(res => res.json())
            .then(res => {
                console.log(res);
                this.setState({
                    heros: res.results,
                    info: res.info,
                })
            })
    }
}

export default HeroList;