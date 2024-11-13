import React, {useContext } from "react";
import {Context} from '../store/appContext.js'
import { useNavigate, Link } from "react-router-dom";


export const ContactCard = (props) =>{

    const navigate = useNavigate();
    const {actions} = useContext(Context)
    
    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="card mb-2" style={{ width: "80%" }}>
                    <div className="row g-0">
                        <div className="col-md-2 ml-2 d-flex align-items-center">
                            <img src={`https://i.pravatar.cc/150?u=${props.name}`} className="img-fluid rounded-circle" alt="Foto" />
                        </div>
                        <div className="col-md-10">
                            <div className="d-flex justify-content-between align-items-start">
                                <div className="card-body">
                                    <div className="d-flex flex-row">
                                        <h5>
                                            {props.name}
                                        </h5>
                                    </div>
                                    <div className="d-flex flex-row">
                                        <i class="fa-solid fa-location-dot"></i>
                                        <h6 className="ps-2">
                                            {props.address}
                                        </h6>
                                    </div>
                                    <div className="d-flex flex-row">
                                        <i class="fa-solid fa-phone"></i>
                                        <h6 className="ps-2">
                                            {props.phone}
                                        </h6>
                                    </div>
                                    <div className="d-flex flex-row">
                                        <i class="fa-solid fa-envelope"></i>
                                        <h6 className="ps-2">
                                            {props.email}
                                        </h6>
                                    </div>
                                </div>
                                <div>
                                    <Link className="btn" to={`/edit-contact/${props.id}`}>
                                        <i className="fa-solid fa-pen"></i>
                                    </Link>
                                    <button
                                        className="btn"
                                        onClick={async () => {
                                            await actions.deleteContact(props.id);
                                            navigate("/");
                                        }}
                                    >
                                        <i className="fa-solid fa-trash"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}