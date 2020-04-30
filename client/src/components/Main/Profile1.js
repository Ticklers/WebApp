import React, {Component} from 'react'
import PhotoWall from './PhotoWall'
import AddPhoto from './AddPhoto'
import {Route, Switch} from 'react-router-dom'
import rick  from "../../img/rick.png"
import rickbg  from "../../img/rickbg.png"
import background  from "../../img/background2.jpg"
import PrivateRoute from "../../utils/PrivateRoute"

import "./Profile1.css"


class Profile1 extends Component {
    constructor() {
        super()
        this.state = {
            posts: [{
                id: 0,
               // description: "beautiful landscape",
                description: "Aukaat m rh",

                //imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
                  // "3919321_1443393332_n.jpg"
                  imageLink: rick
              }, {
                id: 1,
                description: "Aliens???",
               // imageLink: "https://img.purch.com/rc/640x415/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA3Mi84NTEvb3JpZ2luYWwvc3BhY2V4LWlyaWRpdW00LWxhdW5jaC10YXJpcS1tYWxpay5qcGc=" +
                //    "08323785_735653395_n.jpg"
                imageLink:rickbg
              }, {
                id: 2,
              //  description: "On a vacation!",
                description: "Two spiderman",

               // imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
                 imageLink:background  
            }]
        }
        this.removePhoto = this.removePhoto.bind(this)
      // this.addPhoto=this.addPhoto.bind(this)
    }

    removePhoto(postRemoved) {
        console.log(postRemoved.description)
        this.setState((state) => ({
            posts: state.posts.filter(post => post !== postRemoved )
        }))
    }

    addPhoto(postSubmitted) {
        console.log(postSubmitted.imageLink)
        this.setState(state => ({
            posts: state.posts.concat([postSubmitted])
            
        }))
        console.log(this.state.posts)
    }



    componentDidMount() {
    }
    
    componentDidUpdate(prevProps, prevState) {
        console.log(prevState.posts)
        console.log(this.state)
    }

    render() {
        console.log(this.state.posts)
        return ( 
        
        <div className="building">
        <Route exact path = "/profile" render={() => (
                 <div>
                    
                      <PhotoWall posts={this.state.posts} onRemovePhoto={this.removePhoto} onNavigate = {this.navigate}/>
                 </div>

           // )} 
            )}/> 
                
            <Route path= "/AddPhoto" render = {({history}) => (
            
               
                <AddPhoto 
               // posts={this.state.posts}
                onAddPhoto={(addedPost) => {
                    
                    this.addPhoto(addedPost)
                    history.push('/profile')
                    

              }
             

             } />
        
            )}/>
           
         </div>
        )
    }

}


export default Profile1;