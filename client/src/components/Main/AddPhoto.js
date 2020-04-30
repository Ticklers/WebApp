import React, {Component} from 'react'

class AddPhoto extends Component {

    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
       // this.onSubmit = this.onSubmit.bind(this)

    }
    
   handleSubmit(event) {
      //onSubmit(event){
        event.preventDefault();
        const imageLink = event.target.elements.link.value
        const description = event.target.elements.description.value
        const post = {
            id: Number(new Date()),
            description: description,
            imageLink: imageLink
        }
        if (description && imageLink){
            
            this.props.onAddPhoto(post)
        
       }

    }


    render() {
        return (
    <div className="mt-3 py-5">
      
        <div className="form " >
          <form onSubmit={this.handleSubmit}> 
               <input type ="text" placeholder="Link" name="link"/>
               <input type ="text" placeholder="Desciption" name="description"/>
               <button> Post </button>
          </form>
        </div>
    </div>
    )
    }
}



export default AddPhoto