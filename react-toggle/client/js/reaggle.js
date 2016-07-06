// create an object which simulates data from back end
var taskData = [
    {
        "id": 1,
        "project": "Evonove website",
        "description": "front end development",
        "from_date": "9:45 AM",
        "to_date": "12:32 PM"
    },
    {
        "id": 2,
        "project": "Dispensa website",
        "description": "Mockup",
        "from_date": "2:45 PM",
        "to_date": "6:32 PM"
    }
];

var Reaggle = React.createClass({
   render: function() {
       return (
           <div className = "reaggle">
               <TaskForm />
               <TaskList data={taskData}/>
           </div>
       )
   }
});

var TaskForm = React.createClass({
    // Setting the initial state: timer is not started
    getInitialState: function() {
        return {click: false, seconds: 0, timer: null};
    },

    handleClick: function() {
        if (this.state.click) {
            this.setState({click: false});
            clearInterval(this.state.timer);
        } else {
            var timerID = setInterval(function() {this.setState({seconds: this.state.seconds +1})}.bind(this), 1000);
            this.setState({click: true, timer: timerID});
        }
    },

   render: function() {
       var buttonClass = "task-button";
       var buttonText = "Start";
       if (this.state.click) {
           buttonClass += " is-start";
           buttonText = "Stop";
       }

       return (
           <form className = "task-form">
               <input className = "task-name" type="text"></input>
               <div className = "task-elements">
                   <input className = "task-project" type="text"></input>
                   <span className = "task-billable">$</span>
                   <span className = "task-timer">{this.state.seconds} sec</span>
                   <span className = {buttonClass} onClick={this.handleClick}>{buttonText}</span>
               </div>
           </form>
       )
   }
});

var TaskList = React.createClass({
   render: function() {
       var taskNodes = this.props.data.map(function(task) {
           return (
               <TaskItem key={task.id} project={task.project} description={task.description} from_date={task.from_date} to_date={task.to_date} />
           )
       });

       return (
           <div className = "task-list">
               {taskNodes}
           </div>
       )
   }
});

var TaskItem = React.createClass({
    render: function() {
        return (
            <div className = "task-item">
                <div className = "task-name">
                    <span className = "task-name">{this.props.description}</span>
                    <span className = "task-project">{this.props.project}</span>
                </div>
                <div className = "task-time">
                    <span className = "task-time-elapsed">3:00</span>
                    <div className = "task-time-from-to">
                        <span className = "task-time-from">{this.props.from_date}</span>
                        <span> - </span>
                        <span className = "task-time-to">{this.props.to_date}</span>
                    </div>
                </div>
            </div>
        )
    }
});

ReactDOM.render(
    <Reaggle />,
    document.getElementById('main')
);
