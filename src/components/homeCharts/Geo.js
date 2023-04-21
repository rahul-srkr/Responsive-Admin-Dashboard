import MyResponsiveGeo from "../charts/GeoChart"
import geoData from "../../../chartData/geoData.json"

const Geo = () => {
    const BACK_GRAOUND_COLOR = "bg-light-BGSC dark:bg-dark-BGSC"
    const TEXT_COLOR = "text-light-TXC-600 dark:text-dark-TXC-100"
    return (
        <div className={`col-span-4 3xl:col-span-6 lg:col-span-12 h-80 ${BACK_GRAOUND_COLOR} lg:overflow-x-scroll relative`}>
            <h2 className={`block ${TEXT_COLOR} font-semibold pt-6 px-8 md:text-sm`}>Geography Based Traffic</h2>
            <div className='h-[90%] w-full absolute bottom-0 p-7 lg:w-[50rem]'>
                <MyResponsiveGeo data={geoData} legendsDisplay={false} projectionValue={150} />
            </div>
        </div>
    )
}
export default Geo