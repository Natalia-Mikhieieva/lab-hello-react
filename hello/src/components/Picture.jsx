function Picture(props) {
  return (
    <div>
      <img src={props.imageSrc} alt="img" />
      <h4> {props.imageTitle} </h4>
      <p>{props.imageDescription} </p>
    </div>
  );
}

export default Picture;
