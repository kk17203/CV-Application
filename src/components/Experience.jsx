import { useState } from "react";
import "../styles/Experience.css";
import { v4 as uuid } from "uuid";

const experiencesData = [];

export default function Experience() {
    const [companyName, setCompanyName] = useState("");
    const [title, setTitle] = useState("");
    const [responsibilities, setResponsibilities] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [experiences, setExperiences] = useState(experiencesData);
    const [isFormOpen, setIsFormOpen] = useState(false);

    const handleInputChange = (e, field, id) => {
        const updatedExperiences = experiences.map((experience) =>
            experience.id === id
                ? { ...experience, [field]: e.target.value }
                : experience
        );
        setExperiences(updatedExperiences);
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
        const updatedExperiences = experiences.map((experience) =>
            experience.id === id
                ? { ...experience, isEditing: true }
                : experience
        );
        setExperiences(updatedExperiences);
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
        const updatedExperiences = experiences.map((experience) =>
            experience.id === id
                ? { ...experience, isEditing: false }
                : experience
        );
        setExperiences(updatedExperiences);
    };

    const handleDelete = (id) => {
        const updatedExperiences = experiences.filter(
            (experience) => experience.id !== id
        );
        setExperiences(updatedExperiences);
    };

    const addExperience = () => {
        const newExperience = {
            id: uuid(),
            companyName,
            title,
            responsibilities,
            startDate,
            endDate,
        };
        setExperiences([...experiences, newExperience]);
        setCompanyName("");
        setTitle("");
        setResponsibilities("");
        setStartDate("");
        setEndDate("");
        setIsFormOpen(false); // Close the form after adding experience
    };

    return (
        <div>
            <h1 className="experience-header">Experience</h1>
            <button onClick={() => setIsFormOpen(!isFormOpen)}>
                Add Experience
            </button>
            {isFormOpen && (
                <div className="experience-form">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            addExperience();
                        }}
                    >
                        <input
                            type="text"
                            placeholder="Company Name"
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <textarea
                            placeholder="Responsibilities"
                            value={responsibilities}
                            onChange={(e) =>
                                setResponsibilities(e.target.value)
                            }
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
                {experiences.map((experience) => (
                    <div key={experience.id}>
                        {experience.isEditing ? (
                            <div className="experience-form">
                                <input
                                    type="text"
                                    placeholder="Company Name"
                                    value={experience.companyName}
                                    onChange={(e) =>
                                        handleInputChange(
                                            e,
                                            "companyName",
                                            experience.id
                                        )
                                    }
                                />
                                <input
                                    type="text"
                                    placeholder="Title"
                                    value={experience.title}
                                    onChange={(e) =>
                                        handleInputChange(
                                            e,
                                            "title",
                                            experience.id
                                        )
                                    }
                                />
                                <textarea
                                    placeholder="Responsibilities"
                                    value={experience.responsibilities}
                                    onChange={(e) =>
                                        handleInputChange(
                                            e,
                                            "responsibilities",
                                            experience.id
                                        )
                                    }
                                />
                                <label>Start Date: </label>
                                <input
                                    type="date"
                                    value={experience.startDate}
                                    onChange={(e) =>
                                        handleInputChange(
                                            e,
                                            "startDate",
                                            experience.id
                                        )
                                    }
                                />
                                <label>End Date: </label>
                                <input
                                    type="date"
                                    value={experience.endDate}
                                    onChange={(e) =>
                                        handleInputChange(
                                            e,
                                            "endDate",
                                            experience.id
                                        )
                                    }
                                />
                                <button
                                    onClick={() => handleSave(experience.id)}
                                >
                                    Save
                                </button>
                            </div>
                        ) : (
                            <div className="experience-info">
                                <h3>{experience.companyName}</h3>
                                <p>{experience.title}</p>
                                <p>{experience.responsibilities}</p>
                                <p>
                                    {experience.startDate} -{" "}
                                    {experience.endDate}
                                </p>
                                <button
                                    onClick={() => handleEdit(experience.id)}
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(experience.id)}
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
