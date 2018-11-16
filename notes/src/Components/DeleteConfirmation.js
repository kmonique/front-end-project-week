import React from "react"
import {Link} from "react-router-dom";
import axios from "axios"

class DeleteConfirmation extends React.Component {
   constructor(){
      super()
      this.state = {
         open: true,
      }
   }

   deleteItem = id => {
      axios.delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
         .then(response => {this.setState({open: false})})
         .catch(err => console.log(err))
      this.closeBox()
   }

   closeBox = () => {
      this.setState({open: false})
   }

   render() {
      console.log(this.props)
      return(
         this.state.open === true ?
         <div>
            <p>Are you sure you want to delete this?</p>
            <button onClick={() => this.deleteItem(this.props.match.params.id)}>Delete</button>
            <Link to={`/note/${this.props.match.params.id}`} >
               <button onClick={() => this.closeBox()}>No</button>
            </Link>
         </div>
         : null
      )
   }
}

export default DeleteConfirmation