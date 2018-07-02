import React from 'react';

const MessageBody = props => (
    <div>
        <div className="row">
            <div className="col m12">
                <h6 className="center-align">Earn points by clicking on the image, but you click on the same image twice.</h6>
            </div>
        </div>
        <div className="row">
            <div className="col m12">
                <h4 className="center-align">{props.message}</h4>
            </div>
        </div>
    </div>
);

export default MessageBody;