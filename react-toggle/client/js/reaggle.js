var Reaggle = React.createClass({
    getInitialState: function() {
        return {data: []}
    },

    componentDidMount: function() {
        this.setState({data: [
            {
                id: 1,
                project: "Evonove website",
                description: "front end development",
                from_date: "9:45 AM",
                to_date: "12:32 PM"
            },
            {
                id: 2,
                project: "Dispensa website",
                description: "Mockup",
                from_date: "2:45 PM",
                to_date: "6:32 PM"
            }
        ]});
    },

    formData: function(newTask) {
        this.setState({data: this.state.data.concat(newTask)});
    },

   render: function() {
       return (
           <div className = "reaggle">
               <TaskForm formData={this.formData}/>
               <TaskList data={this.state.data}/>
           </div>
       )
   }
});

var TaskForm = React.createClass({
    getInitialState: function() {
        return {click: false, seconds: 0, timer: null, project: "", description: "", billable: false, from_date: "", to_date: ""};
    },

    handleClick: function() {
        if (this.state.click) {
            var toDate = new Date();
            var task = {
                // setting timestamp as ID to avoid clashes with other IDs
                id: new Date(),
                description: this.state.description,
                project: this.state.project,
                billable: this.state.billable,
                from_date: this.state.from_date.toString(),
                to_date: toDate.toString()
            };
            clearInterval(this.state.timer);
            this.props.formData(task);
            // Resetting all values
            this.setState(this.getInitialState());
        } else {
            var timerID = setInterval(function() {this.setState({seconds: this.state.seconds +1})}.bind(this), 1000);
            this.setState({click: true, timer: timerID, from_date: new Date()});
        }
    },

    handleProjectChange: function(event) {
        this.setState({project: event.target.value});
    },

    handleDescriptionChange: function(event) {
        this.setState({description: event.target.value});
    },

    handleBillable: function() {
        this.setState({billable: !this.state.billable});
    },

   render: function() {
       var billableClass = "task-billable";
       var buttonClass = "task-button";
       var buttonText = "Start";

       if (this.state.click) {
           buttonClass += " is-start";
           buttonText = "Stop";
       }

       if(this.state.billable) {
           billableClass += " is-select";
       }

       return (
           <form className = "task-form">
               <input className = "task-name" type="text" value={this.state.description} onChange={this.handleDescriptionChange}></input>
               <div className = "task-elements">
                   <input className = "task-project" type="text" value={this.state.project} onChange={this.handleProjectChange}></input>
                   <span className = {billableClass} onClick={this.handleBillable}>$</span>
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
