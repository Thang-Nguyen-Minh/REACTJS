import React,{useState} from "react";

const AddUserInfo = (props) =>{
    //Khi gọi đến hàm sẽ cập nhật giá trị tên và tuổi
    const [nameUpdate, setNameUpdate] = useState('');
    const [ageUpdate, setAgeUpdate] = useState('');

    const handleOnChangeInput = (event) => {
        setNameUpdate(event.target.value)
    }

    const handleOnChangeAge = (event) => {
        setAgeUpdate(event.target.value);
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        props.handleAddNewUser({
            id : Math.floor(Math.random()*100)+1+"-random",
            name : nameUpdate,
            age : ageUpdate
        });//đang thực thi => cần ()
    }
    return (
        <div>
            My name is {nameUpdate} and I'm {ageUpdate} years old
            <form onSubmit={(event) => {handleOnSubmit(event)}}>
                <label>Your Name : </label>
                <input
                    value={nameUpdate}
                    type='text'
                    onChange={(event) => {handleOnChangeInput(event)}}/>
                <label>Your Age : </label>
                <input
                    value={ageUpdate}
                    type='text'
                    onChange={(event) => {handleOnChangeAge(event)}}/>
                <button type="submit" >Submit</button>
            </form>
        </div>
    )
}
export default AddUserInfo;