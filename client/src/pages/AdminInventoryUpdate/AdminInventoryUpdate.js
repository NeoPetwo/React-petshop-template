import React from 'react';
import axios from 'axios';

import { SERVER_URL } from '../../variables';

export default class AdminInventoryUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        id: "",
        title: "",
        price: "",
        description: "",
        quantity: "",
        img: "",
        slug: "",
        tags: "",
        qttSelected: 1,
        selectedImg: null
    };
    this.fetchInfo();
  }

  fetchInfo = async () => {
      const { productslug } = this.props.match.params;
      let res = await axios({
          method: 'GET',
          url: `${SERVER_URL}/products/${productslug}`
      });
      this.setState({
          id: res.data[0]._id,
          title: res.data[0].title,
          price: res.data[0].price,
          description: res.data[0].description,
          quantity: res.data[0].quantity,
          img: res.data[0].img,
          slug: res.data[0].slug,
          tags: res.data[0].tags
      });
  }

  handleChangeTitle = (event) => {
    this.setState({title: event.target.value});
  }

  handleChangeDescription = (event) => {
    this.setState({description: event.target.value});
  }

  handleChangeSlug = (event) => {
    this.setState({slug: event.target.value});
  }

  handleChangePrice = (event) => {
    this.setState({price: event.target.value});
  }

  handleChangeQuantity = (event) => {
    if (event.target.value <= 0) return;
    this.setState({quantity: event.target.value});
  }

  onChangeImg = (event) =>{
    console.log(event.target.files[0]);
    this.setState({
      selectedImg: event.target.files[0]
    });
  }

  handleSubmit = async (e) => {
    if (this.state.selectedImg === null) {
      alert('Select an image');
      e.persist(); // e.preventDefault();
      return false;
    }

    //Image upload
    let data = new FormData(); 
    data.append('file', this.state.selectedImg);
    let res1 = await axios.post(`${SERVER_URL}/products/uploadimg`, data);
    if (res1.status !== 201) {
      alert('Error uploading the image');
      e.persist(); // e.preventDefault();
      return false;
    }

    let res = await axios({
      method: 'PUT',
      url: `${SERVER_URL}/products/${this.state.id}`,
      data: {
        title: this.state.title,
        description: this.state.description,
        slug: this.state.slug,
        price: this.state.price,
        tags: this.state.tags,
        img:  `/img/${this.state.selectedImg.name}`,
        quantity: this.state.quantity
      }
    });
    e.persist(); // e.preventDefault();

    if (res.status !== 200) {
      alert('Problem when submitting');
      console.log(res);  
    } else  {
      alert('Product updated!');
      this.props.history.push('/admin/inventory/consult');
    }
  }

  cancelUpdate = () => {
    this.props.history.push('/admin/inventory/consult');
  }

  render() {
  return (
    <div class="admin-inventory-update">
      <div class="content-wrapper">

        {/* <!-- Update product form --> */}
        <div class="adm_registration">
            <div class="form-popup" id="update_product">
                {/* <form class="form-container" onSubmit={this.handleSubmit}> */}
                <form class="form-container">
                    <h1>Update an existing product</h1>

                    <label for="picture">Picture:</label>
                    <input type="file" id="picture" name="file" onChange={this.onChangeImg}/>

                    <label for="name">Name</label>
                    <input type="text" value={this.state.title} onChange={this.handleChangeTitle} />

                    <label for="description">Description</label>
                    <input type="text" value={this.state.description} onChange={this.handleChangeDescription} />

                    <label for="slug">Slug</label>
                    <input type="text" value={this.state.slug} onChange={this.handleChangeSlug} />

                    <label for="price">Price</label>
                    <input type="number" value={this.state.price} onChange={this.handleChangePrice} />

                    <label for="qnt">Quantity in stock</label>
                    <input type="number" value={this.state.quantity} onChange={this.handleChangeQuantity} />

                    <label for="tags">Tags</label>
                    <input type="text" placeholder="" name="tags" />

                    <button type="button" onClick={this.handleSubmit} class="btn">Update product</button>
                    <button type="button" class="btn cancel" onClick={this.cancelUpdate} >Cancel</button>
                </form>
            </div>
            </div>
        </div>
    </div>
    
  );
  }
}