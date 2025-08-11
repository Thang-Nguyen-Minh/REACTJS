import React from 'react'
import AddUserInfo from './AddUserInfo'
import DisplayInfo from './DisplayInfo'
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
    state = {
        listUsers:[
            {
                id: 1,
                name: 'Minh Thang',
                age: '21'
            },
            {
                id: 2,
                name: 'Thanh Binh',
                age: '19'
            },
            {
                id: 3,
                name: 'Kieu Yen',
                age: '22'
            }
        ]
    }
    handleAddNewUser = (userObj ) => {
        // let listUsersNew=this.state.listUsers;
        // listUsersNew.unshift(userObj);
        // this.setState({
        //     listUsers :listUsersNew
        // })
        //Thêm 1 data ở đầu mảng : [data,...tên mảng], nhớ là phải copy lại cả mảng đó
        this.setState({
            listUsers:[userObj,...this.state.listUsers],
        })
    }
    handleDeleteUser = (userId) => {
        let listUsersClone = this.state.listUsers;
        listUsersClone=listUsersClone.filter((item)=>{
            return item.id !== userId;
        })
        this.setState({
            listUsers:listUsersClone,
        })
    }
    //jsx : 1 mk React có . Viết code JS bên trong code HTML
    render () {
        //trả về 1 và chỉ 1 phần tử HTML
        //{Viết code JS trong này}
        //Nhập gì đó => thay thế cho tên ở chỗ state.name
        //DRY : Don't repeat yourself : Tối ưu hóa code thay vì thực hiện lại 1 công việc nhiều lần
        const test={name:"Minh Thang",age:"21"};
        return(
            <>
                {console.log(test)}
                {/*{JSON.stringify(test)}*/}
                <br/>
                <div className="a">
                    <AddUserInfo
                        handleAddNewUser={this.handleAddNewUser}
                    />
                    <br/> <br/>
                    <DisplayInfo
                        listUsers={this.state.listUsers}
                        handleDeleteUser={this.handleDeleteUser}
                    />
                </div>
                <div className="b">

                </div>
            </>
        )
    }
}
export default MyComponent;