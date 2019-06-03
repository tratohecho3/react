import React from 'react'
import Navbar from '../components/Navbar'
import header from '../images/badge-header.svg'
import './styles/BadgeNew.css'
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm'
class BadgeNew extends React.Component {
   render() {
       return(
           <div>
               <Navbar></Navbar>
               <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header}></img>
               </div>

               <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge firstName="Cesar" lastName="Colina" jobTitle="Full Stack Developer"></Badge>
                        </div> 

                        <div className="col-6">
                            <BadgeForm></BadgeForm>
                        </div>
                    </div>

               </div>
           </div>
       )
   } 
}

export default BadgeNew