import  React, {Component} from 'react';
import { getPhotos } from '../../../services/api';
import axios from 'axios';
import './FilterOperator.css';

export default class FilterOperator extends Component {

    constructor(){
        super();
    }

    componentDidMount(){
        getPhotos()
            .then(result => this.setState({photos: result.data}))
        // getPhotos()
        //     .subscribe(result => console.log(result));
    }

    render(){
        
        if(!this.state){
            return <div>Aguarde...</div>
        }

        return(
        <div>
            <input id='searchId' />

            
            <div className='grid-photos'>
            {this.state.photos.map( (photo, key) => {
                return(
                    <div key={key} className={'photo'}>
                        <img src={photo.url} />
                        <p>{photo.descricao}</p>
                    </div>
                );
            })}
            </div>

          </div>
        );
    }
}