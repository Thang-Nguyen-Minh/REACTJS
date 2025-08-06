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
    //jsx : 1 mk React có . Viết code JS bên trong code HTML
    render () {
        //trả về 1 và chỉ 1 phần tử HTML
        //{Viết code JS trong này}
        //this : ánh xạ (dại diện) cho obj mà mk tham chiếu , this ở đây là MyComponent
        return(
            <div>
                My name is {this.state.name} and I'm from {this.state.address} and I'm {this.state.age} years old
            </div>
        )
    }
}
export default MyComponent;