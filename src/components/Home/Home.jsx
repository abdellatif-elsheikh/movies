import React, { Component } from 'react';
import styles from "./body.module.css";
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Home extends Component {

    state = { movies: [], tv: [] };
    getData = async (mediaType) => {
        let { data } = await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=52bbcddeda849047525b51d6f8a12361`);
        console.log(data.results);
        this.setState({
            [mediaType]: data.results
        })
    }

    componentDidMount() {
        this.getData(`movies`);
        this.getData(`tv`);
    }

    render() {
        return (
            <>
                <div className="container mt-5 pt-5">
                    {/* ----------------- Movies ------------------ */}
                    <div className={`row my-5 ${styles.movies}`}>
                        <div className={`${styles.interor} col-md-4 d-flex`}>
                            <div className={`${styles.brdr} w-25 mb-3`}></div>
                            <h1 className="mb-3">Trending <br /> movies <br /> to watch now</h1>
                            <p>most watched movies by weeks</p>
                            <div className={`${styles.brdr} w-25 mb-3`}></div>
                        </div>
                        {this.state.movies.slice(0, 10).map((value, index) => {
                            return (
                                <div key={index} className={` ${styles.myCard} col-lg-2 col-md-3 col-sm-6 my-3 d-flex`}>
                                    <div className={`${styles.img_container} position-relative`}>
                                        <div className={`${styles.layer} d-flex justify-content-center align-items-center text-center text-white px-2`}>{value.title}{value.name}</div>
                                        <i className={`${styles.bookmark} far fa-bookmark position-absolute`}><i className={`${styles.plus} fas fa-plus position-absolute`}></i></i>
                                        <div className={`${styles.rate} position-absolute text-white`}><span>{value.vote_average}</span></div>
                                        <img src={`https://image.tmdb.org/t/p/w500/${value.poster_path}`} alt="" className="w-100" />
                                    </div>
                                    <div className={`${styles.content_wrapper} position-relative`}>
                                        <h5 className={`${styles.title} my-3 `}>{value.title}{value.name}</h5>
                                        <Link to="/tvShow" className={`btn btn-primary w-100`}>Read more</Link>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    {/* ------------------ tv ------------------- */}
                    <div className={`row my-5 ${styles.movies}`}>
                        <div className={`${styles.interor} col-md-4 d-flex`}>
                            <div className={`${styles.brdr} w-25 mb-3`}></div>
                            <h1 className="mb-3">Trending <br /> tv shows <br /> to watch now</h1>
                            <p>most watched tv shows by weeks</p>
                            <div className={`${styles.brdr} w-25 mb-3`}></div>
                        </div>
                        {this.state.tv.slice(0, 10).map((value, index) => {
                            return (
                                <div key={index} className={` ${styles.myCard} col-lg-2 col-md-3 col-sm-6 my-3 d-flex`}>
                                    <div className={`${styles.img_container} position-relative`}>
                                        <div className={`${styles.layer} d-flex justify-content-center align-items-center text-center text-white px-2 m-0`}>{value.title}{value.name}</div>
                                        <i className={`${styles.bookmark} far fa-bookmark position-absolute`}><i className={`${styles.plus} fas fa-plus position-absolute`}></i></i>
                                        <div className={`${styles.rate} position-absolute text-white`}><span>{value.vote_average}</span></div>
                                        <img src={`https://image.tmdb.org/t/p/w500/${value.poster_path}`} alt="" className="w-100" />
                                    </div>
                                    <div className={`${styles.content_wrapper} position-relative`}>
                                        <h5 className={`${styles.title} my-3`}>{value.title}{value.name}</h5>

                                        <Link to="/tvShow" className={`btn btn-primary w-100`}>Read more</Link>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </>
        )
    }
}
