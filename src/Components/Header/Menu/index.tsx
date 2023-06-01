import Desktop from './Desktop';
import Mobile from './Mobile';
import { useWindowSize } from "../../../Hooks/useWindowSize";


function MenuContent(props: any) {
  const window = useWindowSize();
  return (
    <div className='container menu' data-testid="menu">
      {window.width && window.width > 900 ? <Desktop api={props.api} /> : <Mobile api={props.api} />}
    </div>
  );
}

export default MenuContent;
