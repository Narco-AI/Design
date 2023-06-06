import './about.css';
import { Profile } from './work';
import profile from '../assets/Front/profile.png';
import Progress from '../components/progress';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Fab from '@mui/material/Fab';
import GitHubIcon from '@mui/icons-material/GitHub';
import ToggleColorMode from '../components/darkmode';
import useLocalStorage from 'use-local-storage';
import {BsMedium} from 'react-icons/bs';

export function About() {

    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

    return(
<>

        <section className='main' data-theme = {theme}>
            <div className='left'>
                <img src={profile}/>
                <br/><br/>
                <div className="line"/>
                <Profile />
                <div className="line"/>
                <ul>
                    <li><ToggleColorMode /></li>
                    <li><a href='/'>WORK</a></li>
                    <li><a href='/about'><u>ABOUT</u></a></li>
                </ul>
            </div>
            <div className='mid'>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <div className='intro'>
                    <span>Hello! Tanishq Nakra this side.</span>
                </div>
                <div className='line'/>
                    <div className='info'>
                        <div className='visual'>
                            <h3>I'm a Graphic designer.</h3>
                            <span>
                                Based in Faridabad, who loves<br/>
                                graphic design. Providing designs<br/>
                                for identity, print, web and<br />
                                visual related projects.
                            </span><br/><br/>
                            <h3>I'm a Video editor.</h3>
                            <span>
                                Passionate for motion graphics,<br/>
                                ui elements animation, showcasing<br/>
                                brands under an animated dimension.
                            </span>
                        </div>
                        <div className='developer'>
                            <h3>I'm a Developer.</h3>
                            <span>
                                Love to setup server systems<br/>
                                monitor self hosted stacks,<br/>
                                to code machine learning,<br/>
                                algorithms while building frontend<br/> 
                                UI and CMS systems.
                            </span>
                            <h3>Tools</h3>
                            <span>
                                Adobe After effects / Figma<br/>
                                Adobe photoshop / Adobe Illustrator<br/>
                                React.js / Python / Backend<br/>
                            </span>
                        </div>
                        <div className='CV'>
                            <h3>CV</h3>
                            <a href={require('../assets/Front/Resume.pdf')}>
                                <div className='cv_button'>
                                    <Progress />
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className='line' />
                    <div className='work'>
                        <div className='experience'>
                            <br/><h2><u>Work Experience</u></h2>

                            <h3>Wishnew Wellness</h3>
                            <p>Video Editor & Graphic Designer<br/>
                            October 2022 - May 2023
                            </p>

                            <h3>Nectar Infotel</h3>
                            <p>Video Editor<br/>
                            September 2021 - August 2022
                            </p>

                            <h3>Blackgoat</h3>
                            <p>Graphic Designer<br/>
                            May 2021 - September 2021
                            </p>

                            <h3>The Digital Fifth</h3>
                            <p>Graphic Designer<br/>
                            Feburary 2021 - April 2022
                            </p>
                        </div>

                        <div className='education'>
                            <br/><h2><u>Education</u></h2>

                            <h3>Symbiosis Institute of Computer <br/> Studies and Research, Pune</h3>
                            <p>Bachelor of computer applications<br/>
                            2020 - 2023
                            </p>

                            <h3>Delhi Public School, Faridabad</h3>
                            <p>Class - 12<br/>
                            2006 - 2020
                            </p>
                        </div>
                </div>
                    <br/><div className='line'/>
                    <div className='contact'>
                        <br/><h2>Get in touch</h2>
                        <a href='mailto: nakratanishq8@gmail.com'>nakratanishq8@gmail.com</a><br/><br/>

                        <Fab variant='circular' size = 'small' href='https://www.linkedin.com/in/tanishq-nakra-4092971a1/'> 
                        <LinkedInIcon/> 
                        </Fab>
                        <Fab size = 'small' href='https://github.com/Narco-AI'> 
                        <GitHubIcon />
                        </Fab>

                        <Fab size = 'small' href='https://medium.com/@tnakra'>
                            <BsMedium size={25}/>
                        </Fab>
                    </div>
                </div>
        </section>
        </>)
}