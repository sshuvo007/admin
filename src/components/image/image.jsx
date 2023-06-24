import React from 'react'
import Image from 'react-bootstrap/Image';


const AdminImage = ({ src = "", }) => {
    return (
        <Image src={src} rounded />
    )
}

export default AdminImage