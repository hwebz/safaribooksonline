import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class Search extends Component {
    constructor() {
        super(...arguments)
        this.state = {
            firstName: "Micheal",
            lastName: "Jackson",
            inputValue: "React",
            textareaValue: "Comment",
            selectValue: 0,
            radioValue: "Yes",
            checkboxValue: ["apples", "bananas"],
            form: {
                email: '',
                password: ''
            }
        }
        this.handleInput = this.handleInput.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleTextareaChange = this.handleTextareaChange.bind(this)
        this.handleSelectChange = this.handleSelectChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInput(event) {
        let _this = event.target
        let target = {
            isChecked: _this.type === "checkbox" ? _this.checked : undefined,
            value: _this.value,
            name: _this.name
        }
        console.log(target.isChecked !== undefined)
        this.setState({
            [target.name]: target.isChecked !== undefined 
                    ? (target.isChecked 
                        ? [...this.state.checkboxValue, target.value] 
                        : this.state.checkboxValue.filter(item => item !== target.value)) 
                    : target.value
        })
    }

    handleChange() {
        let val = this.refs.name.value
        this.setState({
            inputValue: val.substr(0, 50)
        })
    }

    handleTextareaChange(event) {
        let val = event.target.value
        this.setState({
            textareaValue: val
        })
    }
    
    handleSelectChange(event) {
        let val = event.target.value
        this.setState({
            selectValue: val
        })
    }

    handleSubmit(event) {
        event.preventDefault()

        let _this = event.target;
        let form = {
            email: _this.email.value,
            password: _this.password.value
        }

        this.setState({
            form: form
        })
    }

    capitalize(str) {
        return str.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase())
    }

    render() {
        let cities = ["London", "Manchester", "Washington DC", "Stockholm", "Bangladesh", "Hanoi", "Hochiminh"]
        let citiesList = cities.map((city, index) => (
            <option key={index} value={index}>{city}</option>
        ))
        let foods = this.state.checkboxValue.map((food, index) => (
            <span key={index} className="btn btn-outline-info btn-sm m-r-1 m-l-1">{this.capitalize(food)}</span>
        ))
        return(
            <div className="container">
                <h3 className="bg-info p-a-1">Forms</h3>
                <div className="col-xs-6">
                    <div className="m-t-1 m-b-1">
                        <div className="form-group">
                            <label>First Name: {this.state.firstName}</label>
                            <input type="text" name="firstName" 
                                    value={this.state.firstName} 
                                    className="form-control" 
                                    onChange={this.handleInput} />
                        </div>
                        <div className="form-group">
                            <label>Last Name: {this.state.lastName}</label>
                            <input type="text" name="lastName" 
                                    value={this.state.lastName} 
                                    className="form-control" 
                                    onChange={this.handleInput} />
                        </div>
                        <div className="form-group">
                            <label>Name: {this.state.inputValue}</label>
                            <input type="text" value={this.state.inputValue} 
                                    ref="name" 
                                    className="form-control" 
                                    onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Comment: {this.state.textareaValue}</label>
                            <textarea rows="10" 
                                className="form-control" 
                                onChange={this.handleTextareaChange} 
                                value={this.state.textareaValue}></textarea>
                        </div>
                        <div className="form-group">
                            <label>City: <span className="btn btn-outline-info btn-sm m-a-1">{cities[this.state.selectValue]}</span></label>
                            <select value={this.state.selectValue} 
                                    onChange={this.handleSelectChange} 
                                    className="form-control">
                                {citiesList}
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Would you like to drink coffee? {this.state.radioValue}</label>
                            <div className="radio">
                                <label><input type="radio" 
                                    name="radioValue" 
                                    onChange={this.handleInput} 
                                    checked={this.state.radioValue == "Yes"} 
                                    value="Yes" /> Yes</label>
                            </div>
                            <div className="radio">
                                <label><input type="radio" 
                                    name="radioValue" 
                                    onChange={this.handleInput} 
                                    checked={this.state.radioValue == "No"} 
                                    value="No" /> No</label>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>What kind of foods do you like? {foods}</label>
                            <div className="checkbox">
                                <label><input type="checkbox" 
                                    name="checkboxValue"
                                    onChange={this.handleInput}
                                    checked={this.state.checkboxValue.includes("apples")}
                                    value="apples" /> Apples</label>
                            </div>
                            <div className="checkbox">
                                <label><input type="checkbox" 
                                    name="checkboxValue"
                                    onChange={this.handleInput}
                                    checked={this.state.checkboxValue.includes("avocadors")}
                                    value="avocadors" /> Avocadors</label>
                            </div>
                            <div className="checkbox">
                                <label><input type="checkbox" 
                                    name="checkboxValue"
                                    onChange={this.handleInput}
                                    checked={this.state.checkboxValue.includes("bananas")}
                                    value="bananas" /> Bananas</label>
                            </div>
                            <div className="checkbox">
                                <label><input type="checkbox" 
                                    name="checkboxValue"
                                    onChange={this.handleInput}
                                    checked={this.state.checkboxValue.includes("blueberries")}
                                    value="blueberries" /> Blueberries</label>
                            </div>
                            <div className="checkbox">
                                <label><input type="checkbox" 
                                    name="checkboxValue"
                                    onChange={this.handleInput}
                                    checked={this.state.checkboxValue.includes("oranges")}
                                    value="oranges" /> Oranges</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-6">
                    <div className="card">
                        <div className="card-block">
                            <form onSubmit={this.handleSubmit} method="post">
                                <h4 className="card-title m-b-3 text-md-center">Log In</h4>
                                <div className="form-group">
                                    <label>Email: {this.state.form.email}</label>
                                    <input type="text" className="form-control" name="email" />
                                </div>
                                <div className="form-group">
                                    <label>Password: {this.state.form.password}</label>
                                    <input type="password" className="form-control" name="password" />
                                </div>
                                <button type="submit" className="btn btn-primary m-t-2">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<Search />, document.getElementById("app"))