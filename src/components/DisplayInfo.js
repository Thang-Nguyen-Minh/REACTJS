import React from 'react'
import './DisplayInfo.scss'
import logo from './../logo.svg'
class DisplayInfo extends React.Component {
    state={
        isShowListUser : true//mặc định là luôn hiện
    }
    handleShowHide=()=>{
        this.setState({
            isShowListUser: !this.state.isShowListUser//cập nhật ngược với giá trị hiện tại khi click,đang false
            // click => true và ngược lại
        })
    }

    render() {
        //props => viết tắt của properties : tài sản
        //Eric và 26 muốn truyền động sang
        //Props là 1 obj => lấy thuộc tính thì . là được
        //destructoring array/object
        const {listUsers} = this.props;//objects
        // const listUsers=this.props.listUsers;
        //in ra 1 mảng chứa nhiều obj
        //console.table(listUsers);
        //map yêu cầu truyền vào 1 function : lặp từng phần từ 1
        //map trả về 1 mảng mới và mảng mới chứa code HTML
        //covert từ string sang number => thêm dấu + vào trước string
        return (
            <div className="display-info-container">
                <img src={logo} className="display-info-logo" alt="logo"/>
                <div>
                    <span onClick={()=>{this.handleShowHide()}}>
                        {this.state.isShowListUser ? 'Hide list users :':'Show list users : '}
                    </span>
                </div>
                {/*Cờ là true thì mới show list user*/}
                {this.state.isShowListUser &&
                    <div>
                    {listUsers.map((user) => {
                        /*
                        if(+user.age > 20){
                            return (
                                <div key={user.id} className="green">
                                    <div>My name is {user.name}</div>
                                    <div>My age is {user.age}</div>
                                    <hr/>
                                </div>
                            )
                        }
                        else{
                            return (
                                <div key={user.id} className="red">
                                    <div>My name is {user.name}</div>
                                    <div>My age is {user.age}</div>
                                    <hr/>
                                </div>
                            )
                        }
                         */

                        return (
                            <div key={user.id} className={+user.age>20 ? "red" : "green"}>
                                <div>My name is {user.name}</div>
                                <div>My age is {user.age}</div>
                                <hr/>
                            </div>
                        )
                    })}
                </div>
                }
            </div>
        )
    }
}
export default DisplayInfo;