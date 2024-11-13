import React, {useContext, useEffect, useState} from "react";
import "../../styles/home.css";
import {Context} from "../store/appContext.js"
import { ContactCard } from "../component/card.js";

export const Home = () => {

	const {actions, store} = useContext(Context)

	return (
		<div className="text-center mt-5">
			{store.contacts?.length > 0 ? (
                store.contacts.map((item, index) => (
                    <ContactCard key={index} id={item.id} name={item.name} phone={item.phone}  email={item.email} address={item.address} />
                ))
            ) : (
                <p>No hay contactos disponibles</p>
            )
			}
		</div>
	)
};
