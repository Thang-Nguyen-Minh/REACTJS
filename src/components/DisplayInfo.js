import React,{useState} from 'react'
import './DisplayInfo.scss'
import logo from './../logo.svg'

//
//stateful : có state

// class DisplayInfo extends React.Component {
//     render() {
//         //props => viết tắt của properties : tài sản
//         //Eric và 26 muốn truyền động sang
//         //Props là 1 obj => lấy thuộc tính thì . là được
//         //destructoring array/object
//         const {listUsers} = this.props;//objects
//         // const listUsers=this.props.listUsers;
//         //in ra 1 mảng chứa nhiều obj
//         //console.table(listUsers);
//         //map yêu cầu truyền vào 1 function : lặp từng phần từ 1
//         //map trả về 1 mảng mới và mảng mới chứa code HTML
//         //covert từ string sang number => thêm dấu + vào trước string
//         //template(HTML) + logicJS : component
//         console.log(">>> call render");
//         return (
//             <div className="display-info-container">
//
//                 {/*Cờ là true thì mới show list user*/}
//                 {true &&
//                     <>
//                     {listUsers.map((user) => {
//                         /*
//                         if(+user.age > 20){
//                             return (
//                                 <div key={user.id} className="green">
//                                     <div>My name is {user.name}</div>
//                                     <div>My age is {user.age}</div>
//                                     <hr/>
//                                 </div>
//                             )
//                         }
//                         else{
//                             return (
//                                 <div key={user.id} className="red">
//                                     <div>My name is {user.name}</div>
//                                     <div>My age is {user.age}</div>
//                                     <hr/>
//                                 </div>
//                             )
//                         }
//                          */
//
//                         return (
//                             <div key={user.id} className={+user.age>20 ? "red" : "green"}>
//                                 <div>
//                                     <div>My name is {user.name}</div>
//                                     <div>My age is {user.age}</div>
//                                 </div>
//                                 <div>
//                                     <button onClick={(id)=>this.props.handleDeleteUser(user.id)}>Delete</button>
//                                 </div>
//                                 <hr/>
//                             </div>
//                         )
//                     })}
//                     </>
//                 }
//             </div>
//         )
//     }
// }
//function không có hàm render
const DisplayInfo = (props) => {
    //destructoring array/object
    const {listUsers} = props;//objects
    const [isShowHideListUser, setShowHideListUser] = useState(true);
    // this.state={
    //     isShowHideListUser : true
    // }
    const handleShowHideListUser = () => {
        setShowHideListUser(!isShowHideListUser);
    }
    return (
        <div className="display-info-container">
            <div>
                <button onClick={()=>handleShowHideListUser()}>
                    {isShowHideListUser ? 'Hide List' : 'Show List'}
                </button>
            </div>
            {isShowHideListUser &&
                <>
                {listUsers.map((user) => {
                    return (
                        <div key={user.id} className={+user.age>20 ? "red" : "green"}>
                            <div>
                                <div>My name is {user.name}</div>
                                <div>My age is {user.age}</div>
                            </div>
                            <div>
                                <button onClick={(id)=>props.handleDeleteUser(user.id)}>Delete</button>
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
export default DisplayInfo;