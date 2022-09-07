import React from "react"

function ExperiencePage(){
    return(
        <div className="ExpSection">
            <header>
                <h2>
                    Associate Consultant/ React.JS Developer
                </h2>
                <h3>Capgemini India Pvt. Limited 
                    <span>06/2019 - Present</span>
                </h3>
                <div className="proj-sec">
                    <div className="tasks">Achievements/Tasks :</div>
                    <ul className="tasks-list">
                        <li className="task-item">
                            Test-Driven Development (TDD) of Payment Gateway
                            Application for Discover Financial Services (DFS).
                        </li>
                        <li className="task-item">
                            Identified web-based user interactions and developed highly
                            responsive user based components with React and Context
                            API.
                        </li>
                        <li className="task-item">
                            Implemented micro frontend Architecture (Single-SPA)
                            which allowed multiple frameworks to be used in single page
                            app.
                        </li>
                        <li className="task-item">
                            Divided a single application into multiple modules/
                            repositories on GitHub which provided Framework Freedom
                            to the team. 
                        </li>
                        <li className="task-item">
                            Made each micro frontend individual with respect to store,
                            services, unit-testing, build and deployment.
                        </li>
                        <li className="task-item">
                            Migrated a whole application built in Angular1 to recent React 
                            with micro-frontend architecture with RESTful API.
                        </li>
                        <li className="task-item">
                            Reviewed application requirement and interface designs to
                            ensure compatibility with existing application. 
                        </li>
                        <li className="task-item">
                            Written unit testcases using Jest and React-testing-library
                            with code coverage 85%. 
                        </li>
                        <li className="task-item">
                             Worked on identifying ways to improve performance, efficiency and quality. 
                             Addressed day to day technical issues and fixed review comments from client
                        </li>
                    </ul>
                </div>
            </header>
        </div>
    )
}

export default ExperiencePage