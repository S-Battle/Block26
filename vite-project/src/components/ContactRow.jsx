
// const setSelectedContactId = (e)=>{

//     console.log(e.target);
// }
const handleClick = (e) => {

    console.log(e);
}
const handleMouseEnter = (e) =>{
    // console.log("hovering");
    e.target.parentNode.style["background-color"] = 'grey';
    e.target.parentNode.style["color"] = 'white';
}
const handleMouseLeave = (e) => {
    // console.log("mouse Leaving");
    e.target.parentNode.style["background-color"] = "";
    e.target.parentNode.style["color"] = 'black';
}



const ContactRow = ({ setSelectedContactId, contact }) => {


    return (
        <tr onClick={() => {
            setSelectedContactId(contact.id);
          }}
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave} >
        <td>{contact.name}</td>
        <td>{contact.email}</td>
        <td>{contact.phone}</td>
        </tr>
    );
}

export default ContactRow;