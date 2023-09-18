import { useState } from "react";
import "../styles/GeneralInfo.css";

function GeneralInfo() {
    const [submit, setSubmit] = useState(false);
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    if (submit) {
        return (
            <div className="general-info">
                <h1>General Info</h1>
                <p>{fullName}</p>
                <p>{email}</p>
                <p>{phone}</p>
                <button
                    onClick={() => {
                        setSubmit(false);
                        setFullName(fullName);
                        setEmail(email);
                        setPhone(phone);
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
                    placeholder="Full Name"
                    onChange={(e) => setFullName(e.target.value)}
                    value={fullName}
                />
                <input
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <input
                    type="tel"
                    placeholder="Phone Number"
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default GeneralInfo;
