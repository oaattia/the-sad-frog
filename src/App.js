import React, {Component} from 'react';
import './App.css';
import _ from 'lodash';
import {IMAGES} from './constants';
import swal from 'sweetalert';
import './ar'

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            image: _.sample(IMAGES),
            email: '',
            message: '',
        };

        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeMessage = this.handleChangeMessage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeEmail(event) {
        this.setState({
            email: event.target.value
        });
    }

    handleChangeMessage(event) {
        this.setState({
            message: event.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let sad_image = document.getElementById('sad-frog-image').getAttribute('src')
        window.emailjs.send("gmail", "template_X1a6cb34", {
            email: this.state.email,
            message: this.state.message,
            image: sad_image
        }).then(
            response => {
                swal("", "تم الارسال", "success")
                document.getElementById('email').value = '';
                document.getElementById('message').value = '';
            },
            error => {
                console.log("FAILED", error);
            }
        );
    }

    handleGreeting() {
        let day = new Date();
        let hours = day.getHours();

        if (hours > 12) {
            return "مساء الطين عليك"
        } else {
            return "نهارك زفت"
        }

    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h1>{ this.handleGreeting() }</h1>
                </div>
                <p className="App-intro">
                    <img src={this.state.image} alt="Sad Frog" title="Sad Frog Image" id="sad-frog-image"/>
                </p>


                <div id="wrapper">
                    <div id="subscribeBox">
                        <p>ابو ام كدا يعني</p><br/>
                        <form className="subscribeForm" onSubmit={this.handleSubmit} data-parsley-validate="">
                            <input required data-parsley-trigger="change" onChange={this.handleChangeEmail}
                                   id="email" type="email" placeholder="البريد الالكتروني" name="email"/>
                            <textarea required onChange={this.handleChangeMessage} name="message" id="message"
                                      cols="30" rows="10" placeholder="الرساله"></textarea>

                            <input id="submit" type="submit" value="يلا ابعت"/>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
