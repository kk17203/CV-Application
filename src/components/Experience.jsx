import { useState } from "react";
import "../styles/Experience.css";

function Experience() {
    const [submit, setSubmit] = useState(false);
    const [companyName, setCompanyName] = useState("");
    const [title, setTitle] = useState("");
    const [responsibilities, setResponsibilities] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    if (submit) {
        return (
            <div className="experience-info">
                <h1 className="experience-header">Practical Experience</h1>
                <p>{companyName}</p>
                <p>{title}</p>
                <p>{responsibilities}</p>
                <p>
                    {startDate} - {endDate}
                </p>
                <button
                    onClick={() => {
                        setSubmit(false);
                    }}
                >
                    Edit
                </button>
            </div>
        );
    }
    return (
        <div className="experience-form">
            <h1 className="experience-header">Practical Experience</h1>

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    setSubmit(true);
                }}
            >
                <input
                    type="text"
                    placeholder="Company Name"
                    onChange={(e) => setCompanyName(e.target.value)}
                    value={companyName}
                />
                <input
                    type="text"
                    placeholder="Title"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
                <textarea
                    placeholder="Responsibilities"
                    onChange={(e) => setResponsibilities(e.target.value)}
                    value={responsibilities}
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

export default Experience;
