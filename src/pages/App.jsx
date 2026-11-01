/* eslint-disable no-unused-vars */
import clsx from "clsx"
import Header from "../components/Headers"
import ParallaxTitle from "../components/ParallaxTitle"
import styles from '../styles/App.module.css'
import LinedTitle from "../components/LinedTitle"
import { MobileView, BrowserView } from "react-device-detect"
import { Pagination } from "swiper/modules"

import pfp from '../assets/compressed.png'
import ProjectCard from "../components/ProjectCard"

import csharp from '../assets/TechIcons/c-sharp.png'
import css from '../assets/TechIcons/css-3.png'
import js from '../assets/TechIcons/js.png'
import sql from '../assets/TechIcons/mysql.png'
import react from '../assets/TechIcons/physics.png'
import odoo from '../assets/TechIcons/odoo.png'
import py from '../assets/TechIcons/python.png'

import ssi from '../assets/projects/ssi.png'
import pis from '../assets/projects/pis.png'
import MobilePagination from "../components/MobilePagination"

const App = () => {
  const Games = [
    <ProjectCard
      key= {0}
      link='https://kurisudevu.itch.io/pong-defense'
      image='https://img.itch.zone/aW1nLzExMzAxODM5LnBuZw==/315x250%23c/5%2B7DRe.png'
      title='Pong Defense'
      description="Pong defense is a survival game with only one goal: make it as big as possible while dodging the hexagonal enemies using your paddle. The challenge is: As you get bigger, your paddle will be smaller and smaller, more enemy type will come, and it's spawn in a faster rate."
      prompt='Click to Play'
      promptIcon='games'
    />,
    <ProjectCard
      key={1}
      link='https://kurisudevu.itch.io/border'
      image='https://img.itch.zone/aW1nLzgzNDI2NTQucG5n/315x250%23c/HONZKT.png'
      title='Borders'
      description="Borders is an endless runner game. In this game, You're playing a border with limited length. your goal: to keep the DVD logo inside the screen as long as you can."
      prompt='Click to Play'
      promptIcon='games'
    />,
    <ProjectCard
      key={2}
      link='https://kurisudevu.itch.io/orenji'
      image='https://img.itch.zone/aW1nLzk0MTc2MzIucG5n/315x250%23c/v3s3gc.png'
      title='orenji'
      description="Orenji is a platform game that's been inspired by mario, and pokemon platform games. Win by getting the flag. But can you do it without losing any of your heart?  Or you need to sacrifice one or two of them?"
      prompt='Click to Play'
      promptIcon='games'
    />
  ]

  const projects = [
    <ProjectCard
      key={0}
      link='https://github.com/ChristopherLandas/SSI_system'
      image={ssi}
      title='SSI Management System'
      description="Sales, Services, and Inventory Management Information System of a veterinary clinic at Bulacan Philippines (Our thesis work). It was made using Python's CustomTkinter Library for the application, and MariaDB as its Database, I'm the lead backend and Lead Programmer of the project"
      prompt='Click to view the Repository'
    />,
    <ProjectCard
      key={1}
      image={pis}
      title='TSO Personal Infromation System'
      description="A personal Information System at the Technical Service Office of the Commission on Audit (Our OJT Project). It was made using the Microsoft C# winforms for the application, and MySQL for the database. I am the Development Leader and Lead backend developer of the project"
      prompt='The repository is currently private'
    />
  ]

  return (
    <>
      <Header/>
      <div className={styles.main}>
        <ParallaxTitle/>

        <div id="aboutMe" className={clsx(styles.panels)}>
          <div className={styles.greetings}>
            <div className={styles.pfp}>
              <div className={styles.image}>
                <img src={pfp} alt="pfp" className="selectDisable"/>
                <h6>👋</h6>
              </div>
            </div>
            <div className={styles.msg}>
              <div className={styles.top}>
                <LinedTitle title={'Greetings!'} width={'550px'} titleSize={'3.3rem'}/>
              </div>

              <div className={styles.mid}>
                Hello! my name is Christopher; you can call me chris or kurisu for short, whatever floats your boat. I live in Rizal, Philippines; and I graduated in Cum Laude in my course Computer Science at STI College.
                My skills Involve creating 2D unity Game, Application Development, Basic Web Development, and many more. If you&apos;re asking why this is my career, well I&apos;m somewhat eccentric yet logical thinker, and my Personality INTP-T. So yeah, what can you say.
                <p/>
                I am currently working as Python Programmer specializing in Odoo Development for 2 years now.
                <p/>
                Anyways, feel free to check my projects down below, and If for business or formal purposes, kindly sent me and Email that can be found below. 
                <p/>
                Thanks for visiting my site!!!
              </div>

              <div className={styles.bot}>
                <hr style={{height: 3, border: 'none', backgroundColor: '#D96080', borderRadius: 12, width: '100%'}}/>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.panels}>
          <div className={styles.projects}>
            <div className={styles.title}>
              <LinedTitle title={'My Games!'} width={'550px'} titleSize={'3.3rem'}/>
            </div>
            <div className={styles.content}>
              <BrowserView className={styles.browser}>
                {Games.map((val) => val)}
              </BrowserView>
              <MobileView>
                <MobilePagination projectCard={Games}/>
              </MobileView>
            </div>
          </div>
        </div>

        <div className={styles.panels}>
          <div className={styles.projects}>
            <div className={styles.title}>
              <LinedTitle title={'My Projects!'} width={'550px'} titleSize={'3.3rem'}/>
            </div>
            <div className={styles.content}>
              <BrowserView className={styles.browser}>
                {projects.map((val) => val)}
              </BrowserView>
              <MobileView>
                <MobilePagination projectCard={projects} paddingBottom='19px'/>
              </MobileView>
            </div>
          </div>
        </div>


        <div className={styles.panels} style={{height: '25vh'}}>
          <div className={styles.projects}>
            <div className={styles.title}>
              <LinedTitle title={'What I used'} width={'550px'} titleSize={'3.3rem'}/>
            </div>
            <div className={styles.content} style={{display: 'flex', textAlign: 'center'}}>
              <div className={styles.techsbox}>
                <img className={styles.techs} src={py} alt="" />
              </div>
              <div className={styles.techsbox}>
                <img className={styles.techs} src={csharp} alt="" />
              </div>
              <div className={styles.techsbox}>
                <img className={styles.techs} src={css} alt="" />
              </div>
              <div className={styles.techsbox}>
                <img className={styles.techs} src={js} alt="" />
              </div>
              <div className={styles.techsbox}>
                <img className={styles.techs} src={sql} alt="" />
              </div>
              <div className={styles.techsbox}>
                <img className={styles.techs} src={react} alt="" />
              </div>
              <div className={styles.techsbox}>
                <img className={styles.techs} src={odoo} alt=""/>
              </div>
            </div>
          </div>
        </div>


        <footer>
          <hr />
          <div className={styles.divOut}>
            <div className={styles.partition}>
              <h1 id="contacts">My Contacts</h1>
              <ul>
                <li><a id="myEmail" href="https://mail.google.com/mail/?view=cm&fs=1&to=chrsmclnd@gmail.com" target="_blank">chrmsclnd@gmail.com</a></li>
                <li><a href="https://www.linkedin.com/in/christopher-landas-0089a6216/" target="_blank">LinkedIn</a></li>
                <li><a href="https://github.com/ChristopherLandas" target="_blank">GitHub</a></li>
              </ul>
            </div>

            <div className={styles.partition}>
              <h1>My Games</h1>
              <ul>
                <li><a href="https://kurisudevu.itch.io/pong-defense" target="_blank">Pong Defense</a></li>
                <li><a href="https://kurisudevu.itch.io/border" target="_blank">Borders</a></li>
                <li><a href="https://kurisudevu.itch.io/orenji" target="_blank">Orenji</a></li>
              </ul>
            </div>

            <div className={styles.partition}>
              <h1>My Skills</h1>
              <ul>
                <li>Game Development</li>
                <li>Frontend Development (ReactJs)</li>
                <li>Application Development</li>
                <li>Odoo Development</li>
                {/* <li>Full-Stack Development (MERN stack)</li> */}
              </ul>
            </div>
          </div>
        </footer>
      </div>  
    </>
  )
}

export default App