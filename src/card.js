import './card.css'
const Card=({post})=>{
    return(
        <>
            <section className="card">
                <section className="card-header">
                    <div>
                        <div className="card-header__name">{post.userName}</div>
                        <div className="card-header__place">{post.location}</div>
                    </div>
                    <span>
                    <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                    </span>
                </section>
                <section className="card-image">
                    <img src={post.file} alt="place"/>
                </section>
                <section className="card-actions">
                    <span><i className="fa fa-heart" aria-hidden="true"></i></span>
                    <span><i className="fa fa-paper-plane" aria-hidden="true"></i></span>
                    {/* <span>{post.date}</span> */}
                </section>
                <section className="likes">
                    {/* {post.likes} Likes */}
                    23
                </section>
                <section className="description">
                    {post.description} 
                </section>
            </section>
        </>
    )
}
export default Card;