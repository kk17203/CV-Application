import { useState } from "react";
import "../styles/Education.css";

function Education() {
    const [submit, setSubmit] = useState(false);
    const [schoolName, setSchoolName] = useState("");
    const [studyField, setStudyField] = useState("");
    const [studyDateBegin, setStudyDateBegin] = useState("");
    const [studyDateEnd, setStudyDateEnd] = useState("");

    if (submit) {
        return (
            <div className="education">
                <h1 className="education-header">Education Experience</h1>
                <p>{schoolName}</p>
                <p>{studyField}</p>
                <p>
                    {studyDateBegin} - {studyDateEnd}
                </p>
                <button
                    onClick={() => {
                        setSubmit(false);
                        setSchoolName(schoolName);
                        setStudyField(studyField);
                        setStudyDateBegin(studyDateBegin);
                        setStudyDateEnd(studyDateEnd);
                    }}
                >
                    Edit
                </button>
            </div>
        );
    }
    return (
        <div className="general-info">
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
                    onChange={(e) => setStudyDateBegin(e.target.value)}
                    value={studyDateBegin}
                />
                <label>End Date: </label>
                <input
                    type="date"
                    placeholder="End Date"
                    onChange={(e) => setStudyDateEnd(e.target.value)}
                    value={studyDateEnd}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Education;
