// create an object which simulates data from back end
var taskData = {
    "id": 1,
    "project": "Evonove website",
    "description": "front end development",
    "from_date": "09:45",
    "to_date": "12:32"
};

var Reaggle = React.createClass({
   render: function() {
       return (
           <div className = "reaggle">
               <TaskForm />
               <TaskList />
           </div>
       )
   }
});

var TaskForm = React.createClass({
   render: function() {
       return (
           <form className = "task-form">
               <input className = "task-name"></input>
               <span className = "task-project">Project</span>
               <span className = "task-timer">Timer</span>
               <span className = "task-button">Start</span>
           </form>
       )
   }
});

var TaskList = React.createClass({
   render: function() {
       return (
           <div className = "task-list">
               <TaskItem project={this.props.data.project} description={this.props.data.description} from_date={this.props.data.from_date} to_date={this.props.data.to_date} />
           </div>
       )
   }
});

var TaskItem = React.createClass({
    render: function() {
        return (
            <div className = "task-item">
                <span className = "task-name">{this.props.description}</span>
                <span className = "task-project">{this.props.project}</span>
                <span className = "task-time-elapsed">3:00</span>
                <span className = "task-time-from">{this.props.from_date}</span>
                <span className = "task-time-to">{this.props.to_date}</span>
            </div>
        )
    }
});

ReactDOM.render(
    <TaskList data={taskData} />,
    document.getElementById('main')
);