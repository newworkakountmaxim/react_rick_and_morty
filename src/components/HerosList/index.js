import React, {Component, Fragment} from 'react';
import './style.css';
import HeroListElement from "../HeroListElement";
import Pagination from "../Pagination";

import fetchPersonageData from '../../services/fetch-data';

class HeroList extends Component {

    state = {
        heros: [],
        info: {},
        pagenum: this.props.match.params.pagenum
    };

    createHerosListHTML = () => {
        const {heros} = this.state;
        const {info} = this.state;
//console.log(info);
        if(heros.length){
            return heros.map(hero => <HeroListElement key={hero.id} hero={hero}/>)
        }
        return <div className="Home__SubTitle">No hero yet</div>
    };

    // nextPage = (e) => {
    //     e.preventDefault();
    //     const {info} = this.state;
    //
    //     (info.next ==='') ? console.log('ne ok') :
    //         (
    //             fetch(info.next)
    //                 .then(res => res.json())
    //                 .then(res => {
    //                     //console.log(res);
    //
    //                     this.setState({
    //                         heros: res.results,
    //                         info: res.info,
    //                         pagenum: 1*(this.state.pagenum)+1
    //                     })
    //                 })
    //         )
    // }
    // prevPage = (e) => {
    //     e.preventDefault();
    //     const {info} = this.state;
    //
    //     (info.prev ==='') ? console.log('ne ok') :
    //         (
    //             fetch(info.prev)
    //                 .then(res => res.json())
    //                 .then(res => {
    //                     console.log(res);
    //                     this.setState({
    //                         heros: res.results,
    //                         info: res.info,
    //                         pagenum: 1*(this.state.pagenum)-1
    //                     })
    //                 })
    //         )
    // }

    render() {
        //console.log("render");
        const {pagenum} = this.props.match.params;
        console.log(this.state);
        return(
            <Fragment>
                <section className="Home__ShowcaseWrapper">
                    <div className="Home__ShowcaseInner">

                        {this.createHerosListHTML()}

                    </div>
                </section>
                <section className = "Pagination___Wrapper">
                    {/*<a href="#" onClick={this.prevPage}>Prev</a>*/}
                    {/*<span>{this.state.pagenum}</span>*/}
                    {/*<a href="#" onClick={this.nextPage}>Next</a>*/}
                    <Pagination pagenum={pagenum} info={this.state.info}/>
                </section>
            </Fragment>
        )
    }

    componentDidMount() {
        const {pagenum} = this.props.match.params;
        // fetch(`https://rickandmortyapi.com/api/character/?page=${pagenum}`)
        //     .then(res => res.json())
        fetchPersonageData(`https://rickandmortyapi.com/api/character/?page=${pagenum}`)
            .then(res => {
                this.setState({
                    heros: res.results,
                    info: res.info,
                })
            })
    }
}

export default HeroList;