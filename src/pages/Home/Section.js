import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Burger from '../../assets/hero/hero-2.png'
import Biriyani from '../../assets/hero/biriyani.png'
import plus from '../../assets/hero/plus_icon.png'
import Drinks from '../../assets/hero/drinks.png'

import { Link } from 'react-router-dom'
export default function Section() {
    return (
        <section className='hero_section'>
            <Container>
                <Row >
                    <Col lg={7} className='mb-5 mb-lg-0' >
                        <div className="position-relative">
                            <img src={Biriyani} alt="hero" className='img-fluid Biriyani' />
                            <img src={plus} alt="hero" className='img-fluid plus' />
                            {/* <i class="bi bi-plus "  id='plus_icon'></i> */}
                            <img src={Drinks} alt="hero" className='img-fluid'  id ='drinks_img'/>
                            <div className="price_badge">
                                <div className="badge_text">
                                    <h4 className="h4_xs">Only</h4>
                                    <h4 className="h3_lg">Rs 99</h4>
                                </div>
                            </div>
                        </div>
                        </Col>
                        <Col lg={5} id='hero_section_Cotaniner2'>
                            <div className="hero_text text-center">
                                <h1 className="text-white"> Special Biriyani </h1>
                                <h2 className="text-white">With Free Coldrinks</h2>
                                <p className="text-white pt-2 pb-4">
                                   Chicken biriyani is a rice dish with vegetables,chicken marinated in 
                                   yogurt and warm spices such as turmeric, red chilli powder
                                   and garam masala, flavorful and delicious
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
