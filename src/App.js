import React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';

const TopicsList = () => {
	return(
		<div>
			<h1>TOPIC LIST PAGE</h1>
		</div>
	);
}

const TopicDetail = (props) => {
	console.log(props)
	return(
		<div>
			<h1>TOPIC DETAIL PAGE: {props.match.params.topicId}</h1>
		</div>
	);
}


function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
    </div>
  );
}

export default App;
