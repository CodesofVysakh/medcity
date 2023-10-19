import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretRight  } from "@fortawesome/free-solid-svg-icons";

import Image from '../../assets/images/university-logo.avif'

function CourseList() {

    const data = [
        {
            name: "Country",
            id: "country",
            options: ["India", "USA", "Russia", "Singapore"]
        },
        {
            name: "Course",
            id: "course",
            options: ["Data Science", "Computer Science", "MBA", "Management"]
        },
        {
            name: "Year",
            id: "year",
            options: ["2018", "2019", "2020", "2021"]
        },
        {
            name: "In Take",
            id: "intake",
            options: ["January", "April", "September", "November"]
        },
        {
            name: "Requirement",
            id: "requirement",
            options: ["IELTS", "TOFL", "SAT", "GRE"]
        },
    ]

    const programs = [
        {
            name: "Diploma",
            id: 1,
        },
        {
            name: "Bachelors",
            id: 2,
        },
        {
            name: "Masters",
            id: 3,
        },
        {
            name: "MBA",
            id: 4,
        },
        {
            name: "High School",
            id: 5,
        },
    ]
    return (
        <section id="course-content">
            <div className="top">
                <div className="select-filter">
                    <div className="filter">
                        {
                            data.map((item) => (
                                <div className="filter-field-container">
                                    <select name={item.name} id={item.id}>
                                        {item.options.map((option) => (
                                            <option value={option}>
                                                {option}
                                            </option>
    
                                        ))}
                                    </select>
                                    <FontAwesomeIcon icon={faCaretDown} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <hr />
            <div className="bottom">
                <div className="left">
                    <h3>Programmes</h3>
                    {
                        programs.map((program) => (
                            <div className="side-dropdown">
                                <span>{program.name}</span>
                                <FontAwesomeIcon icon={faCaretRight} />
                            </div>
                        ))
                    }
                </div>
                <div className="right">
                    <h3>Select Course</h3>
                    <div className="selected-countries">
                        <p>USA</p>
                        <p>UK</p>
                        <p>France</p>
                    </div>
                    <div className="card-gallery">
                        <div className="card">
                            <div className="head-content">
                                <div className="image-container">
                                    <img src={Image} alt="Image" />
                                </div>
                                <div className="content-container">
                                    <h6>Course Name</h6>
                                    <h4>University Name</h4>
                                    <p>Country: <span>USA</span></p>
                                </div>
                            </div>
                            <div className="bottom-content">
                                <div className="strip">
                                    Online: <span>6 Months</span>
                                </div>
                                <div className="strip">
                                    On Campus: <span>12 Months</span>
                                </div>
                                <div className="strip">
                                    In Take: <span>Feb, Jul</span>
                                </div>
                                <div className="strip lightblue">
                                    View Details
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="head-content">
                                <div className="image-container">
                                    <img src={Image} alt="Image" />
                                </div>
                                <div className="content-container">
                                    <h6>Course Name</h6>
                                    <h4>University Name</h4>
                                    <p>Country: <span>USA</span></p>
                                </div>
                            </div>
                            <div className="bottom-content">
                                <div className="strip">
                                    Online: <span>6 Months</span>
                                </div>
                                <div className="strip">
                                    On Campus: <span>12 Months</span>
                                </div>
                                <div className="strip">
                                    In Take: <span>Feb, Jul</span>
                                </div>
                                <div className="strip lightblue">
                                    View Details
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="head-content">
                                <div className="image-container">
                                    <img src={Image} alt="Image" />
                                </div>
                                <div className="content-container">
                                    <h6>Course Name</h6>
                                    <h4>University Name</h4>
                                    <p>Country: <span>USA</span></p>
                                </div>
                            </div>
                            <div className="bottom-content">
                                <div className="strip">
                                    Online: <span>6 Months</span>
                                </div>
                                <div className="strip">
                                    On Campus: <span>12 Months</span>
                                </div>
                                <div className="strip">
                                    In Take: <span>Feb, Jul</span>
                                </div>
                                <div className="strip lightblue">
                                    View Details
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="head-content">
                                <div className="image-container">
                                    <img src={Image} alt="Image" />
                                </div>
                                <div className="content-container">
                                    <h6>Course Name</h6>
                                    <h4>University Name</h4>
                                    <p>Country: <span>USA</span></p>
                                </div>
                            </div>
                            <div className="bottom-content">
                                <div className="strip">
                                    Online: <span>6 Months</span>
                                </div>
                                <div className="strip">
                                    On Campus: <span>12 Months</span>
                                </div>
                                <div className="strip">
                                    In Take: <span>Feb, Jul</span>
                                </div>
                                <div className="strip lightblue">
                                    View Details
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="head-content">
                                <div className="image-container">
                                    <img src={Image} alt="Image" />
                                </div>
                                <div className="content-container">
                                    <h6>Course Name</h6>
                                    <h4>University Name</h4>
                                    <p>Country: <span>USA</span></p>
                                </div>
                            </div>
                            <div className="bottom-content">
                                <div className="strip">
                                    Online: <span>6 Months</span>
                                </div>
                                <div className="strip">
                                    On Campus: <span>12 Months</span>
                                </div>
                                <div className="strip">
                                    In Take: <span>Feb, Jul</span>
                                </div>
                                <div className="strip lightblue">
                                    View Details
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="head-content">
                                <div className="image-container">
                                    <img src={Image} alt="Image" />
                                </div>
                                <div className="content-container">
                                    <h6>Course Name</h6>
                                    <h4>University Name</h4>
                                    <p>Country: <span>USA</span></p>
                                </div>
                            </div>
                            <div className="bottom-content">
                                <div className="strip">
                                    Online: <span>6 Months</span>
                                </div>
                                <div className="strip">
                                    On Campus: <span>12 Months</span>
                                </div>
                                <div className="strip">
                                    In Take: <span>Feb, Jul</span>
                                </div>
                                <div className="strip lightblue">
                                    View Details
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="head-content">
                                <div className="image-container">
                                    <img src={Image} alt="Image" />
                                </div>
                                <div className="content-container">
                                    <h6>Course Name</h6>
                                    <h4>University Name</h4>
                                    <p>Country: <span>USA</span></p>
                                </div>
                            </div>
                            <div className="bottom-content">
                                <div className="strip">
                                    Online: <span>6 Months</span>
                                </div>
                                <div className="strip">
                                    On Campus: <span>12 Months</span>
                                </div>
                                <div className="strip">
                                    In Take: <span>Feb, Jul</span>
                                </div>
                                <div className="strip lightblue">
                                    View Details
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CourseList;
