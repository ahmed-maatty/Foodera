import React, { Fragment } from 'react';
import './Home.css';
import Header from './Header';
import prideImg from '../../imgs/pride.png';
import Ingediants from '../../imgs/ingrediants.png';
import Data from '../../Data';
import Carousel from 'react-bootstrap/Carousel';
import Girl from '../../imgs/Girl.jpg';
import Boy from '../../imgs/Boy.jpg' ;
import { Row } from 'react-bootstrap';

export default function Home() {
    const BlogEle = Data.map((item)=>{
        return(
            <div className='col-md-4'>
                <div className='Box'>
                    <img src={item.img}/>
                    <h3>{item.title}</h3>
                    <span>{item.time}</span>
                    <h6>{item.price}</h6>
                </div>
                <button><a href='#'>order now</a></button>
            </div>
        )
    })
    return (
        <Fragment>
            <Header />
            <section className='numbers'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <h2>1287+</h2>
                            <h6>SAVINGS</h6>
                        </div>
                        <div className='col-md-3'>
                            <h2>5786+</h2>
                            <h6>PHOTOS</h6>
                        </div>
                        <div className='col-md-3'>
                            <h2>1440+</h2>
                            <h6>ROCKETS</h6>
                        </div>
                        <div className='col-md-3'>
                            <h2>7110+</h2>
                            <h6>GLOBES</h6>
                        </div>
                    </div>
                </div>
            </section>
            <section className='pride'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <img src={prideImg} />
                        </div>
                        <div className='col-md-6'>
                            <h2>We pride ourselves on making real food from the best ingredients.</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.
                            </p>
                            <button><a href='#'>learn more</a></button>
                        </div>
                    </div>
                </div>
            </section>
            <section className='Ingrediant'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <h2>We pride ourselves on making real food from the best ingredients.</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                            </p>
                            <ul>
                                <li>Etiam sed dolor ac diam volutpat.</li>
                                <li>Erat volutpat aliquet imperdiet.</li>
                                <li>purus a odio finibus bibendum.</li>
                            </ul>
                            <button><a href = '#' > learn more </a></button>
                        </div>
                        <div className='col-md-6'>
                            <img src={Ingediants} />
                        </div>
                    </div>
                </div>
            </section>
            <section className='Paralex'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12'>
                            <h2>When a man's stomach is full it makes no <br/> difference whether he is rich or poor.</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio <br /> finibus bibendum in sit amet leo. Mauris feugiat erat tellus.
                            </p>
                            <a href = '#'>watch our story</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className='Blogs'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12'>
                            <h2>Explore Our Foods</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.
                            </p>
                        </div>
                    </div>
                    <div className='row'>
                        {BlogEle}
                    </div>
                </div>
            </section>
            <section className='sliderx'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12'>
                            <h1 className='tetle'>Testimonials</h1>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12'>
                        <Carousel>
                            <Carousel.Item>
                                <img src = {Girl}/>
                                <Carousel.Caption>
                                    <h3>Maccy Doe - Front End</h3>
                                    <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. "</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src = {Boy}/>
                                <Carousel.Caption>
                                    <h3>Johnthan Doe - UX Designer</h3>
                                    <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. "</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src = {Girl}/>
                                <Carousel.Caption>
                                    <h3>Simab Dave - Web Designer</h3>
                                    <p>
                                        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. "
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                        </div>
                    </div>
                </div>
            </section>
            <section className='questions'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12'>
                            <h1 className='qesti'>Frequently Asked Questions</h1>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-6 col-md-12'>
                            <h3 className='quesques'>Is Foodera Bread really baked fresh each day?</h3>
                            <p className='quesdesc'>
                                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.
                            </p>
                        </div>
                        <div className='col-lg-6 col-md-12'>
                            <h3 className='quesques'>Do you bake breads containing animal fats or products?</h3>
                            <p className='quesdesc'>
                                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.
                            </p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-6 col-md-12'>
                            <h3 className='quesques'>Can I order your products online?</h3>
                            <p className='quesdesc'>
                                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.
                            </p>
                        </div>
                        <div className='col-lg-6 col-md-12'>
                            <h3 className='quesques'>When are you opening a shop near me?</h3>
                            <p className='quesdesc'>
                                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='Subscribe'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='subtext'>
                                <h1 className='subtitle'>Hurry up! Subscribe our newsletter <br /> and get 25% Off</h1>
                                <p>Limited time offer for this month. No credit card required.</p>
                            </div>
                            <div className='subinput'>
                                <input type='text' placeholder='Email Address Here'/>
                                <button>Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <a href='#'>register</a>
                            <a href='#'>forum</a>
                            <a href='#'>affiliate</a>
                            <a href='#'>FAQ</a>

                            <p>© 2021. Foodera. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </Fragment>        
    )
}
