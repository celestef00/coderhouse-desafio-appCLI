
import './Item..css'



const Item = ({data}) => {
    const { title, description, price, image} = data

    return(
    <div className= 'item-container'>
            <div className='item-img'>
                <img alt={description} src={`../../images/products/${image}`} />
            </div>

            
            <div className='item-name'>
                    <h1> {title}</h1>

                    <h2>${Number(price).toFixed(2)}</h2>
            </div>

    </div>)
}



export default Item