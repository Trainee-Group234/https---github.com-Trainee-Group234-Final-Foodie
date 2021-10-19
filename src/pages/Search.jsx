import React, { Component } from 'react'
import { Button, Form, FormControl } from 'react-bootstrap';

export default class Search extends Component {
    render() {
        return (
            <div>
<Form className="d-flex">
<FormControl
  type="search"
  placeholder="Search"
  className="mr-2"
  aria-label="Search"
/>
<Button variant="outline-success">Search</Button>
</Form>

            </div>
        );
    }
}
