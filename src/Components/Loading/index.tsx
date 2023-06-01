import ReactLoading from 'react-loading';

const Loading = ({ type, color }: any) => (
    <div className='container justify-center'>
        {/* teste render */}
        <ReactLoading type={type} color={color} height={'20%'} width={'20%'} />
    </div>
);

export default Loading;