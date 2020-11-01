import React from 'react'

function Img(props) {
    return (
        <div className="choco">
           <img src={props.img} alt="Choco-lava-pastry.jpg"/>
           <div className="i1">
               <div className="pastry">
                <h2>{props.name}</h2>
               <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic sed blanditiis similique vitae repellendus facere quidem accusantium atque neque obcaecati tempore quia, mollitia, quo deleniti pariatur fugiat. Velit, totam rerum. lo</p>

               </div>
            
           </div>
        </div>
    )
}

export default Img
