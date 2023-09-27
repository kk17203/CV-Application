import { useState } from "react";
import "../styles/GeneralInfo.css";

function GeneralInfo() {
    const [submit, setSubmit] = useState(false);
    const [fullName, setFullName] = useState("Kevin Kelly");
    const [email, setEmail] = useState("kk17203@gmail.com");
    const [phone, setPhone] = useState("417.399.7865");

    return (
        <>
            {/* <h1 className="general-header">General Info</h1> */}
            {submit ? (
                <div className="general-info">
                    <h1 className="name">{fullName}</h1>
                    <p className="email-info">
                        <span className="email-label">Email: </span>
                        <span className="email-content">{email}</span>
                    </p>
                    <p className="phone">
                        <span className="phone-label">Phone: </span>
                        <span className="phone-content">{phone}</span>
                    </p>
                    <button
                        className="edit-button"
                        onClick={() => {
                            setSubmit(false);
                            setFullName(fullName);
                            setEmail(email);
                            setPhone(phone);
                        }}
                    >
                        Edit <br /> General Info
                    </button>
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
        </>
    );
}

export default GeneralInfo;
