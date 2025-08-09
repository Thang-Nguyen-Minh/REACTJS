import React from 'react'

class DisplayInfo extends React.Component {
    render() {
        //props => viết tắt của properties : tài sản
        //Eric và 26 muốn truyền động sang
        //Props là 1 obj => lấy thuộc tính thì . là được
        //destructoring array/object
        const {listUsers} = this.props;//objects
        // const listUsers=this.props.listUsers;
        //console.log(listUsers);
        //map yêu cầu truyền vào 1 function : lặp từng phần từ 1
        //map trả về 1 mảng mới và mảng mới chứa code HTML
        return (
            <div>
                {listUsers.map((user) => {
                    return (
                        <div key={user.id}>
                            <div>My name is {user.name}</div>
                            <div>My age is {user.age}</div>
                            <hr/>
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default DisplayInfo;