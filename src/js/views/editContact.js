import React, { useEffect, useState, useContext } from "react";
import {Context} from '../store/appContext'
import { Link, useNavigate, useParams } from "react-router-dom";


export const EditContact = () => {

    const navigate = useNavigate();
    const {actions, store} = useContext(Context)
    const { editingId } = useParams()
    const [editedContact, setEditedContact] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
    })
    


    function getContact(editingId) {
        console.log(editingId)
        let result = store.contacts.find((item) => item.id == editingId)
        console.log("resultado ", result)
        setEditedContact(result)
    }
    useEffect(() => {
        getContact(editingId)
    }, [store.contacts])

    return(
        <>
        <div class="mx-auto w-75">
            <div className="mb-3">
                <label for="exampleInputEmail" className="form-label fw-bold">Full Name</label>
                <input onChange={(evento) => setEditedContact({...editedContact, name: evento.target.value})} value={editedContact?.name || ''} type="text" className="form-control" placeholder="Full Name"/>
                <div className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label for="exampleInputEmail" className="form-label fw-bold">Email</label>
                <input onChange={(evento) => setEditedContact({...editedContact, email: evento.target.value})} value={editedContact?.email || ''} type="email" className="form-control" placeholder="Email"/>
                <div className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label for="exampleInputEmail" className="form-label fw-bold">Enter Phone</label>
                <input onChange={(evento) => setEditedContact({...editedContact, phone: evento.target.value})} value={editedContact?.phone || ''} type="phone" className="form-control" placeholder="Enter Phone"/>
                <div className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label for="exampleInputEmail" className="form-label fw-bold">Adress</label>
                <input onChange={(evento) => setEditedContact({...editedContact, address: evento.target.value})} value={editedContact?.address || ''} type="text" className="form-control" placeholder="Address"/>
                <div className="form-text">We'll never share your email with anyone else.</div>
            </div>

            <div className="d-flex flex-column">
                <button onClick={ async () => { 
                    await actions.editContact(editedContact, editingId)
                    navigate('/')
                    }} type="submit" className="btn btn-primary mr">Save</button>
                <Link to='/'>
                        or get back to contacts
                </Link>
            </div>
        </div>
        </>
    )
}