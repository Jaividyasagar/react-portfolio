import React, { useState } from "react";
import html from '../../assets/img/skills/html.png';
import css from '../../assets/img/skills/css.png';
import bootstrap from '../../assets/img/skills/bootstrap.png';
import cpp from '../../assets/img/skills/cpp.png';
import django from '../../assets/img/skills/django.png';
import express from '../../assets/img/skills/express.png';
import git from '../../assets/img/skills/git.png';
import java from '../../assets/img/skills/java.png';
import jquery from '../../assets/img/skills/jquery.png';
import js from '../../assets/img/skills/js.png';
import ml from '../../assets/img/skills/ml.png';
import mongodb from '../../assets/img/skills/mongodb.png';
import mysql from '../../assets/img/skills/mysql.png';
import node from '../../assets/img/skills/node.png';
import postman from '../../assets/img/skills/postman.png';
import python from '../../assets/img/skills/python.png';
import pythonanywhere from '../../assets/img/skills/pythonanywhere.png';
import react from '../../assets/img/skills/react.png';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import DataObjectIcon from '@mui/icons-material/DataObject';
import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import SkillDetail from "./SkillDetail";
import { row1, row2, row3, tech } from "../../assets/data/data";
import { EggTwoTone } from "@mui/icons-material";
import SkillIcons from "./SkillIcons";


const Skills = () => {

    return <React.Fragment>
        <section className="skills section" id="skills">
            <div className="reveal">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My Technical Level</span>

            <div className="skills__container container grid">
                {/* <Accordion> */}
                <div className="skills__content">
                    <Accordion sx={{backgroundColor: "hsl(var(--hue-color), 60%, 99%)"}}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1-header">
        
                                <div className="skills__header">
                                    {/* <!-- <i className="uil uil-brackets-curly skills__icon"></i> --> */}

                                        <i className="uil uil-arrow skills__icon"><CodeIcon /></i>
                                        <h1 className="skills__title">Frontend Developer</h1>
                                        {/* <span className="skills__subtitle">More than a year</span> */}

                                    {/* <i className="uil uil-angle-down skills__arrow"><ExpandMoreIcon /></i> */}
                                </div>
                            
                        </AccordionSummary>
                        <AccordionDetails>
                        
                            <div className="skills__list grid">
                                {tech.map((t, idx) => {
                                    if (t.flag === true && t.end === "frontend") {
                                        return <SkillDetail key={idx} title={t.name} number={t.percentage}/>
                                    }
                                })}
                            </div>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className="skills__content">
                    <Accordion sx={{backgroundColor: "hsl(var(--hue-color), 60%, 99%)"}}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1-header">
                            <div className="skills__header">
                                <i className="uil uil-server-network skills__icon"><StorageIcon /></i>

                                <div>
                                    <h1 className="skills__title">Backend Developer</h1>
                                    {/* <span className="skills__subtitle">More than a year</span> */}
                                </div>

                                {/* <i className="uil uil-angle-down skills__arrow"><ExpandMoreIcon /></i> */}
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="skills__list grid">
                            {tech.map((t, idx) => {
                                if (t.flag && t.end === "backend") {
                                    return <SkillDetail key={idx} title={t.name} number={t.percentage}/>
                                }
                            })}
                            </div>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className="skills__content">
                    <Accordion sx={{backgroundColor: "hsl(var(--hue-color), 60%, 99%)"}}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                            <div className="skills__header">
                                <i className="uil uil-brackets-curly skills__icon"><DataObjectIcon /></i>

                                <div>
                                    <h1 className="skills__title">Problem Solver</h1>
                                    {/* <span className="skills__subtitle">More than a year</span> */}
                                </div>

                                {/* <i className="uil uil-angle-down skills__arrow"><ExpandMoreIcon /></i> */}
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="skills__list grid">
                             {tech.map((t, idx) => {
                                if (t.end === "problemsolver") {
                                    return <SkillDetail key={idx} title={t.name} number={t.percentage}/>
                                }
                             })}
                            </div>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>


            </div>
            {/* </div> */}

            <div className="skills-img-container container grid reveal">
                <table>
                    <tbody>
                        <tr>{row1.map((it, idx) => <SkillIcons key={idx} img={it.img} />)}</tr>
                        <tr>{row2.map((it, idx) => <SkillIcons key={idx} img={it.img} />)}</tr>
                        <tr>{row3.map((it, idx) => <SkillIcons key={idx} img={it.img} />)}</tr>
                        {/* <tr>
                            <th><img className="skill-icon" src={html} alt="" width="80"/></th>
                            <th><img className="skill-icon" src={css} alt="" width="80"/></th>
                            <th><img className="skill-icon" src={js} alt="" width="80"/></th>
                            <th><img className="skill-icon" src={python} alt="" width="80"/></th>
                            <th><img className="skill-icon" src={cpp} alt="" width="80"/></th>
                            <th><img className="skill-icon" src={java} alt="" width="80"/></th>
                        </tr>
                        <tr>
                            
                            <th><img className="skill-icon" src={react} alt="" width="80"/></th>
                            <th><img className="skill-icon" src={node} alt="" width="80"/></th>
                            <th><img className="skill-icon" src={express} alt="" width="80"/></th>
                            <th><img className="skill-icon" src={django} alt="" width="80"/></th>
                            <th><img className="skill-icon" src={bootstrap} alt="" width="80"/></th>
                            <th><img className="skill-icon" src={jquery} alt="" width="80"/></th>
                        </tr>
                        <tr>
                            <th><img className="skill-icon" src={mysql} alt="" width="80" /></th>
                            <th><img className="skill-icon" src={mongodb} alt="" width="80" /></th>
                            <th><img className="skill-icon" src={git} alt="" width="80"/></th>
                            <th><img className="skill-icon" src={postman} alt="" width="80"/></th>
                            <th><img className="skill-icon" src={pythonanywhere} alt="" width="80"/></th>
                            <th><img className="skill-icon" src={ml} alt="" width="80"/></th>
                        </tr> */}
                    </tbody>
                </table>

                
            </div>
            {/* </div> */}
        </section>
    </React.Fragment>
}

export default Skills;