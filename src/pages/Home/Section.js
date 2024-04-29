import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Burger from '../../assets/hero/hero-2.png'
import Biriyani from '../../assets/hero/biriyani.png'
import plus from '../../assets/hero/plus_icon.jpg'
import Drinks from '../../assets/hero/drinks.png'

import { Link } from 'react-router-dom'
export default function Section() {
    return (
        <section className='hero_section'>
            <Container>
                <Row>
                    <Col lg={7} className='mb-5 mb-lg-0'>
                        <div className="position-relative">
                            <img src={Biriyani} alt="hero" className='img-fluid' />
                            {/* <img src={plus} alt="hero" className='img-fluid' /> */}
                            <i class="bi bi-plus "  id='plus_icon' ></i>
                            <img src={Drinks} alt="hero" className='img-fluid'  id ='drinks_img'/>
                            <div className="price_badge">
                                <div className="badge_text">
                                    <h4 className="h4_xs">Only</h4>
                                    <h4 className="h3_lg">Rs 99</h4>
                                </div>
                            </div>
                        </div>
                        </Col>
                        <Col lg={5}>
                            <div className="hero_text text-center">
                                <h1 className="text-white"> Special Biriyani </h1>
                                <h2 className="text-white">With Free Coldrinks</h2>
                                <p className="text-white pt-2 pb-4">
                                    Feugiat primis ligula risus auctor laoreet augue egestas mauris
                                    viverra tortor in iaculis pretium at magna mauris ipsum primis
                                    rhoncus feugiat
                                </p>
                                <Link to="/" className="btn order_now">
                                    Order Now
                                </Link>
                            </div>
                        </Col>
      
                </Row>
            </Container>

        </section>
    )
}
