import '../../css/home.css'
import Banner from '../../components/Banner/Banner'
import CardContainer from '../../components/CardContainer/CardContainer'
import data from '../../data.json'

function Home() {
    return (
        <div className="home">
            <Banner />
            <CardContainer data={data}/>
        </div>
    )
}
 
export default Home