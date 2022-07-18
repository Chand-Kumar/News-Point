
import React, { Component } from 'react'
import Footer from './Footer';
import NewsItem2 from './NewsItem2'
import Spinner from './Spinner';
export default class News extends Component {


    constructor() {
        super();
        this.state = {
            articles: [],
            page: 1,
            key: 1,
            Loader: true,
            apikey: "89f48c5508784be5a5923eff3246a67c",
            totalResults: 0,


        }
    }


    async componentDidMount() {

        this.state.Loader = true;
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.state.apikey}&pagesize=18&page=${this.state.page}`;
        let data = await fetch(url);
        let parsedata = await data.json();





        this.setState({
            Loader: false,
            articles: parsedata.articles,
            totalResults: parsedata.totalResults

        })


    }






    handlePrevClick = async () => {
        this.state.Loader = true
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.state.apikey}&page=${this.state.page - 1}&pagesize=18`;
        let data = await fetch(url);
        let parsedata = await data.json();
        this.setState({
            Loader: false,
            page: this.state.page - 1,
            articles: parsedata.articles
        })
    }



    handleNextClick = async () => {
        this.state.Loader = true;
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.state.apikey}&page=${this.state.page + 1}&pagesize=18`;
        let data = await fetch(url);
        let parsedata = await data.json();
        this.setState({
            Loader: false,
            page: this.state.page + 1,
            articles: parsedata.articles
        })

    }





    render() {
        return (
            <>
                <div className="container justify-content-center " >
                    <h1 className='news-heading'>Top news from News Point </h1>
                    {this.state.Loader && <Spinner />}
                    <div className="row ">
                        {!this.state.Loader && this.state.articles.map((element) => {
                            return <div className="col md-4 " key={element.url} >
                                <NewsItem2 title={element.title ? element.title.slice(0, 40) : ""} desc={element.description ? element.description.slice(0, 88) : ""}
                                    urltoimage={element.urlToImage} url={element.url} author={element.author ? element.author.slice(0, 20) : "Unknown"} />
                            </div>

                        })
                        }

                    </div>


                    <div className=" btn-container" >

                        {<div className="container1 ">
                            <h1>{this.state.page}</h1>
                        </div>}
                        <br />

                        {<div className="container2">

                            <button type="button" disabled={this.state.page <= 1} onClick={this.handlePrevClick} > &larr; Previous</button>

                            <button type="button" disabled={(this.state.page + 1) >= (Math.ceil(this.state.totalResults / 15))} onClick={this.handleNextClick}  >Next &rarr; </button>


                        </div>}
                    </div>
                </div>



                <br /><br />
                {!this.state.Loader && <Footer />}


            </>
        )
    }
}
