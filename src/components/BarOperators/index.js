import  React, {Component} from 'react';
import './barOperatorsTheme.css';
import { Link } from 'react-router-dom';

export default class BarOperators extends Component {

    render(){
        return(
            <div style={{with:'30%'}}>
               <div className={'component'} >               
                <Link to={'/filter'} className={'item'}>Filter </Link>
                <Link to={'/throttletime'} className={'item'}>throttletime</Link>
                <Link to={'/oi'} className={'item'}>Operator 3 </Link>
                <Link to={'/oi'} className={'item'}>Operator 4 </Link>
                <Link to={'/oi'} className={'item'}>Operator 5 </Link>
                <Link to={'/oi'} className={'item'}>Operator 6 </Link>
                <Link to={'/oi'} className={'item'}>Operator 7 </Link>
                <Link to={'/oi'} className={'item'}>Operator 8 </Link>
                <Link to={'/oi'} className={'item'}>Operator 9 </Link>
            </div>
          </div>
        );
    }
}