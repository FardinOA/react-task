import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllContact, getUsContact } from "../redux/features/contactSlice";
import { useNavigate } from "react-router-dom";

const Problem2 = ({}) => {
    const [modalA, setModalA] = useState(false);
    const [modalB, setModalB] = useState(false);

    const [cForA, setCForA] = useState(false);
    const [cForB, setCForB] = useState(false);

    const [cData, setCData] = useState({});

    const [evenChecked, setEvenChecked] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { allContacts, usContacts } = useSelector((state) => state.contacts);
    useEffect(() => {
        dispatch(getAllContact());
        dispatch(getUsContact());
    }, []);

    useEffect(() => {
        if (modalA) {
            navigate("/problem-2/all-contact", { replace: true });
        } else {
            navigate("/problem-2", { replace: true });
        }
    }, [modalA]);

    useEffect(() => {
        if (modalB) {
            navigate("/problem-2/us-contact", { replace: true });
        } else {
            navigate("/problem-2", { replace: true });
        }
    }, [modalB]);

    return (
        <div className={`container position-relative  `}>
            <div className="row justify-content-center mt-5">
                <h4 className="text-center text-uppercase mb-5">Problem-2</h4>
                <div className="d-flex justify-content-center gap-3">
                    <button
                        className="btn btn-lg btn-outline-primary"
                        type="button"
                        onClick={() => setModalA(!modalA)}
                    >
                        All Contacts
                    </button>
                    <button
                        className="btn btn-lg btn-outline-warning"
                        type="button"
                        onClick={() => setModalB(!modalB)}
                    >
                        US Contacts
                    </button>
                </div>
                {/* modals */}

                {cForA && (
                    <div
                        style={{ zIndex: 20 }}
                        className=" position-absolute d-flex justify-content-center  bg-dark text-white "
                    >
                        <div>
                            <div>
                                <h1>{cData.phone}</h1>
                                <h2>{cData.country.name}</h2>
                            </div>
                            <div>
                                <button
                                    onClick={() => setCForA(false)}
                                    className="  "
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                )}
                {modalA && (
                    <div
                        style={{ zIndex: 10 }}
                        className={`${
                            modalA || modalB ? " bg-light " : ""
                        } position-absolute fixed-top`}
                    >
                        <div className=" d-flex justify-content-between ">
                            <button
                                style={{
                                    border: "none",
                                    backgroundColor: "#ff7f50",
                                    color: "#fff",
                                }}
                                onClick={() => {
                                    setModalA(!modalA);
                                    setModalB(true);
                                }}
                            >
                                US Contacts
                            </button>
                            <button
                                style={{
                                    border: "none",
                                    backgroundColor: "#f30606",
                                    color: "#fff",
                                }}
                                onClick={() => setModalA(!modalA)}
                            >
                                Close
                            </button>
                        </div>
                        <div>
                            {allContacts
                                .filter((e) =>
                                    evenChecked
                                        ? e.id % 2 == 0
                                        : e.id % 2 || e.id % 2 == 0
                                )
                                .map((ele) => (
                                    <p
                                        onClick={() => {
                                            setCForA(true);
                                            setCData(ele);
                                        }}
                                        style={{
                                            cursor: "pointer",
                                        }}
                                        className=" my-4 border p-2   "
                                        key={ele.id}
                                    >
                                        {ele.phone}
                                    </p>
                                ))}
                        </div>
                        <div>
                            <label htmlFor="">Filter by even number</label>
                            <input
                                value={evenChecked}
                                onChange={() => setEvenChecked(!evenChecked)}
                                type="checkbox"
                            />
                        </div>
                    </div>
                )}

                {modalB && (
                    <div
                        style={{ zIndex: 10 }}
                        className={`${
                            modalA || modalB ? " bg-light " : ""
                        } position-absolute fixed-top`}
                    >
                        <div className=" position-relative  ">
                            <div className=" d-flex justify-content-between ">
                                <button
                                    style={{
                                        border: "none",
                                        backgroundColor: "#46139f",
                                        color: "#fff",
                                    }}
                                    onClick={() => {
                                        setModalB(!modalB);
                                        setModalA(true);
                                    }}
                                >
                                    ALL Contacts
                                </button>

                                <button
                                    style={{
                                        border: "none",
                                        backgroundColor: "#f30606",
                                        color: "#fff",
                                    }}
                                    onClick={() => setModalB(!modalB)}
                                >
                                    Close
                                </button>
                            </div>
                            <div>
                                {usContacts
                                    .filter((e) =>
                                        evenChecked
                                            ? e.id % 2 == 0
                                            : e.id % 2 || e.id % 2 == 0
                                    )
                                    .map((ele) => (
                                        <p
                                            onClick={() => {
                                                setCForB(true);
                                                setCData(ele);
                                            }}
                                            style={{
                                                cursor: "pointer",
                                            }}
                                            className=" my-4 border p-2   "
                                            key={ele.id}
                                        >
                                            {ele.phone}
                                        </p>
                                    ))}
                            </div>
                            <div>
                                <label htmlFor="">Filter by even number</label>
                                <input
                                    value={evenChecked}
                                    onChange={() =>
                                        setEvenChecked(!evenChecked)
                                    }
                                    type="checkbox"
                                />
                            </div>
                        </div>
                    </div>
                )}
                {cForB && (
                    <div
                        style={{ zIndex: 20 }}
                        className=" position-absolute d-flex justify-content-center  bg-dark text-white "
                    >
                        <div>
                            <div>
                                <h1>{cData.phone}</h1>
                                <h2>{cData.country.name}</h2>
                            </div>
                            <div>
                                <button
                                    onClick={() => setCForB(false)}
                                    className="  "
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Problem2;
