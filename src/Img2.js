import React from 'react'

function Img(props) {
    return (
        <div className="choco">
           <div className="i2">
             <div className="name">
    <h2>{props.name}</h2>
    <p> quidem accusantium atque neque obcaecati tempore quia, mollitia, quo deleniti pariatur fugiat. Velit, totam rerum. lo</p>
           </div>
           </div>
           <img src={props.img} alt="Choco-lava-pastry.jpg" className="vt"/>
        </div>
    )
}

export default Img