//class component
//function component
//render : tập hợp khối HTML xong chuyển thành giao diện
import React from 'react'
class MyComponent extends React.Component {
    state = {
      name : 'Eric',
      address: 'Hỏi Dân IT',
      age: 26
    };
    //this : ánh xạ (dại diện) cho obj mà mk tham chiếu , this ở đây là MyComponent
    //Nhấn vào click me in ra 1 dòng log gì đó
    handleClick = (event) => {
        event.preventDefault();
        // console.log(event.target);//target : in ra cả <button>Click me</button>
        // console.log(event.target.value);//Click Me
        // console.log('Click Me');
        //handleClick không biết this là gì
        //setState : hàm render tự động được gọi lại
        this.setState({
            name: 'Minh Thang',
            age: Math.floor((Math.random() * 100) + 1)
        })

    }
    handleOnMoveOver = (event)=>{
        console.log(event);
    }
    handleOnChangeInput = (event) => {
        event.preventDefault();
        this.setState({
            name: event.target.value,
        })
    }
    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }
    //jsx : 1 mk React có . Viết code JS bên trong code HTML
    render () {
        //trả về 1 và chỉ 1 phần tử HTML
        //{Viết code JS trong này}
        //Nhập gì đó => thay thế cho tên ở chỗ state.name
        return(
            <div>
                My name is {this.state.name} and I'm from {this.state.address} and I'm {this.state.age} years old
                <form onSubmit={(event) => {this.handleOnSubmit(event)}}>
                    <input type='text' onChange={(event) => {this.handleOnChangeInput(event)}}/>
                    <button type="submit" >Submit</button>
                </form>
            </div>
        )
    }
}
export default MyComponent;