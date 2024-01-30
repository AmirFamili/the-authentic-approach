import Img1 from '../images/love.webp';
import Img2 from '../images/success.webp';
import Img3 from '../images/happy.webp';

const Main = () => {
    return (
        <div class="p-10 bg-slate-100">
            <h2 class="text-center lato-bold text-blue-main p-10  ">THE AUTHENTIC APPROACH</h2>
            <div class="main-box m-5 rounded-lg bg-slate-200  ">
                <div class="  p-10 flex justify-center items-center max-lg:block">
                    <img className='rounded-2xl w-1/2 m-2 max-lg:w-full' src={Img1} alt="love" />
                    <p class="lato-medium p-6 w-1/2 text-blue-light max-lg:w-full">Welcome, friend. I’m Golnaz Anbarghalami, LCSW, and I’ve worked in social
                        services for
                        over 15 years throughout my adult life. I currently serve the Dallas-Fort Worth metroplex in
                        crisis
                        counseling and suicide prevention, and also worked in public health programs for 10+ years
                        alongside homeless, incarcerated, and refugee populations. I find the most fulfillment and
                        feel my strengths have the strongest impact when working with individuals one-on-one.</p>
                </div>

                <div class=" p-10 flex justify-center items-center max-lg:block ">

                    <p class="lato-medium p-6 w-1/2 text-blue-light max-lg:w-full max-lg:hidden">I immigrated to the United States from Iran at an early age and began
                        volunteering with
                        my mom at various non-profit organizations. Being of service to others inspired me to pursue
                        studies and a career in psychology and social work. Growing up, I often felt pulled between
                        two cultures. Navigating these times in my youth fueled my desire to better understand
                        myself and others, strengthened my passion for connecting with people of all backgrounds,
                        and has led me to dedicate my life to empowering others to live their best, authentic lives.</p>
                    <img className='rounded-2xl w-1/2 m-2 max-lg:w-full'  src={Img2} alt="success" />

                    <p class="lato-medium p-6 w-1/2 max-lg:w-full text-blue-light hidden max-lg:block">I immigrated to the United States from Iran at an early age and began
                        volunteering with
                        my mom at various non-profit organizations. Being of service to others inspired me to pursue
                        studies and a career in psychology and social work. Growing up, I often felt pulled between
                        two cultures. Navigating these times in my youth fueled my desire to better understand
                        myself and others, strengthened my passion for connecting with people of all backgrounds,
                        and has led me to dedicate my life to empowering others to live their best, authentic lives.</p>

                </div>

                <div class=" p-10 flex justify-center items-center max-lg:block">
                    <img className='rounded-2xl w-1/2 m-2 max-lg:w-full'  src={Img3} alt="happy" />
                    <p class="lato-medium p-6 w-1/2 text-blue-light max-lg:w-full">Whether you want to talk, scream, cry, listen, sit in silence, jump for
                        joy,
                        or all of
                        the above, I promise to offer you a warm place and safe space, free of judgment, where you can
                        breathe,
                        be free, be seen, be heard, and BE YOU. I am here for you, and I look forward to meeting you.
                    </p>

                </div>

            </div>

        </div>
    );
}

export default Main;