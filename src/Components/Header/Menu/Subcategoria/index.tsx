function Subcategoria(props: any) {
  var content = props.content;
  return (
    <ul>
      {props.item && props.item.name !== null ? (
        <p className="name-categoria">
          <strong>{props.item.name}</strong>
        </p>
      ) : (
        ""
      )}
      {content.map((item: any, index: any) => {
        return (
          <li key={index}>
            <a className="links" href={item.url}>
              {item.name}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default Subcategoria;
