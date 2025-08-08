import React from 'react'
import UserInfo from './UserInfo'
//class component
//function component
//render : tập hợp khối HTML xong chuyển thành giao diện
//22. Nesting Component - Component Cha Lồng Con
//Tách đống code ra : chia vào 1 file khác rồi gọi vào đây => lồng component
//Sửa đổi state của React Component => phải dùng setState
class MyComponent extends React.Component {
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
        //Nhập gì đó => thay thế cho tên ở chỗ state.name
        return(
            <div>
                <UserInfo/>
            </div>
        )
    }
}
export default MyComponent;