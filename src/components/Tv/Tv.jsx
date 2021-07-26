import React, { Component } from 'react';
import axios from 'axios';
import styles from "../shared-css/move_tv.module.css";

export default class Tv extends Component {
    state = { tv: [] };
    getData = async () => {
        let { data } = await axios.get(`https://api.themoviedb.org/3/trending/tv/day?api_key=52bbcddeda849047525b51d6f8a12361`);
        console.log(data.results);
        this.setState({
            tv: data.results
        })
    }

    componentDidMount() {
        this.getData();
    }
    render() {
        return (
            <>
                <div className="container mt-5 pt-5">
                    {/* ----------------- Movies ------------------ */}
                    <div className="row pt-5">

                        {this.state.tv.map((value, index) => {
                            return (
                                <div key={index} className="col-lg-3 col-md-4 col-6 mb-5">
                                    <div className={`${styles.img_wrapper}`}>
                                        <img src={`https://image.tmdb.org/t/p/w500/${value.poster_path}`} alt="" className="w-100 mb-3" />
                                    </div>
                                    <div className={`${styles.content_wrapper}`}>
                                        <h4>{value.name} {value.title}</h4>
                                        <p>{value.overview}</p>
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
