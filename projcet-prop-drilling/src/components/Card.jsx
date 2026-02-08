

const Card = (props) => {
    return (
        <div className="card">
            <img src="https://tse3.mm.bing.net/th/id/OIP.c5e_rFemZ55RzbSeVw1LngHaEK?rs=1&pid=ImgDetMain&o=7&rm=3" alt="Ice Cream" />


            <div className="title">{props.title}</div>


            <div className="tags">
                 {props.tags.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
            </div>


            <div className="desc">
               {props.desc}
            </div>


            <div className="toppings">
               {props.toppings.map((e , i)=>(
                <span key={i}>{e}</span>
               ))}
            </div>


            <div className="bottom">
                <div>
                    <div className="price">${props.price}.00</div>
                    <div className="delivery">+ {props.delivery} delivery</div>
                </div>


                <button className="btn">Add to cart</button>
            </div>
        </div>
    )
}

export default Card