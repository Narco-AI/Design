import 'react-photo-view/dist/react-photo-view.css';
import './work.css';
import { App } from './Assets';
import profile from '../assets/Front/profile.png';
import useLocalStorage from 'use-local-storage';
import ToggleColorMode from '../components/darkmode';
import Slide from 'react-reveal/Slide';


export function Profile() {
    return(
        <>
        <h2>Tanishq Nakra</h2>
        <h3>Design & Development</h3>
        </>
    )
}

export default function Work() {

    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');



    return(
        <>

        <section className='main' data-theme = {theme}>
            <div className='left' >
                <img src={profile}/>
                <br/><br/>
                <div className="line"></div>
                <Slide bottom>
                <Profile />
                </Slide>
                <div className="line"></div>
                <ul>
                    <li><ToggleColorMode /></li>
                    <li><a href='/'><u>WORK</u></a></li>
                    <li><a href='/about'>ABOUT</a></li>
                </ul>
            </div>
            <div className='mid'>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <App />
            </div>
        </section>
        </>
    )
}