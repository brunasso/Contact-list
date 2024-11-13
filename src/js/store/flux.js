const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			contacts: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getContact: async() => {
				const resp = await fetch(process.env.BACKEND_URL+"agendas/brunasso")
				if(resp.status == 404){
					await getActions().createAgenda();
				}
				const data = await resp.json();
				console.log(data)
				setStore({contacts: data.contacts})
			},

			//func para importar contacto
			getAllContacts: async () =>{
				const resp = await fetch(process.env.BACKEND_URL+"agendas/brunasso")
				if(resp.status == 404){
					await getActions().createAgenda();
				}
				const data = await resp.json();
				console.log(data)
				setStore({contacts: data.contacts})
			},
			createContact: async (newContact) => {
				const resp = await fetch(process.env.BACKEND_URL+"agendas/brunasso/contacts",{
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(newContact)
				});
				console.log(resp.status)
				if (resp.status == 201) {
					await getActions().getAllContacts();
				} 
				// const data = await resp.json();
				// setStore({contacts: data.contacts})
			},
			createAgenda: async () => {
				try {
					const resp = await fetch(process.env.BACKEND_URL+"agendas/brunasso",{
						method: "POST",
						headers: {"Content-Type": "application/json"},
					})
					
					if (resp.status == 201) {
						await getActions().getAllContacts();
					} 
				} catch (error) {
					console.log(error)
					return false
				}
			},
			deleteContact: async(contactId) => {
				try {
					const resp = await fetch(process.env.BACKEND_URL+ `agendas/brunasso/contacts/${contactId}`,{
						method: "DELETE"
					})
					
					if (resp.ok) {
						await getActions().getAllContacts();
					} 
				} catch (error) {
					return false;
				}
			},
			editContact: async(updateContact, id) => {
				try {
					const resp = await fetch(process.env.BACKEND_URL+ `agendas/brunasso/contacts/${id}`,{
						method: "PUT",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(updateContact)
					})
					console.log(resp.status)					
					if (resp.ok) {
						await getActions().getAllContacts(); // Actualiza lista
					} 
				} catch (error) {
					console.log("Error editando contacto")
				}
			}
		}
	};
};

export default getState;
