import React from 'react';
import LinearBar from '../elements/ProgressBar';
// import { useNavigate } from 'react-router-dom';

const EnterDetail = () => {

    

    return ( 
        <div className="body">
            <div className="box">
                <div className="innerbox" style={{margin:' 110px 100px'}}>
                    <div className="bar" style={{display:'flex', width:'196px', margin:'0 auto'}}> 
                        <LinearBar />
                    </div>   
                    <div className="data">
                        <div className="email">
                            <h6>YOUR EMAIL</h6>
                            <input type="text" placeholder=' johndoe19@gmail.com' />
                        </div>
                        <div className="name">
                            <div className="fn">
                                <h6>YOUR FIRST NAME</h6>
                                <input type="text" placeholder=' John' />
                            </div>
                            <div className="ln">
                                <h6>YOUR LAST NAME</h6>
                                <input type="text" placeholder=' Doe' />
                            </div>
                        </div>
                        <div className="submit">Submit</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default EnterDetail;