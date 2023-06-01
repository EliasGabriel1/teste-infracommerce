import Categoria from "../../Categoria";
import Subcategoria from "../../Subcategoria";

interface ContentMenu2Props {
  api: any[];
}

function ContentMenu2(props: ContentMenu2Props) {
  const { api } = props;

  const handleClick = (event: React.MouseEvent<HTMLLIElement>) => {
    event.currentTarget.classList.toggle('subcategoria-open');
  };

  return (
    <div className="container">
      <div className="categoria">
        <ul>
          {api.map((item: any, index: any) => (
            <li key={index} onClick={handleClick} className="subcategoria-mobile">
              <Categoria content={item} nolink={false} />
              <div className="subcategoria">
                <Categoria className="categoria-in-subcategoria" content={item} nolink={true} />
                <Subcategoria content={item.children} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ContentMenu2;
