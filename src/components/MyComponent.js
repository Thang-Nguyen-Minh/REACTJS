//class component
//function component
//render : tập hợp khối HTML xong chuyển thành giao diện
import React from 'react'
class MyComponent extends React.Component {
    //jsx : 1 mk React có . Viết code JS bên trong code HTML
    render () {
        //trả về 1 và chỉ 1 phần tử HTML
        //{Viết code JS trong này}
        return(
            <div>
                {Math.random()}
                My First Component
            </div>
        )
    }
}
export default MyComponent;