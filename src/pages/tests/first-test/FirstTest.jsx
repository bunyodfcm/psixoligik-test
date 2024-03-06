import { useGetFirstTestContext } from '../../../context/FirstTestContext';
import PaintDetail from './components/PaintDetail';
import ShowDetail from './components/ShowDetail';


const FirstTest = () => {
    const { createDetail } = useGetFirstTestContext();
    // console.log(createDetail, details);
    return (
        <div className='w-5/6 mx-auto pt-10'>
            <button className='border border-borderColor px-4 py-2 text-black font-semibold hover:shadow-sm focus:text-red' onClick={() => createDetail()}>
                Boshlash
            </button>
            <div className='min-h-96 mt-10 border-2 border-borderColor flex justify-between'>
                <div className='p-10 w-1/2 '>
                    <ShowDetail />
                </div>
                <div className='p-10 w-1/2 border-l-2 border-borderColor'>
                    <PaintDetail />
                </div>
            </div>
        </div>
    );
};

export default FirstTest;
