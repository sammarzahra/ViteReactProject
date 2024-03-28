// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import image1 from "./assets/My Picture.png";
function App() {
  return (
    <>
      <div>
        <div class="container">
          <div class="profile">
            <div class="profile_container">
              <div class="profile_profileImg">
                <img src={image1} alt="Sammar zahra" />
              </div>
              <div>
                <h1 class="profile_name">
                  <span class="profile_name_firstName">SAMMAR</span>
                  <span class="profile_name_lastName">ZAHRA</span>
                </h1>
                <p class="profile_title">WEB Developer</p>
                <p class="description profile_description">
                  Web Developer with a passion for web application development
                  and success in managing development projects.Dedicated to
                  driving innovation with the ability to follow industry and
                  technological trends and facilitating early adoption of
                  innovations.
                </p>
              </div>
            </div>
          </div>
          <div class="group-1">
            <div class="skills">
              <h3 class="title">Expertise</h3>
              <ul class="skills_list description">
                <li>HTML</li>
                <li>Wordpress</li>
                <li>CSS</li>
                <li>Node Js</li>
                <li>React</li>
              </ul>
            </div>
            <div class="ref">
              <h3 class="title">Additional Skills</h3>
              <ul class="skills_list description">
                <li>Java</li>
                <li>C++</li>
                <li>Assembly Language</li>
                <li>Data Structure</li>
                <li>Canva</li>
              </ul>
            </div>

            <div class="edu">
              <h3 class="title">Education</h3>
              <div class="edu_item">
                <p class="item_preTitle">2017-2019</p>
                <h4 class="item_title">Secondary and High School</h4>
                <p class="item_subtitle">Elite Science Acadmy</p>
              </div>
              <div class="edu_item">
                <p class="item_preTitle">2020-2024</p>
                <h4 class="item_title">Bachelors In Computer Science</h4>
                <p class="item_subtitle">
                  Currently Student in Comsats University
                </p>
              </div>
            </div>

            <div class="certification">
              <h3 class="title">certification</h3>
              <div class="certification_item">
                <p class="item_preTitle">2022</p>
                <h4 class="item_title">Wordpress</h4>
                <p class="description">
                  I have completed the course of Wordpress from Digiskills
                  website.
                </p>
              </div>
            </div>
          </div>
          <div class="group-2">
            <div class="exp">
              <h3 class="title">Experience</h3>
              <div class="exp_item">
                <p class="item_preTitle">2022</p>
                <h4 class="item_title">Group Project</h4>
                <p class="item_subtitle">Database And Data Mining</p>
                <p class="description">
                  We Have completed the project based on Database of different
                  Cars.
                </p>
              </div>
              <div class="exp_item">
                <p class="item_preTitle">2022</p>
                <h4 class="item_title">Group Project</h4>
                <p class="item_subtitle">Game Development</p>
                <p class="description">
                  We have complted the small projects Tic tac toe , 9 queens
                  problem Using the Java and C++ languages.
                </p>
              </div>
            </div>
            <div class="awards">
              <h3 class="title">Awards</h3>
              <div class="awards_item">
                <p class="item_preTitle">2021</p>
                <h4 class="item_title">Group Project /Good Percentage</h4>
                <p class="description">
                  When we have complted the projects based on using database
                  technologies then we get the 95% in the final exam.
                </p>
              </div>
            </div>

            <div class="interest">
              <h3 class="title">Interest</h3>
              <div class="interest_items">
                <div class="interest_item">
                  <i data-feather="music"></i>
                  <span>Music</span>
                </div>
                <div class="interest_item">
                  <i data-feather="book"></i>
                  <span>Books</span>
                </div>
                <div class="interest_item">
                  <i data-feather="map"></i>
                  <span>Travel</span>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div class="group-3">
            <div class="contact">
              <h3 class="title">Contact</h3>
              <div class="contact_info">
                <p class="description">Gujrat, Jalal Pur Jattan</p>
                <p class="description">+92 3480640880</p>
                <p class="description">zahrasamar88@gmail.com</p>
              </div>
            </div>
            <div class="social">
              <h3 class="title">Socials</h3>
              <div class="social_items">
                <a href="/" target="_b" class="social_item">
                  <i data-feather="github"></i>
                  <span>/Zahra512</span>
                </a>
                <a href="/" target="_blank" class="social_item">
                  <i data-feather="twitter"></i>
                  <span>/Zahra512</span>
                </a>
                <a href="/" target="_blank" class="social_item">
                  <i data-feather="linkedin"></i>
                  <span>/Zahra512</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
