import ContactRow from "./ContactRow";
import react, { useEffect, useState } from 'react';
import ExpandedContactRow from "./ExpandedContactRow";

const SelectedContact  = ({selectedContactId, setSelectedContactId}) =>{
    const [contact, setContact] = useState("");

    const handleSelection = async (id)=>{        
        setSelectedContactId(()=>{
            return null;
        })
    } 
    useEffect(()=>{
        const getContact = async ()=>{
            const result = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
            let data = await result.json();
            const address = await data.address.street + " " + data.address.suite;
            const address2 = await data.address.city + ", " + data.address.zipcode.slice(0,5);
            const companyName = await data.company.name; 
            const companyCatchhrase = await data.company.catchPhrase;
            const companyBs = await data.company.bs;
            const geoLat = await data.address.geo.lat;
            const geoLng = await data.address.geo.lng;
            
            
            data.simpaddress = address;
            data.simpleaddress2 = address2;
            data.companyname = companyName;
            data.catchphrase = companyCatchhrase;
            data.companybs = companyBs;
            data.geolat = geoLat;
            data.geolng = geoLng;
            setContact(()=>{
                return data;
            })
            //console.log(data);
        }
        getContact();

    },[])   

   

    return(
        <>
      <table>
        <thead>
          <tr>
            <th colSpan="8">Contact List</th>
          </tr>
        </thead>
        <tbody>
          <tr className="expandRow">
            <td>Name</td>
            <td>Email</td>
            <td>Phone</td>
            <td>User Name</td>
            <td>Address</td>
            <td>Geo</td>
            <td>Website</td>
            <td>Company</td>

          </tr>          
          <ExpandedContactRow 
            setSelectedContactId={handleSelection}
            contact={contact}
            />  
        </tbody>
      </table>
    </>        
    )
};

export default SelectedContact;