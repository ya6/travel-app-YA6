import './Card.scss';
import { withRouter } from 'react-router-dom';

const Card = (props: any) => {
    return (
        <div className="card brd" onClick={() => {
           props.history.push(`${props.match.url}${props.title}`)
        }
        }>
            <h4>Card</h4>
            <h2> {props.title}</h2>

        </div>
    )
}
export default withRouter(Card);