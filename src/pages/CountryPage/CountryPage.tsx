import WidgetsBox from "../../components/WidgetsBox";
import countries from '../../data/counties'
import './CountryPage.scss'

const CountryPage = (props) => {
    console.log('...props ',props.match.params.country);
    

  const country = countries.find((cou) => (cou.title === props.match.params.country));
  console.log(country);
  
    
    return (<div className="country_page">
        <h1>CountryPage</h1>
        <div className="country_page__container">
            <WidgetsBox />
        </div>
    </div>)
}
  
export default CountryPage;