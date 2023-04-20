import { useState } from 'react';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <div className='image-fixed'>
        <img
          src='https://html-testing-rho.vercel.app/profile_girl.jpg'
          alt='Image background'
        />
      </div>
      <main className='main'>
        <header className='header'>
          <div className='header__title'>
            <h1>Jane Doe</h1>
            <p>Photographer and Web Designer.</p>
          </div>
          <button>
            <i className='fa-solid fa-download'></i>
            Dowload Resume
          </button>
        </header>
        <div className='portfolio'>
          <p>My Portfolio</p>
          <div className='portfolio--image'>
            <div className='portfolio__image--left'>
              <img
                src='https://html-testing-rho.vercel.app/wedding.jpg'
                alt=''
              />
              <img src='https://html-testing-rho.vercel.app/rocks.jpg' alt='' />
              <img
                src='https://html-testing-rho.vercel.app/sailboat.jpg'
                alt=''
              />
            </div>
            <div className='portfolio__image--right'>
              <img
                src='https://html-testing-rho.vercel.app/underwater.jpg'
                alt=''
              />
              <img src='https://html-testing-rho.vercel.app/chef.jpg' alt='' />
              <img
                src='https://html-testing-rho.vercel.app/wedding%20(1).jpg'
                alt=''
              />
              <img src='https://html-testing-rho.vercel.app/p6.jpg' alt='' />
            </div>
          </div>
        </div>
        <div className='about'>
          <p className='about__title'>About</p>
          <hr />
          <p>
            Some text about me. Some text about me. I am lorem ipsum consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
        </div>
        <div className='skills'>
          <p className='skills__title'>My Skills</p>
          <div className='gauge'>
            <div className='gauge__item'>
              <p className='gauge__title'>Photography</p>
              <div className='gauge-100'>
                <div className='percent w-95'>95%</div>
              </div>
            </div>
            <div className='gauge__item'>
              <p className='gauge__title'>Web Design</p>
              <div className='gauge-100'>
                <div className='percent w-85'>85%</div>
              </div>
            </div>
            <div className='gauge__item'>
              <p className='gauge__title'>Photoshop</p>
              <div className='gauge-100'>
                <div className='percent w-80'>80%</div>
              </div>
            </div>
          </div>
          <div className='carneer'>
            <div className='carneer__item'>
              <h3 className='carneer__count'>14+</h3>
              <p className='carneer__title'>Partners</p>
            </div>
            <div className='carneer__item'>
              <h3 className='carneer__count'>55+</h3>
              <p className='carneer__title'>Projects Done</p>
            </div>
            <div className='carneer__item'>
              <h3 className='carneer__count'>89+</h3>
              <p className='carneer__title'>Happy Clients</p>
            </div>
            <div className='carneer__item'>
              <h3 className='carneer__count'>150+</h3>
              <p className='carneer__title'>Meetings</p>
            </div>
          </div>
          <button>
            <i className='fa-solid fa-download'></i>
            Dowload Resume
          </button>
        </div>
        <div className='reputation'>
          <p className='reputation__title'>My Reputation</p>
          <div className='reputation__list'>
            <div className='reputation__item'>
              <img
                src='https://html-testing-rho.vercel.app/avatar_smoke%20(1).jpg'
                alt=''
              />
              <div className='feedback'>
                <span className='feedback__author'>Chandler Bing.</span>
                <span className='feedback__major'> Designer.</span>
                <p className='feedback__content'>
                  Jane Doe is just awesome. I am so happy to have met her!
                </p>
              </div>
            </div>
            <div className='reputation__item'>
              <img
                src='https://html-testing-rho.vercel.app/bandmember.jpg'
                alt=''
              />

              <div className='feedback'>
                <span className='feedback__author'>Chris Fox.</span>
                <span className='feedback__major'> CEO at Mighty Schools.</span>
                <p className='feedback__content'>
                  Jane Doe saved us from a web disaster.
                </p>
              </div>
            </div>
            <div className='reputation__item'>
              <img
                src='https://html-testing-rho.vercel.app/avatar_g2.jpg'
                alt=''
              />
              <div className='feedback'>
                <span className='feedback__author'>Rebecca Flex.</span>
                <span className='feedback__major'> CEO at Company.</span>
                <p className='feedback__content'>
                  No one is better than Jane Doe.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='price'>
          <p className='price__title'>My Price</p>
          <div className='price__table'>
            <div className='price__basic'>
              <div className='price__table__basic'>Basic</div>
              <div className='price__table__lower'>Web Design</div>
              <div className='price__table__lower'>Photography</div>
              <div className='price__table__lower'>5 GB Storage</div>
              <div className='price__table__lower'>Mail Support</div>
              <div className='price__table__money'>
                <h4 className='price__index'>$ 10</h4>
                <p>permonth</p>
              </div>
              <div className='price__table__sign'>Sign up</div>
            </div>
            <div className='price__pro'>
              <div className='price__table__pro'>Pro</div>
              <div className='price__table__lower'>Web Design</div>
              <div className='price__table__lower'>Photography</div>
              <div className='price__table__lower'>50 GB Storage</div>
              <div className='price__table__lower'>Mail Support</div>
              <div className='price__table__money'>
                <h4 className='price__index'>$ 25</h4>
                <p>permonth</p>
              </div>
              <div className='price__table__sign'>Sign up</div>
            </div>
          </div>
        </div>
        <div className='contact'>
          <p className='contact__title'>Contact</p>
          <hr />
          <div className='contact__list'>
            <div className='contact__item'>
              <i className='fa-solid fa-location-dot'></i>
              <span>Chicago, US</span>
            </div>
            <div className='contact__item'>
              <i className='fa-solid fa-phone'></i>
              <span>Phone: +00 151515</span>
            </div>
            <div className='contact__item'>
              <i className='fa-solid fa-envelope'></i>
              <span>Email: mail@mail.com</span>
            </div>
          </div>
          <img src='https://html-testing-rho.vercel.app/map.jpg' alt='' />
          <form className='contact__form'>
            <p>Lets get in touch. Send me a message:</p>
            <input className='contact__input' type='text' placeholder='Name' />
            <input className='contact__input' type='text' placeholder='Email' />
            <input
              className='contact__input'
              type='text'
              placeholder='Subject'
            />
            <input
              className='contact__input'
              type='text'
              placeholder='Message'
            />
            <button>
              <i className='fa-solid fa-paper-plane'></i>
              SEND MESSAGE
            </button>
          </form>
        </div>
        <footer className='footer'>
          <div className='footer__icons'>
            <i className='fa-brands fa-facebook'></i>
            <i className='fa-brands fa-instagram'></i>
            <i className='fa-brands fa-snapchat'></i>
            <i className='fa-brands fa-pinterest-p'></i>
            <i className='fa-brands fa-twitter'></i>
            <i className='fa-brands fa-linkedin-in'></i>
          </div>
          <p>Powered by w3.css</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
