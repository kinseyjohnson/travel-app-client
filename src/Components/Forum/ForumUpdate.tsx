import React from 'react';

interface ForumUpdateProps {
    sessionToken: any
  }
  
  interface ForumUpdateState {
    city: string,
    country: string,
    attractions: string,
    notes: string,
    rating: number,
    sessionToken: any
  }

class ForumUpdate extends React.Component<any, any> {
      constructor(props: any) {
          super(props)
          this.state = {
            forum: [],
            sessionToken: localStorage.getItem('sessionToken')
          }
      }

      updateForum = (forum: any) => {
        fetch(`http://localhost:3000/forum/update/${forum}`, {
          method: "PUT",
          headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": `SECRET ${this.state.sessionToken}`
          }),
        }).then((res) => console.log("forum updated"))
        .catch((err) => {
          console.log(err);
        })
      }

    render() {
        return (
          <div>
          </div>
        )
      }
    }
    
    export default ForumUpdate;