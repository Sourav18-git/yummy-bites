import React, { useState } from 'react'
import { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import chiken from '../../assets/menu/chicken_kosha.webp'
import Bhature from '../../assets/menu/chole_bature.jpg'
import Dosha from '../../assets/menu/dosha.avif'
import Biriyani from '../../assets/menu/biriyani.jpg'
import Fsh from '../../assets/menu/fish.JPG'
import Jalebi from '../../assets/menu/jalebi.jpg'
import Jamun from '../../assets/menu/golapjamun.webp'
import Samosa from '../../assets/menu/samosha.avif'
import { Link } from "react-router-dom"
import Cards from '../../components/Layout/Cards'
// Mock Data Cards
const mockData = [
  {
    id: "0001",
    image: chiken,
    title: "Chicken Kosha",
    paragraph: "Chicken breast, chilli sauce, tomatoes, pickles, coleslaw",
    rating: 5,
    price: 99.15,
  },
  {
    id: "0002",
    image: Bhature,
    title: "Chole Bhature",
    paragraph: "House patty, cheddar cheese, bacon, onion, mustard",
    rating: 4.5,
    price: 99.32,
  },
  {
    id: "0003",
    image: Dosha,
    title: "Masala Dosha",
    paragraph: "American cheese, tomato relish, avocado, lettuce, red onion",
    rating: 4,
    price: 69.15,
  },
  {
    id: "0004",
    image: Biriyani,
    title: "Chicken Biriyani",
    paragraph: "House patty, cheddar cheese, bacon, onion, mustard",
    rating: 3.5,
    price: 99.25,
  }, {
    id: "0005",
    image: Fsh,
    title: "Fish Currey",
    paragraph: "2 patties, cheddar cheese, mustard, pickles, tomatoes",
    rating: 3.0,
    price: 59.25,
  },
  {
    id: "0006",
    image: Samosa,
    title: "Samosa",
    paragraph: "Turkey, cheddar cheese, onion, lettuce, tomatoes, pickles",
    rating: 3,
    price: 79.18,
  },
  {
    id: "0007",
    image: Jalebi,
    title: "Jalebi",
    paragraph: "patty, cheddar cheese, onion, lettuce, tomatoes, pickles",
    rating: 2.5,
    price: 99.19,
  },
  {
    id: "0008",
    image: Jamun,
    title: "Golap Jamun",
    paragraph: "cheddar cheese, ketchup, mustard, pickles, onion",
    rating: 2.0,
    price: 89.12,
  },
  // Add more mock data objects as needed
];

// Rating Logical Data
const renderRatingIcons = (rating) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (rating > 0.5) {
      stars.push(<i key={i} className="bi bi-star-fill"></i>);
      rating--;
    } else if (rating > 0 && rating < 1) {
      stars.push(<i key={"half"} className="bi bi-star-half"></i>);
      rating--;
    } else {
      stars.push(<i key={`empty${i}`} className="bi bi-star"></i>);
    }
  }
  return stars;
};
export default function Section3() {

  const [filterData, setFilterData] = useState(mockData);
  // setFilterData(mockData);
  useEffect(() => {
    const fetchFoodData = async () => {
      //   console.log(mockData)
      // setFilterData(mockData);
      // console.log(filterData)
    }
    fetchFoodData();
  }, []);
  const searchFood = (e) => {
    const searchValue = e.target.value;
    console.log(searchValue);
    // if (searchValue == '') {
    //     setFilterData(null);
    // }
    // const filter = mockData?.filter((food) =>
    //     food.name.toLowerCase().includes(searchValue.toLowerCase())
    // );
    // setFilterData(filter);
  }
  return (
    <section >
      <section className="menu_section">
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} className='text-center mb-5'>
              <h2>OUR MENUS</h2>
              <div className="para" style={{ fontWeight: "900", display: "flex",    justifyContent:" center" }}>
              <p >
                Enjoy Every
              </p>
              <p style={{ color: "red", fontWeight: "900", marginLeft: "5px", marginRight: "5px", fontSize: "20px" }}>Tasty</p>
              <p>
                &
              </p>
              <p style={{ color: "red", marginLeft: "5px", marginRight: "5px", fontSize: "20px" }}>Delightful</p>
              <p> Bite With Us</p>

              </div>
            </Col>
          </Row>
          <Row>
            {/* <div className="search">
            <input placeholder='Search Food' onChange={searchFood} />
          </div> */}
            <div class="container">

              <div class="row height d-flex justify-content-center align-items-center">

                <div class="col-md-6">

                  <div class="form">
                    <i class="fa fa-search"></i>
                    <input type="text" class="form-control form-input" placeholder="Search your favourite item..." />
                    <span class="left-pan"><i class="fa fa-microphone"></i></span>
                  </div>

                </div>

              </div>

            </div>

            {filterData.map((cardData, index) => (
              <Cards
                key={index}
                image={cardData.image}
                rating={cardData.rating}
                title={cardData.title}
                paragraph={cardData.paragraph}
                price={cardData.price}
                renderRatingIcons={renderRatingIcons}

              />
            ))}
          </Row>
          <div>
          {/* <button type="button" class="btn btn-primary" disabled> Previous</button>
          <button>Next</button>
       */}
        <div className="next_Page">
              <Link to="/">
                
                Exlpore more...
              </Link>
            </div>
          </div>
             {/* <Row className="pt-5">
          <Col sm={6} lg={5}>
            <div className="ads_box ads_img1 mb-5 mb-md-0">
              <h4 className="mb-0">GET YOUR FREE</h4>
              <h5>CHEESE FRIES</h5>
              <Link to="/" className="btn btn_red px-4 rounded-0">
                Learn More
              </Link>
            </div>
          </Col>
          <Col sm={6} lg={7}>
            <div className="ads_box ads_img2">
              <h4 className="mb-0">GET YOUR FREE</h4>
              <h5>CHEESE FRIES</h5>
              <Link to="/" className="btn btn_red px-4 rounded-0">
                Learn More
              </Link>
            </div>
          </Col>
        </Row> */}
        </Container>
      </section>
    </section>
  )
}
