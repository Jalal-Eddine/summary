# Notes from Zero to Mastery course
## IMPORT
```js
// we use destructring when './robots' don't export by default one thing
import {robots, something} from './robots'
export const robots = [...
```
## PROPS
## STATE
```js
    onSearchChange = (event) => {
        this.setState({searchField: event.target.value}) //method to update the state
    }
```
> We use arrow function when whenever we create a function that's not a parte of `React.Component`
## CHILDREN
## React.Component
* [React components](https://reactjs.org/docs/react-component.html)
## ErrorBoundry:
```js
import React, {Component} from 'react';

class ErrorBoundry extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError : false
        }
    }

    componentDidCatch(error, info){
        this.setState({hasError: true})
    }
    render(){
        if (this.state.hasError){
            return <h1>Sorry there's an Error</h1>
        } else {
          return  this.props.children 
        }
    }
}

export default ErrorBoundry;
```
## notes from the projects
```js
    <input
    // {onRouteChange('home')} will run the function
    // {()=> onRouteChange('home')} will run the function after click
        onClick = {()=> onRouteChange('home')}
        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
        type="submit"
        value="Sign in"
    />
