import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss"
import {FcPlus} from 'react-icons/fc';
import {useState} from "react";
const ManageUser = props => {
    const[show,setShow]=useState(false);
    return (
        <div className="manage-user-container">
            <div className="title">
                Manage User
            </div>
            <div className="users-content">
                <div className="btn-add-new">
                    <button className="btn btn-primary" onClick={()=>setShow(true)}> <FcPlus/> Add new users</button>
                </div>
                <div className="table-users-container">
                    Table User
                </div>
                <ModalCreateUser show={show} setShow={setShow}/>
            </div>
        </div>
    )
}
export default ManageUser;