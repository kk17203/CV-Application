import { useState } from "react";
import "../styles/GeneralInfo.css";

function GeneralInfo() {
    const [submit, setSubmit] = useState(false);
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    return (
        <div>
            <h1 className="general-header">General Info</h1>
            {submit ? (
                <div>
                    <div className="general-info">
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
                </div>
            ) : (
                <div className="general-form">
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
            )}
        </div>
    );
}

export default GeneralInfo;
