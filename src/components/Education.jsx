import { useState } from "react";
import "../styles/Education.css";
import { v4 as uuid } from "uuid";

const educationData = [];

export default function Education() {
    const [schoolName, setSchoolName] = useState("");
    const [studyField, setStudyField] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [educations, setEducations] = useState(educationData);
    const [isFormOpen, setIsFormOpen] = useState(false);

    const handleInputChange = (e, field, id) => {
        const updatedEducations = educations.map((education) =>
            education.id === id
                ? { ...education, [field]: e.target.value }
                : education
        );
        setEducations(updatedEducations);
    };

    // THIS IS THE SUGGESTED WAY TO MAKE SURE ERRORS DONT OCCUR. USED DIFFERENT WAY WHILE LEARNING TO BETTER UNDERSTAND
    // const handleEdit = (id) => {
    //     setExperiences((prevExperiences) =>
    //         prevExperiences.map((experience) =>
    //             experience.id === id
    //                 ? { ...experience, isEditing: true }
    //                 : experience
    //         )
    //     );
    //     // setIsFormOpen(true); // Open the form when editing
    // };

    const handleEdit = (id) => {
        const updatedEducations = educations.map((education) =>
            education.id === id ? { ...education, isEditing: true } : education
        );
        setEducations(updatedEducations);
    };

    // THIS IS THE SUGGESTED WAY TO MAKE SURE ERRORS DONT OCCUR. USED DIFFERENT WAY WHILE LEARNING TO BETTER UNDERSTAND
    // const handleSave = (id) => {
    //     setExperiences((prevExperiences) =>
    //         prevExperiences.map((experience) =>
    //             experience.id === id
    //                 ? { ...experience, isEditing: false }
    //                 : experience
    //         )
    //     );
    // };

    const handleSave = (id) => {
        const updatedEducations = educations.map((education) =>
            education.id === id ? { ...education, isEditing: false } : education
        );
        setEducations(updatedEducations);
    };

    const handleDelete = (id) => {
        const updatedEducations = educations.filter(
            (education) => education.id !== id
        );
        setEducations(updatedEducations);
    };

    const addEducation = () => {
        const newEducation = {
            id: uuid(),
            schoolName,
            studyField,
            startDate,
            endDate,
        };
        setEducations([...educations, newEducation]);
        setSchoolName("");
        setStudyField("");
        setStartDate("");
        setEndDate("");
        setIsFormOpen(false); // Close the form after adding experience
    };

    return (
        <div>
            <h1 className="education-header">Education</h1>
            <button onClick={() => setIsFormOpen(!isFormOpen)}>
                Add Education
            </button>
            {isFormOpen && (
                <div className="education-form">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            addEducation();
                        }}
                    >
                        <input
                            type="text"
                            placeholder="School Name"
                            value={schoolName}
                            onChange={(e) => setSchoolName(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Field of Study"
                            value={studyField}
                            onChange={(e) => setStudyField(e.target.value)}
                        />
                        <label>Start Date: </label>
                        <input
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                        />
                        <label>End Date: </label>
                        <input
                            type="date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                        />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            )}
            <div>
                {educations.map((education) => (
                    <div key={education.id}>
                        {education.isEditing ? (
                            <div className="education-form">
                                <input
                                    type="text"
                                    placeholder="School Name"
                                    value={education.schoolName}
                                    onChange={(e) =>
                                        handleInputChange(
                                            e,
                                            "schoolName",
                                            education.id
                                        )
                                    }
                                />
                                <input
                                    type="text"
                                    placeholder="Field of Study"
                                    value={education.studyField}
                                    onChange={(e) =>
                                        handleInputChange(
                                            e,
                                            "studyField",
                                            education.id
                                        )
                                    }
                                />
                                <label>Start Date: </label>
                                <input
                                    type="date"
                                    value={education.startDate}
                                    onChange={(e) =>
                                        handleInputChange(
                                            e,
                                            "startDate",
                                            education.id
                                        )
                                    }
                                />
                                <label>End Date: </label>
                                <input
                                    type="date"
                                    value={education.endDate}
                                    onChange={(e) =>
                                        handleInputChange(
                                            e,
                                            "endDate",
                                            education.id
                                        )
                                    }
                                />
                                <button
                                    onClick={() => handleSave(education.id)}
                                >
                                    Save
                                </button>
                            </div>
                        ) : (
                            <div className="education-info">
                                <p>{education.schoolName}</p>
                                <p>{education.studyField}</p>
                                <p>
                                    {education.startDate} - {education.endDate}
                                </p>
                                <button
                                    onClick={() => handleEdit(education.id)}
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(education.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
