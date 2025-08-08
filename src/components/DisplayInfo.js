import React from 'react'

class DisplayInfo extends React.Component {
    render() {
        //props => viết tắt của properties : tài sản
        //Eric và 26 muốn truyền động sang
        //Props là 1 obj => lấy thuộc tính thì . là được
        //destructoring array/object
        const {age,name} = this.props;
        return (
            <div>
               <div>My name is {name}</div>
                <div>My age is {age}</div>
            </div>
        )
    }
}
export default DisplayInfo;