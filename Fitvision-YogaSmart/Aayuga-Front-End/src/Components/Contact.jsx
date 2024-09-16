import useScreenSize from '../hooks/useScreenSize';
import logo from '../utils/logo.png';
function Contact() {
    const screenSize = useScreenSize();
    return (
        <div id="contact" className="flex flex-col h-60 w-full items-center  justify-center mt-16 bg-[#22c9ef]">
            <div className='flex items-center justify-center'>
                {(screenSize.width > 1200) ? <img src={logo} height='200px' width='200px' className='mx-28' /> : <></>}
                <ul>
                    <li className='m-2 text-lg'><span className='font-semibold'>Email :</span> samiotuscano@gmail.com</li>
                    <li className='m-2 text-lg'><span className='font-semibold'>Phone :</span> 8237909500</li>
                    <li className='m-2 text-lg'><span className='font-semibold'>Address :</span> St. Francis Institue of Technology, Borivali</li>
                    <li className='m-2 text-lg'><span className='font-semibold'>Pincode :</span> 400001</li>
                </ul>
            </div>
            <footer className='w-full text-center bg-[#22c9ef] text-sm'> @All Rights are Reserved by Fitvision.</footer>
        </div>
    );
}

export default Contact;