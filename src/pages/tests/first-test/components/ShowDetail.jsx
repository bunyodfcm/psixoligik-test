import { useGetFirstTestContext } from '../../../../context/FirstTestContext';

const ShowDetail = () => {
    const { createDetail, details, items, counter } = useGetFirstTestContext();

    return (
        <div className='flex flex-col'>
            <h1 className='text-red'>{counter}</h1>
            <div className='w'>{items ? items.map((item, index) => <p key={index}>{item}</p>) : ''}</div>
        </div>
    );
};

export default ShowDetail;
