function TestimonialTile(props) {
  const { name, title, imgPath, text, alt } = props;
  return (
    <div   className="testimonial-tile">
      <img className="testimonial-tile__icon" src="/icon-quotes.svg"></img>
      <p   className="testimonial-tile__text">{ text }</p>
      <h4  className="rapture-blue testimonial-tile__name">{ name }</h4>
      <p   className="testimonial-tile__text--job-title"><i>{ title } </i></p>
      <img className="testimonial-tile__img" src={ imgPath } alt={ alt }></img>
    </div> 
  )
}

export default TestimonialTile