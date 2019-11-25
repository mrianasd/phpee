import React from 'react';

class Popup extends React.Component {
constructor(props){
    super(props);
    this.state={

    }
}

    render() {
        return (
            <div >  
               <button type="button" class="btn btn-create" data-toggle="modal" data-target="#exampleModal">{this.props.title}</button>

                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        {this.props.content}
                    </div>
                    {/* <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div> */}
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Popup;
