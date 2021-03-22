import React from 'react';
import s from './Nav.module.scss';
import {Link} from 'react-scroll';

export function Nav() {
    return (
        <div className={s.nav}>
            <Link to="main"
                  activeClass={s.active}
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}>Main</Link>
            <Link to="skills"
                  activeClass={s.active}
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}>Skills</Link>
            <Link to="projects"
                  activeClass={s.active}
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}>Projects</Link>
            <Link to="contacts"
                  activeClass={s.active}
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}>Contacts</Link>
        </div>
    );
}

