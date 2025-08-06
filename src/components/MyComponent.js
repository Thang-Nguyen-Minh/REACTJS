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
    //jsx : 1 mk React có . Viết code JS bên trong code HTML
    render () {
        //trả về 1 và chỉ 1 phần tử HTML
        //{Viết code JS trong này}
        return(
            <div>
                My name is {this.state.name} and I'm from {this.state.address} and I'm {this.state.age} years old
                <button onClick={this.handleClick}>Click mee</button>
                <button onClick={(event) => {this.handleClick(event)}}>Click mee</button>
                <button onMouseOver={this.handleOnMoveOver}>Hover mee</button>
            </div>
        )
    }
}
export default MyComponent;