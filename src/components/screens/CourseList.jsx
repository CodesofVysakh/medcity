import React, { useEffect, useRef, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretRight  } from "@fortawesome/free-solid-svg-icons";

import Image from '../../assets/images/university-logo.avif'

function CourseList() {
    const [ dropData, setDropData ] = useState();
    const [ isDropDown, setIsDropDown ] = useState(false);
    const [selectedFilters, setSelectedFilters] = useState({});

    const wrapperRef = useRef(null);
    const optionRef = useRef(null);

    const data = [
        {
            name: "Country",
            id: "country",
            options:[
                {
                    name: "India",
                    value: "India",
                },
                {
                    name: "USA",
                    value: "USA",
                },
                {
                    name: "United Kingdom",
                    value: "United Kingdom",
                },
                {
                    name: "France",
                    value: "France",
                },
            ]
        },
        {
            name: "Course",
            id: "course",
            options:[
                {
                    name: "Data Science",
                    value: "Data Science",
                },
                {
                    name: "Computer Science",
                    value: "Computer Science",
                },
                {
                    name: "MBA",
                    value: "MBA",
                },
                {
                    name: "Diploma",
                    value: "Diploma",
                },
            ]
        },
        {
            name: "Year",
            id: "year",
            options:[
                {
                    name: 0.5,
                    value: 0.5,
                },
                {
                    name: 1,
                    value: 1,
                },
                {
                    name: 1.5,
                    value: 1.5,
                },
                {
                    name: 2,
                    value: 2,
                }
            ]
        },
        {
            name: "In Take",
            id: "in_take",
            options:[
                {
                    name: "January",
                    value: "January",
                },
                {
                    name: "April",
                    value: "April",
                },
                {
                    name: "September",
                    value: "September",
                },
                {
                    name: "November",
                    value: "November",
                },
            ]
        },
        {
            name: "Requirement",
            id: "requirement",
            options:[
                {
                    name: "IELTS",
                    value: "IELTS",
                },
                {
                    name: "TOEFL",
                    value: "TOEFL",
                },
                {
                    name: "SAT",
                    value: "SAT",
                },
                {
                    name: "GRE",
                    value: "GRE",
                },
            ]
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

    const courseList = [
        {
            id: 1,
            name: "Data Science",
            university: "California University",
            country: "USA",
            country_name: "USA",
            online: 6,
            on_campus: 6,
            in_take: 'January',
            year: '1',
            requirement: "IELTS",
            course: "Data Science",
        },
        {
            id: 2,
            name: "Computer Science",
            university: "New York Tech Institute",
            country: "USA",
            country_name: "USA",
            online: 12,
            on_campus: 12,
            in_take: "September",
            year: '2',
            requirement: "GRE",
            course: "Computer Science"
        },
        {
            id: 3,
            name: "Master of Business Administration",
            university: "London University",
            country: "United Kingdom",
            country_name: "United Kingdom",
            online: 6,
            on_campus: 6,
            in_take: "November",
            year: '1',
            requirement: "IELTS",
            course: "MBA"
        },
        {
            id: 4,
            name: "Mechanical Diploma",
            university: "UK College",
            country: "United Kingdom",
            country_name: "United Kingdom",
            online: 3,
            on_campus: 3,
            in_take: "January",
            year: '0.5',
            requirement: "SAT",
            course: "Diploma"
        },
        {
            id: 5,
            name: "Computer Science",
            university: "IIT Kolkatha",
            country: "India",
            country_name: "India",
            online: 3,
            on_campus: 3,
            in_take: "September",
            year: '0.5',
            requirement: "TOEFL",
            course: "Computer Science"
        },
        {
            id: 6,
            name: "Data Science",
            university: "Berlin University",
            country: "France",
            country_name: "France",
            online: 2,
            on_campus: 10,
            in_take: "April",
            year: '1',
            requirement: "TOEFL",
            course: "Data Science"
        },
    ]
    
    const handleOptionClick = (e, category) => {
        const selectedValue = e.target.getAttribute("value");

        setSelectedFilters({ ...selectedFilters, [category]: selectedValue });
    }

    const handleOption = (value) => {
        setDropData(value);
        setIsDropDown(!isDropDown);
    }

    const filteredCourses = courseList.filter((course) => {
        for (const category in selectedFilters) {
            if (selectedFilters[category] && course[category] !== selectedFilters[category]) {
                return false;
            }
        }
        return true;
    });

    const handleRemoveFilter = (category) => {
        
        const updatedFilters = Object.fromEntries(
            Object.entries(selectedFilters).filter(([key, value]) => value !== category)
        );
        setSelectedFilters(updatedFilters);
    }
    // function useOutsideClick(ref) {
    //     useEffect(() => {
    //         function handleClickOutside(event) {
	// 			if (ref.current && !ref.current.contains(event.target)) {
    //                 if(ref === wrapperRef) {
    //                     setDropData();
    //                 }else if(ref == optionRef){
    //                     console.log(optionRef,"optionRef");
    //                 }
	// 			}
	// 		}
	// 		document.addEventListener("mousedown", handleClickOutside);
	// 		return () => {
	// 			document.removeEventListener("mousedown", handleClickOutside);
	// 		};
	// 	}, [ref]);
	// }
	// useOutsideClick(wrapperRef);
	// useOutsideClick(optionRef);

    return (
        <section id="course-content">
            <div className="top">
                <div className="select-filter">
                    <div className="filter">
                        {
                            data.map((item) => (
                                <div className="filter-field-container"
                                    onClick={() => handleOption(item)}
                                    ref={wrapperRef}
                                >
                                    <p>{item.name}</p>
                                    <FontAwesomeIcon icon={faCaretDown} />
                                    {
                                        isDropDown && item?.id == dropData?.id && 
                                        <div className="filter-list">
                                            {dropData?.options?.map((option) => (
                                                    <span 
                                                        value={option?.value}
                                                        onClick={(e) => handleOptionClick(e, item.id)}
                                                        ref={optionRef}
                                                    >
                                                        {option?.name}
                                                    </span>
            
                                                ))}
                                        </div>
                                    }
                                </div>
                            ))
                        }
                    </div>
                    <div className="filter-show">
                        {
                            selectedFilters.country && 
                            <p>
                                <span>{selectedFilters.country}</span>
                                <small
                                    onClick={() => handleRemoveFilter(selectedFilters.country)}
                                >X</small>
                            </p>
                        }
                        {
                            selectedFilters.course &&
                            <p>
                                <span>{selectedFilters.course}</span>
                                <small
                                    onClick={() => handleRemoveFilter(selectedFilters.course)}
                                >X</small>
                            </p>
                        }
                        {
                            selectedFilters.year &&
                            <p>
                                <span>{selectedFilters.year} Year</span>
                                <small
                                    onClick={() => handleRemoveFilter(selectedFilters.year)}
                                >X</small>
                            </p>
                        }
                        {
                            selectedFilters.in_take &&
                            <p>
                                <span>{selectedFilters.in_take}</span>
                                <small
                                    onClick={() => handleRemoveFilter(selectedFilters.in_take)}
                                >X</small>
                            </p>
                        }
                        {
                            selectedFilters.requirement &&
                            <p>
                                <span>{selectedFilters.requirement}</span>
                                <small
                                    onClick={() => handleRemoveFilter(selectedFilters.requirement)}
                                >X</small>
                            </p>
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
                        {   
                            filteredCourses.length > 0 ?
                            filteredCourses.map((course) => (
                                <div className="card">
                                    <div className="head-content">
                                        <div className="image-container">
                                            <img src={Image} alt="Image" />
                                        </div>
                                        <div className="content-container">
                                            <h6>{course.name}</h6>
                                            <h4>{course.university}</h4>
                                            <p>Country: <span>{course.country_name}</span></p>
                                        </div>
                                    </div>
                                    <div className="bottom-content">
                                        <div className="strip">
                                            Online: <span>{course.online} Months</span>
                                        </div>
                                        <div className="strip">
                                            On Campus: <span>{course.on_campus} Months</span>
                                        </div>
                                        <div className="strip">
                                            In Take: <span>{course.in_take.slice(0,3)}</span>
                                        </div>
                                        <div className="strip lightblue"
                                        >
                                            View Details
                                        </div>
                                    </div>
                                </div>
                            ))
                            :
                            <div className="card">
                                No Data
                            </div>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CourseList;
