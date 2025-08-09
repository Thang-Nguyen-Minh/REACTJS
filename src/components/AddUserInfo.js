import React from "react";
//1. Tạo 1 class kế thừa React.Component và export nó ra, chả hiểu dạy cái này làm chó gì
class AddUserInfo extends React.Component {
    state = {
        name : '',
        address: 'Hỏi Dân IT',
        age: ''
    };
    //Khi gọi đến hàm sẽ cập nhật giá trị tên và tuổi
    handleOnChangeInput = (event) => {
        event.preventDefault();
        this.setState({
            name: event.target.value,
        })
    }
    handleOnChangeAge = (event) => {
        event.preventDefault();
        this.setState({
            age: event.target.value,
        })
    }
    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.props.handleAddNewUser({
            id : Math.floor(Math.random()*100)+1+"-random",
            name : this.state.name,
            age : this.state.age
        });//đang thực thi => cần ()
    }
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm from {this.state.address} and I'm {this.state.age} years old
                <form onSubmit={(event) => {this.handleOnSubmit(event)}}>
                    <label>Your Name</label>
                    <input
                        //ô input muốn hiện thị mặc định giá trị nào đó ngay khi vào trang web
                        value={this.state.name}//giá trị khởi tạo trong ô input
                        type='text'
                        onChange={(event) => {this.handleOnChangeInput(event)}}/>
                    <button type="submit" >Submit</button>
                    <label>Your Age : </label>
                    <input
                        value={this.state.age}
                        type='text'
                        onChange={(event) => {this.handleOnChangeAge(event)}}/>
                    <button type="submit" >Submit</button>
                </form>
            </div>
        )
    }
}
export default AddUserInfo;