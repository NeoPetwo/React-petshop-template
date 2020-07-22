import React from 'react';
import axios from 'axios';
import { TagInput } from 'reactjs-tag-input'

import { SERVER_URL } from '../../variables';
import '../AdminInventoryAdd/AdminInventoryAdd.scss';

export default class AdminInventoryAdd extends React.Component {
  state = {
    title: "",
    price: "",
    description: "",
    quantity: "",
    quantitySold: "",
    img: "", //Image path
    slug: "",
    qttSelected: 1,
    tags: "",
    selectedImg: null //Image file
  };

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
  handleChangeQuantitySold = (event) => {
    if (event.target.value <= 0) return;
    this.setState({quantitySold: event.target.value});
  }
  onTagsChanged = (event) => {
    this.setState({tags: event.target.value});
  }

  cancelSubmission = () => {
    this.props.history.push('/admin/inventory/consult');
  }

  onChangeImg = (event) =>{
    console.log(event.target.files[0]);
    this.setState({
      selectedImg: event.target.files[0]
    });
  }

  parseTags = () => {
    return this.state.tags.split(" ");
  }

  handleSubmit = async (e) => {
    if (this.state.selectedImg === null) {
      alert('Select an image');
      e.persist();
      // e.preventDefault();
      return false;
    }

    // Images upload
    let data = new FormData(); 
    data.append('file', this.state.selectedImg);
    let res1 = await axios.post(`${SERVER_URL}/products/uploadimg`, data);
    if (res1.status !== 201) {
      alert('Error uploading the image');
      e.persist();
      // e.preventDefault();
      return false;
    }

    let tags = await this.parseTags();

    let res = await axios({
      method: 'POST',
      url: `${SERVER_URL}/products`,
      data: {
        title: this.state.title,
        description: this.state.description,
        slug: this.state.slug,
        price: this.state.price,
        tags: tags,
        img: `/img/${this.state.selectedImg.name}`,
        quantity: this.state.quantity,
        quantitySold: this.state.quantitySold
      }
    });

    if (res.status !== 201) {
      alert('Problem when submitting');  
    } else  {
      alert('Product added!');
      this.props.history.push('/admin/inventory/consult');
    }
  }

  render() {
  return (
    <div class="admin-inventory-add">
      <div class="content-wrapper">
        {/* <!-- New admin form --> */}
        <div class="adm_registration">
            <div class="form-popup" id="add_product">
                <form class="form-container">
                    <h1>Add product</h1>

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

                    <label for="qnt">Quantity sold</label>
                    <input type="number" value={this.state.quantitySold} onChange={this.handleChangeQuantitySold} />

                    <label for="tags">Tags</label>
                    <input type="text" placeholder="" name="tags" onChange={this.onTagsChanged} />

                    {/* <TagInput tags={this.state.tags} onTagsChanged={this.onTagsChanged} /> */}

                    <button type="button" onClick={this.handleSubmit} class="btn">Submit</button>
                    <button type="button" onClick={this.cancelSubmission} class="btn cancel">Cancel</button>
                </form>
            </div>
        </div>
      </div>
    </div>
    
  );
  }
}