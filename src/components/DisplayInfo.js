import React from 'react'
import './DisplayInfo.scss'
import logo from './../logo.svg'
class DisplayInfo extends React.Component {
    constructor(props) {
        console.log(">>>call constructor : 1");
        super(props);
        this.state = {
            isShowListUser : true
        }
    }
    //Chạy sau hàm render()
    // Thay đổi tiêu đề web : document.title : chờ web load xong mới đổi
    //Dùng để gọi API, về sau thuần axios
    componentDidMount() {
        console.log('Component componentDidMount');
        setTimeout(() => {
            document.title='Eric & Hoi Dan IT';
        },3000)
    }
    //Xảy ra khi component nhận props mới hoặc state
    //Component update tới 1 thời điểm nào đấy thì mk sẽ phải làm 1 cái gì đấy
    //VD : số lượng user = 10 => hiện thông báo tối đa danh sách user
    //Muốn check điều kiện theo prop hay state
    //So sánh giữa quá khứ và hiện tại xong mới chạy
    //Component khi được cập nhật có dữ liệu nào và mk muốn làm gì với dữ liệu đó
    componentDidUpdate(prevProps,prevState){
        console.log('Component componentDidUpdate',this.props,prevProps);
        if(this.props.listUsers !== prevProps.listUsers){
            if(this.props.listUsers.length === 5){
                alert("You get 5 users from the list");
            }
        }
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
        //template(HTML) + logicJS : component
        console.log(">>> call render");
        return (
            <div className="display-info-container">
                {/*<img src={logo} className="display-info-logo" alt="logo"/>*/}
                <div>
                    <button onClick={()=>{this.handleShowHide()}}>
                        {this.state.isShowListUser ? 'Hide list users ':'Show list users  '}
                    </button>
                </div>
                {/*Cờ là true thì mới show list user*/}
                {this.state.isShowListUser &&
                    <>
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
                                <div>
                                    <div>My name is {user.name}</div>
                                    <div>My age is {user.age}</div>
                                </div>
                                <div>
                                    <button onClick={(id)=>this.props.handleDeleteUser(user.id)}>Delete</button>
                                </div>
                                <hr/>
                            </div>
                        )
                    })}
                    </>
                }
            </div>
        )
    }
}
export default DisplayInfo;