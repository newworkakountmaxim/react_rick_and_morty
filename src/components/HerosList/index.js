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



    static getDerivedStateFromProps(props, state){

        //console.log('aaaaaaaaa');
        // console.log(state);
       return {
           heros:state.heros,
           info:state.info,
           pagenum:state.pagenum
        };
    }


    // componentWillUpdate(nextProps, nextState, nextContext) {
    //     console.log(nextProps);
    //     console.log(nextState);
    //     console.log(nextContext);
    // }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log(this.state.pagenum);
        console.log(nextProps.match.params.pagenum);
        //console.log(nextProps.match.params.pagenum);
        //nextState.pagenum = nextProps.match.params.pagenum;
        //console.log(nextState);
        if (nextProps.match.params.pagenum !== this.state.pagenum)
            {this.getPersonageData(nextProps.match.params.pagenum);}
        return true;

    }

    // componentWillReceiveProps(nextProps, nextContext){
    //     const {pagenum} = nextProps.match.params;
    //     this.getPersonageData(pagenum);
    // }

    getPersonageData = (pagenum) => {
        //pagenum? pagenum=pagenum : pagenum=1
        fetchPersonageData(`https://rickandmortyapi.com/api/character/?page=${pagenum}`)
            .then(res => {
                this.setState({
                    heros: res.results,
                    info: res.info,
                })
            })
    }

    createHerosListHTML = () => {
        const {heros} = this.state;
        const {info} = this.state;

        if(heros.length){
            return heros.map(hero => <HeroListElement key={hero.id} hero={hero}/>)
        }
        return <div className="Home__SubTitle">No hero yet</div>
    };



    render() {
        const {pagenum} = this.props.match.params;

        return(
            <Fragment>
                <section className="Home__ShowcaseWrapper">
                    <div className="Home__ShowcaseInner">
                        {this.createHerosListHTML()}
                    </div>
                </section>
                <section className = "Pagination___Wrapper">
                    <Pagination pagenum={pagenum} info={this.state.info} />
                </section>
            </Fragment>
        )
    }

    componentDidMount() {
        const {pagenum} = this.props.match.params;
        this.getPersonageData(pagenum);
    }
}

export default HeroList;