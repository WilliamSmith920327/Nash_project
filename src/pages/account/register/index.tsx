import { Navigate, Link } from 'react-router-dom';
import { Alert, Row, Col, ProgressBar } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import AccountLayout from '../AccountLayout';
import { useRegister } from '../hooks';
import {  VerticalForm } from 'components';
import * as yup from 'yup';
import { Wizard, Steps, Step } from 'react-albus';
import { yupResolver } from '@hookform/resolvers/yup';
import General from './General';
import Email from './Email';
import Security from './Security';
import { useState } from "react";

export type UserData = {
    first_name: string,
    last_name: string, 
    middle_name:string, 
    phone: string, 
    country: string, 
    birthday: string, 
    photo: string
};

const BottomLink = () => {
    const { t } = useTranslation();

    return (
        <Row className="mt-3">
            <Col className="text-center">
                <p className="text-muted">
                    {t('Already have account?')}{' '}
                    <Link to={'/account/login'} className="text-muted ms-1">
                        <b>{t('Log In')}</b>
                    </Link>
                </p>
            </Col>
        </Row>
    );
};

const Register = () => {
    const { userSignUp, error } = useRegister();
    const [general, setGeneral] = useState({ first_name: "", last_name: "", middle_name:"", phone: "", country: "", birthday: '', photo: "" });
    // const [email, setEmail] = useState({ email: "", password: "", recovery_email: "" });

    const validationSchemaGneral = yupResolver(
        yup.object().shape({
            first_name: yup.string().required('Please enter First Name'),
            last_name: yup.string().required('Please Enter '),
            phone: yup.number(),
            country: yup.string().required('Please enter your country'),
            birthday: yup.date(),
        })
    );
    const validationSchemaEmail = yupResolver(
        yup.object().shape({
            emailAdress: yup.string().required('Please enter Email Eddress'),
            emailPassword: yup.string().required('Please enter Last Name'),
            recoveryEmail: yup.string(),
        })
    );

    return (
        <>
            {userSignUp ? <Navigate to={'/account/confirm'}></Navigate> : null}

            <AccountLayout bottomLinks={<BottomLink />} >
                {error && (
                    <Alert variant="danger" className="my-2">
                        {error}
                    </Alert>
                )}

                <div>
                    <ul className='nav nav-pills p-0 nav-justified'>
                        <li className='nav-item h3'>GENERAL</li>
                        <li className='nav-item h3'>WORK EMAIL</li>
                        <li className='nav-item h3'>SECURITY</li>
                    </ul>
                </div>
                <div>
                    <Wizard
                        render={({ step, steps }) => (
                            <>
                                <ProgressBar
                                    variant="success"
                                    now={((steps.indexOf(step) + 1) / steps.length) * 100}
                                    className="mb-3 progress-lg"
                                    isChild={true}
                                />
                                <Steps>
                                    <Step
                                        id="general"
                                        render={({ next }) => (
                                            <VerticalForm 
                                                onSubmit={(event, values) => {
                                                    next();
                                                    setGeneral({
                                                        "first_name": event.first_name, 
                                                        "last_name": event.last_name, 
                                                        "middle_name": event.middle_name, 
                                                        "phone": event.phone, 
                                                        "country": event.country, 
                                                        "birthday": event.birthday, 
                                                        "photo": event.photo });
                                                }}
                                                resolver={validationSchemaGneral} 
                                                children={[<General data={general} name="general"/>]}
                                            />
                                        )}
                                    />
                                    <Step
                                        id="workEmail"
                                        render={({ next, previous }) => (
                                            <VerticalForm onSubmit={(event, values) => next()} resolver={validationSchemaEmail} children={[<Email name="email" previous={previous}/>]}/>
                                        )}
                                    />
                                    <Step
                                        id="security"
                                        render={({ previous }) => (
                                            <Security previous={previous}/>
                                        )}
                                    />
                                </Steps>
                            </>
                        )}
                    />
                </div>
                
            </AccountLayout>
        </>
    );
};

export default Register;
