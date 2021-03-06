import React, { Component } from 'react';
import { BucketListForm }   from '../presentations/BucketListForm';
import { connect }          from 'react-redux';
import Dialog               from 'material-ui/Dialog';
import RaisedButton         from 'material-ui/RaisedButton';
import FlatButton           from 'material-ui/FlatButton';
import AlertContainer       from 'react-alert'
import Notifications, {notify} from 'react-notify-toast';
import EditForm             from '../presentations/EditForm';
import BucketList         from '../presentations/BucketLists';
import Items                from '../presentations/Items';
import CreateItemForm       from '../presentations/CreateItemForm';
import EditItemForm         from '../presentations/EditItemForm'
import  * as actions        from '../../actions/bucketListActions';
import {logoutUser}         from '../../actions/UserActions'

class DashBoard  extends Component{
  constructor(props){
    super(props);
    this.state = {
      modal: false,
      editModal: false,
      id: null,
      showItems: false,
      editData: {
        title: '',
        description: ''
      },
      itemEditData: {
        item: '',
        status: false
      },
      bucketData: {
        title: '',
        description: ''
      },
      itemData: {
        item: '',
        status: false
      }
    }


  }

  componentWillMount(){
    this.props.getBuckets();
  }

  onChange = (e) => {
    e.preventDefault();
    const { bucketData } = this.state;
    bucketData[e.target.name] = e.target.value
    this.setState(bucketData);
  };

  onEditChange = (e) => {
    e.preventDefault();
    const { editData } = this.state;
    editData[e.target.name] = e.target.value
    this.setState(editData);
  };

  onSubmit = e => {
    e.preventDefault();
    const newBucket = {
      title: this.state.bucketData.title,
      description: this.state.bucketData.description
  }

    this.props.createBucket(newBucket);
    this.setState({
      bucketData: {
        title: '',
        description: ''
      }
    })
    if(this.props.bucketListData.createBucketStatus === 201){
        this.props.getBuckets();
    }
    setTimeout(() => {
        if(this.props.bucketListData.createBucketStatus === 201){
          const { bucketCreateMessage } = this.props.bucketListData;
          let myColor = {background: '#0E1717', text: '#FFFFFF'}
          notify.show(bucketCreateMessage, 'success', 5000, )
        }else if(this.props.bucketListData.createBucketStatus === 409 ){
          const { createConflictError } = this.props.bucketListData;
          let myColor = { background: "red", text: '#FFFFFF'}
          notify.show(createConflictError, "error", 5000)
        }
    }, 1000);
}

  onEditSubmit =  e => {
    e.preventDefault();
    const bucketUpdate = {
      title: this.state.editData.title,
      description: this.state.editData.description
    }
    const { current_id } = this.props.bucketListData;
    this.props.editBucket(current_id, bucketUpdate)
    this.setState({
      modal: !this.state.modal,
      editData: {
        title: '',
        description: ''
      }
    });
    setTimeout(() => {
        if(this.props.bucketListData.editBucketStatus === 200) {
            let message = 'Changes successfully saved'
            let myColor = {background: 'green', text: '#FFFFFF'}
            notify.show(message, 'success', 5000, )
        }else{
            const  bucketEditError = 'Invalid bucket details'
            let myColor = { background: 'red', text: '#FFFFFF' }
            notify.show(bucketEditError, 'error', 5000)
        }

    }, 1000)
  }


  handleDeleteClick = id => e => {
    if(id) {
      this.props.deleteBucket(id);
    }
    if(this.props.bucketListData.bucketlists.length < 10) {
        this.props.getBuckets();
    }
    setTimeout(() =>{
        if(this.props.bucketListData.deleteBucketStatus === 200){
            const { bucketDeleteMessage } = this.props.bucketListData;
            let myColor = {background: 'red', text: '#FFFFFF'}
            notify.show(bucketDeleteMessage, 'warning', 5000, )
        }else if(this.props.bucketListData.deleteBucketStatus === 409){
            let myColor = {background: 'red', text: '#FFFFFF'}
            notify.show(this.props.bucketListData.bucketDeleteMessage, )
        }
    }, 1000)

  }


  toggle = data => e => {
    e.preventDefault();
    this.setState({
      modal: !this.state.modal
    });
    if(data) {
      this.props.selectId(data.id, data.title, data.description)
      console.log("datata description", data.description)
      this.setState({
          editData: {
              title: data.title,
              description: data.description
          }
      })
    }
  }

  toggleEdit = data => e => {
    e.preventDefault();
    this.setState({
      editModal: !this.state.editModal
    });
    if(data) {
      this.props.selectItemId(data.id)
      this.setState({
          itemEditData: {
            item: data.item_name,
            status: false
          }
      })
    }
  }
  hideItems = (e) => {
    e.preventDefault();
    this.setState({
      showItems: !this.state.showItems
    })
    this.props.disableSearchItem();
  }
  showItems = data => e => {
    e.preventDefault();
    this.setState({
      showItems: !this.state.showItems
    })
    this.props.selectId(data.id, data.title, data.description)
    this.props.getItems(data.id);
    this.props.setSearchItem();
  }

  handleItemOnChange = (e) => {
    e.preventDefault();
    const { itemData } = this.state;
    itemData[e.target.name] = e.target.value;
    this.setState(itemData)
  }

  handleItemSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      item: this.state.itemData.item,
      status: false
    }
    const { current_id } = this.props.bucketListData
    this.props.createItem(current_id, newItem)
    setTimeout(() => {
        if(this.props.bucketListData.createBucketItemStatus === 201){
            let message = 'Item was successfully created'
            let myColor = {background: 'green', text: '#FFFFFF'}
            notify.show(message, 'success', 5000, )
        }else if(this.props.bucketListData.createBucketItemStatus === 409){
            console.log('Bucket Item error message ===>.', this.props.bucketListData.bucketItemsError);
            const { bucketItemsError } = this.props.bucketListData;
            let myColor = { background: 'red', text: '#FFFFFF'}
            notify.show(bucketItemsError, 'error', 5000)
        }else if(this.props.bucketListData.createBucketItemStatus === 500){
            let message = 'Invalid.You are trying to add an Item that already exist in another Bucket'
            let myColor = { background: 'red', text: '#FFFFFF'}
            notify.show(message, 'error', 5000)
        }
    }, 1000)
    this.setState({
      modal: false,
      itemData: {
        item: '',
        status: false
      }
    })
  }

  handleItemEditOnChange = (e) => {
    e.preventDefault();
    const { itemEditData } = this.state;
    itemEditData[e.target.name] = e.target.value;
    this.setState(itemEditData)
  }

  handleEditItemSubmit = (e) => {
    e.preventDefault();
    const { current_id } = this.props.bucketListData;
    const { current_item_id } = this.props.bucketListData
    const itemEditData = {
      item: this.state.itemEditData.item,
      status: false
    }
    this.props.editItem(current_id, current_item_id, itemEditData)
    setTimeout(() => {
        const { EditBucketItemsMessage } = this.props.bucketListData;
        const myColor = {background: 'red', text: '#FFFFFF'}
        notify.show(EditBucketItemsMessage, 'success', 5000,)
    })
    this.setState({
        itemEditData: {
          item: '',
          status: false
        },
    })
  }

  handleItemDeleteClick = id => (e) => {
    e.preventDefault();
    const { current_id } = this.props.bucketListData;
    this.props.deleteItem(current_id, id);
    setTimeout(() => {
        if(this.props.bucketListData.deleteBucketItemStatus === 200){
            const { DeleteBucketItemMessage } = this.props.bucketListData;
            let myColor = {background: 'red', text: '#FFFFFF'}
            notify.show(DeleteBucketItemMessage, 'warning', 5000, )
        }
    }, 1000)

  }
  renderBuckets(){
    // This function renders Buckets
    const actions = [
      <FlatButton
        label='Cancel'
        primary={true}
        onClick={this.toggle()}
      />
    ];
    return (
        <div>
        <BucketListForm
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          bucketData={this.state.bucketData}
        />

        <BucketList
          getBucketsPages={this.props.getBucketsPages}
          disableSearchBucket={this.props.disableSearchBucket}
          bucketlistsData={this.props.bucketListData}
          handleClick={this.toggle}
          handleDeleteClick={this.handleDeleteClick}
          showItems={this.showItems}
        />
        <div>
          <Dialog
            actions={actions}
            modal={false}
            open={this.state.modal}
            onRequestClose={this.toggle}>
            <EditForm
              editData={this.state.editData}
              onChange={this.onEditChange}
              onSubmit={this.onEditSubmit}
            />
          </Dialog>
        </div>
      </div>
    )
  }

  renderItems(){
    // This function renders items
    const actions = [
      <FlatButton
        label='Cancel'
        primary={true}
        onClick={this.toggle()}
      />
    ];
    const actionsEdit = [
      <FlatButton
        label='Cancel'
        primary={true}
        onClick={this.toggleEdit()}
      />
    ];
    return (
        <div className='item-view'>
        <Items
          hideItems={this.hideItems}
          id={this.props.bucketListData.current_id}
          bucketListData={this.props.bucketListData}
          handleEdit={this.toggleEdit}
          handleClick={this.toggle}
          handleDeleteClick={this.handleItemDeleteClick}
        />
        <div>
          <Dialog
            actions={actions}
            modal={false}
            open={this.state.modal}
            onRequestClose={this.toggle}>
            <CreateItemForm
              itemData={this.state.itemData}
              onChange={this.handleItemOnChange}
              onSubmit={this.handleItemSubmit}
            />
          </Dialog>

          <Dialog
            actions={actionsEdit}
            modal={false}
            open={this.state.editModal}
            onRequestClose={this.toggleEdit}>
            <EditItemForm
              onChange={this.handleItemEditOnChange}
              onSubmit={this.handleEditItemSubmit}
              itemEditData={this.state.itemEditData}/>
          </Dialog>
        </div>
      </div>
    )
  }

    render(){
      return (
        <div className='dash-container'>
          <Notifications  />
          {this.state.showItems ? this.renderItems() : this.renderBuckets()}
        </div>
      )
    }
}

const mapStateToProps = (state) => {
  return {
    bucketListData: state.buckets
  }
}

const mapDispactToProps = (dispatch) => {
  return {
    createBucket: (newBucket) => dispatch(actions.createBucket(newBucket)),
    getBuckets: () => dispatch(actions.getBuckets()),
    editBucket: (id, bucketUpdate) => dispatch(actions.editBucket(id, bucketUpdate)),
    selectId: (id, title, description) => dispatch(actions.selectId(id, title, description)),
    deleteBucket: (id) => dispatch(actions.deleteBucket(id)),
    logoutUser: () => dispatch(logoutUser()),
    getItems: (id) => dispatch(actions.getItems(id)),
    createItem: (id, newItem) => dispatch(actions.createItem(id, newItem)),
    editItem: (bucket_id, id, itemEditData) => dispatch(actions.editItem(bucket_id, id, itemEditData)),
    selectItemId: (id) => dispatch(actions.selectItemId(id)),
    deleteItem: (bucket_id, id) => dispatch(actions.deleteItem(bucket_id, id)),
    setSearchItem: () => dispatch(actions.setSearchItem()),
    disableSearchItem: () => dispatch(actions.disableSearchItem()),
    disableSearchBucket:() => dispatch(actions.disableSearchBucket()),
    getBucketsPages: (url) => dispatch(actions.getBucketsPages(url))
  }
}
export default connect(mapStateToProps, mapDispactToProps)(DashBoard);
