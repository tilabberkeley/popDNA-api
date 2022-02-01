// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../components/Home'
import Docs from '../components/Docs'
import Login from '../components/Login'
import Signup from '../components/Signup'
import NotFound from '../components/NotFound'
import 'foundation-sites/dist/css/foundation.min.css';
import $ from 'jquery';
import 'what-input';


window.jQuery = $;
require('foundation-sites');

$(document).on('turbolinks:load', function() {
  $(function(){ $(document).foundation(); });
});


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Router forceRefresh={true}>
        <Routes>
          
          <Route exact path="/" element={<Home />} />
          <Route exact path="/docs" element={<Docs />} />
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
          <Route path="*" element={<NotFound />} />
          
        </Routes>
    </Router>,
    document.body.appendChild(document.createElement('div')),
  )
})
