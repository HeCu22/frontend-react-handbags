function Article({description, image, title, price,tag}) {
    return (
        <article >
            <span>{tag}</span>
            <img src={image} alt={title} />
            <p>{description}</p>
            <h4>{price}</h4>
        </article>
    );
}

export default Article;