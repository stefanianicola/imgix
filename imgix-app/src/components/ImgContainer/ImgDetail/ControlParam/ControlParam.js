import React, { useContext } from 'react';
import './ControlParam.scss';
import { DataContext } from '../../../../context/DataContext';
import { Form, DropdownButton } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ControlParam = () => {
    const { btn, addParamUrl, } = useContext(DataContext)

    //when the value of the range changes it saves the data in an array and sets it in params as state
    const handlerValue = (e) => {
        if (e.target.name === undefined) {
            if (e.target.value === 'nome' || e.target.value === 'h' || e.target.value === 'v' || e.target.value === 'hv') {
                addParamUrl("flip", e.target.value)
            } else {
                addParamUrl("orient", e.target.value)
            }
        } else {
            addParamUrl(e.target.name, e.target.value)
        }
    }

    return (
        <div>
            {
                btn.alias === 'flip' ? (
                    <DropdownButton
                        variant="outline-secondary"
                        title={btn.name}
                        id="input-group-dropdown-2"
                    >
                        {
                            btn.rango.map((b, i) => {
                                return (
                                    <option key={i} onClick={handlerValue}>{b}</option>
                                )
                            })
                        }
                    </DropdownButton>
                ) : (
                    btn.alias === 'orient' ? (
                        <DropdownButton
                            variant="outline-secondary"
                            title={btn.name}
                            id="input-group-dropdown-1"
                        >
                            {
                                btn.value.map((b, i) => {
                                    return (
                                        <option key={i} onClick={handlerValue}>{b}</option>
                                    )
                                })
                            }
                        </DropdownButton>
                    ) :
                        (
                            <Form>
                                <Form.Group controlId="formBasicRange">
                                    <Form.Label>{`${btn.name}`}</Form.Label>
                                    <Form.Control type="range"
                                        name={`${btn.alias}`}
                                        min={`${btn.min}`}
                                        max={`${btn.max}`}
                                        onChange={handlerValue} />
                                    <p className="minimo">{`${btn.min}`} </p>
                                    <p className="maximo">{`${btn.max}`} </p>
                                </Form.Group>
                            </Form>
                        )
                )
            }

        </div>
    )
}
export default ControlParam;