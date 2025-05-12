import React from  "react";



const ExpandedContactRow =  ({setSelectedContactId, contact}) => {
    

    const handleMouseEnter = (e) =>{        
        e.target.parentNode.style["background-color"] = 'grey';
        e.target.parentNode.style["color"] = 'white';
    }
    const handleMouseLeave = (e) => {       
        e.target.parentNode.style["background-color"] = "";
        e.target.parentNode.style["color"] = 'black';
    }
    
    console.log(contact)

        
    







          return(
        <>
        <tr className="expandRow" onClick={() => {
            setSelectedContactId(contact.id);
          }}
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave} >
        <td>{ contact.name}</td>
        <td>{ contact.email}</td>
        <td>{ contact.phone}</td>
        <td>{ contact.username}</td>
        <td>{ contact.simpaddress}</td>
        <td>Lng: { contact.geolat}</td>
        <td>{ contact.website}</td>
        <td>{ contact.companyname} </td>        
        </tr>
        <tr className="expandRow"  
            onClick={() => {
                setSelectedContactId(contact.id);
              }}
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>{contact.simpleaddress2}</td>
            <td>Lat: {contact.geolng}</td>
            <td></td>
            <td>{contact.catchphrase}</td>
        </tr>
        <tr className="expandRow"  
            onClick={() => {
                setSelectedContactId(contact.id);
              }}
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>{contact.companybs}</td>
        </tr>
        </>
          );

}



export default ExpandedContactRow;