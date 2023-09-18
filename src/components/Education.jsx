import { useState } from "react";
import "../styles/Education.css";

function Education() {
    const [submit, setSubmit] = useState(false);
    const [schoolName, setSchoolName] = useState("");
    const [studyField, setStudyField] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    if (submit) {
        return (
            <div className="education-info">
                <h1 className="education-header">Education Experience</h1>
                <p>{schoolName}</p>
                <p>{studyField}</p>
                <p>
                    {startDate} - {endDate}
                </p>
                <button
                    onClick={() => {
                        setSubmit(false);
                        setSchoolName(schoolName);
                        setStudyField(studyField);
                        setStartDate(startDate);
                        setEndDate(endDate);
                    }}
                >
                    Edit
                </button>
            </div>
        );
    }
    return (
        <div className="education-form">
            <h1 className="education-header">Education Experience</h1>

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    setSubmit(true);
                }}
            >
                <input
                    type="text"
                    placeholder="School Name"
                    onChange={(e) => setSchoolName(e.target.value)}
                    value={schoolName}
                />
                <input
                    type="text"
                    placeholder="Field of Study"
                    onChange={(e) => setStudyField(e.target.value)}
                    value={studyField}
                />
                <label>Start Date: </label>
                <input
                    type="date"
                    placeholder="Start Date"
                    onChange={(e) => setStartDate(e.target.value)}
                    value={startDate}
                />
                <label>End Date: </label>
                <input
                    type="date"
                    placeholder="End Date"
                    onChange={(e) => setEndDate(e.target.value)}
                    value={endDate}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Education;
