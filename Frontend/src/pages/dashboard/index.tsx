import React from 'react';

import Header from '../../components/header';
import Footer from '../../components/footer';

import userImage from '../../assets/photo.jpeg';
import campbellCar from '../../assets/campbell.png';
import audi from '../../assets/audi.png';
import cars from '../../assets/cars.png';
import editIcon from '../../assets/icon-edit.svg';
import deleteIcon from '../../assets/icon-delete.svg';

import './styles.css';

const Dashboard: React.FC = () => {
  return (
    <div id="page-dashboard">
      <div className="header-container">
        <Header />
        <a href="/">SAIR</a>
      </div>

      <main>
        <div className="post-container">
          <div className="post-header">
            <img src={userImage} alt="User" />

            <div className="details">
              <p>RAFAEL PRADO</p>
              <span>2021.04.12 - 12:00</span>
            </div>

            <div className="edit-delete">
              <img src={editIcon} alt="Edit" />
              <img src={deleteIcon} alt="Delete" />
            </div>
          </div>

          <div className="posts">
            <span>CAMPBELL SETS RECORD PACE IN SECOND KYALAMI TEST</span>
            <div className="post-content">
              <img src={campbellCar} alt="Car" />
              <div className="text-container">
                <p>
                  Matt Campbell set not one but two unofficial GT3 lap records
                  during Thursday’s second test session ahead of this weekend’s
                  Kyalami 9 Hour. GPX Racing’s Porsche is one of nine cars to
                  feature Drivers’ Championship contenders this weekend and
                  signalled its intent by leading for much of the two-hour
                  session. Only morning pace-setter Dylan Pereira (Team Perfect
                  Circle) disrupted GPX’s dominance before Mathieu Jaminet
                  lowered the benchmark three times. But even his best – which
                  was still good enough for second – wasn’t safe from Campbell
                  who promptly set the day’s first sub-1m43s lap before
                  immediately following up with a 1m42.697s – two tenths under
                  Nick Tandy’s official race lap record from last year. The
                  scale of GPX’s pace was reflected across the rest of the
                  top-nine, which was covered by the same margin as Campbell’s
                  advantage over second place.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="post-container">
          <div className="post-header">
            <img src={userImage} alt="User" />

            <div className="details">
              <p>RAFAEL PRADO</p>
              <span>2021.04.12 - 13:00</span>
            </div>
          </div>

          <div className="posts">
            <span>Total 24 Hours of Spa enters deciding phase</span>
            <div className="post-content">
              <img src={audi} alt="Audi" />
              <div className="text-container">
                <p>
                  Audi Sport Team Sainteloc led the way at three-quarter
                  distance with Christopher Haase at the wheel of its #25
                  machine, having recently made a stop under safety car
                  conditions and leapfrogged the #66 Audi Sport Team Attempto
                  car. James Calado ran third in the #51 AF Corse Ferrari,
                  followed by the #12 GPX Racing Porsche and the #72 SMP Racing
                  Ferrari. One of the major turning points of the race occurred
                  with 16 hours and 40 minutes complete when the leading #63
                  Orange1 FFF Racing Lamborghini spun into the barriers at
                  Raidillon. Dennis Lind was at the wheel and was able to get
                  going again, but significant damage forced him to pull off for
                  good at Bruxelles.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="post-container">
          <div className="post-header">
            <img src={userImage} alt="User" />

            <div className="details">
              <p>RAFAEL PRADO</p>
              <span>2021.04.13 - 14:00</span>
            </div>
          </div>

          <div className="posts">
            <span>37 cars now confirmed for 2019’s Suzuka 10 Hours</span>
            <div className="post-content">
              <img src={cars} alt="Cars" />
              <div className="text-container">
                <p>
                  Just one Mother Chassis entry is currently listed: the
                  CarsTokaiDream28 Lotus Evora that also appeared at Suzuka last
                  season. Only found in Japan, MC cars – which are based around
                  a common set of key components such as a Dome-built carbon
                  chassis and 4.5-litre V8 engine – compete alongside their GT3
                  counterparts in Super GT’s GT300 class thanks to SRO’s Balance
                  of Performance data. Super Taikyu is also well represented
                  courtesy of SATO-SS Sports (Mercedes-AMG), MP Racing (Nissan)
                  and Tairoka Racing (TBA). All three have extensive knowledge
                  of Pirelli’s DHD2 tyre, which must be used by all teams
                  competing at Suzuka and in Super Taikyu. Two more Japanese
                  entries appear on the provisional list, which is expected to
                  expand further in due course: The Callaway Competition with
                  BingoSports Corvette C7 GT3-R, which contested the same race
                  last August, and an extra McLaren – albeit currently without a
                  team – featuring two-time FIA Formula 1 World Champion Mika
                  Hakkinen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="page-footer">
        <Footer firstButtonText="CRIAR" secondButtonText="GALERIA" />
      </div>
    </div>
  );
};

export default Dashboard;
