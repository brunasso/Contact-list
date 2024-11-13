import React, { useState, useContext } from "react";
import {Context} from '../store/appContext'
import { Link, useNavigate } from "react-router-dom";


export const CreateContact = () => {

    const [newContact, setNewContact] = useState({});
    const navigate = useNavigate();
    const {actions} = useContext(Context)
    return(
        <>
        <div class="mx-auto" style={{width: "80%"}}>
            <div className="d-flex justify-content-center">
                <h1>Add a new contact</h1>
            </div>
            <div className="mb-3">
                <label for="exampleInputEmail" className="form-label fw-bold">Full Name</label>
                <input onChange={(evento) => setNewContact({...newContact, name: evento.target.value})} value={newContact.name || ''} type="text" className="form-control" placeholder="Full Name"/>
            </div>
            <div className="mb-3">
                <label for="exampleInputEmail" className="form-label fw-bold">Email</label>
                <input onChange={(evento) => setNewContact({...newContact, email: evento.target.value})} value={newContact.email || ''} type="email" className="form-control" placeholder="Email"/>
            </div>
            <div className="mb-3">
                <label for="exampleInputEmail" className="form-label fw-bold">Enter Phone</label>
                <input onChange={(evento) => setNewContact({...newContact, phone: evento.target.value})} value={newContact.phone || ''} type="phone" className="form-control" placeholder="Enter Phone"/>
            </div>
            <div className="mb-3">
                <label for="exampleInputEmail" className="form-label fw-bold">Adress</label>
                <input onChange={(evento) => setNewContact({...newContact, address: evento.target.value})} value={newContact.address || ''} type="text" className="form-control" placeholder="Address"/>
            </div> 

           <div className="d-flex flex-column">
            <button
                    onClick={async () => {
                        await actions.createContact(newContact);
                        navigate("/");
                    }}
                    type="submit"
                    className="btn btn-primary"
                >
                    Guardar Contacto
                </button>
                <Link to='/'>
                        or get back to contacts
                </Link>
           </div>
        </div>
        </>
    )
}