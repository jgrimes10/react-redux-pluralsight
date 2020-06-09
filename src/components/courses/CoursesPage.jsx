import React from 'react';

class CoursesPage extends React.Component {
  state = {
    course: {
      title: ""
    }
  };

  handleChange = (event) => {
    // copy the current course in the state and overwrite the title
    const course = {...this.state.course, title: event.target.value};

    this.setState({course});
  }

  handleSubmit = (event) => {
    // prevent browser from posting back
    event.preventDefault();

    alert(this.state.course.title);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input type="text" onChange={this.handleChange} value={this.state.course.title}/>
        <input type="submit" value="Save"/>
      </form>
    );
  }
}

export default CoursesPage;
