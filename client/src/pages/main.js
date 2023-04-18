import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';
import ReadmeForm from '../components/Readme_form';
import TestForm from '../components/testForm';






const MainPage = () => {
    //React State Imports for Forms

    //Return Dialog
    return (
        <div className="container text-center" cz-shortcut-listen="true">
            <ReadmeForm />
        </div>
    )
}

export default MainPage;