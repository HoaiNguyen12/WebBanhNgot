import React, { Component } from 'react';

class ProductCategory extends Component {
    render() {
        return (

            <Modal showOverlay={false}>
                <Modal.Header>
                    <Modal.Title>
                        Modal title
        </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormGroup>
                        <Label>Email address</Label>
                        <Input
                            type="email"
                            placeholder="Email"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Password</Label>
                        <Input
                            type="password"
                            placeholder="Password"
                        />
                    </FormGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button>Cancel</Button>
                    <Button btnStyle="primary">Save</Button>
                </Modal.Footer>
            </Modal>

        )
    }
}

export default ProductCategory;
