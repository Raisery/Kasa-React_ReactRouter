import '../../css/home.css'
import Banner from '../../components/Banner/Banner'
import CardContainer from '../../components/CardContainer/CardContainer'
import data from '../../data.json'
import background from '../../assets/banner/foret.png'

function Home() {
    return (
        <div className="home">
            <Banner image={background}>Chez vous, partout et ailleurs</Banner>
            <CardContainer data={data}/>
        </div>
    )
}
 
export default Home