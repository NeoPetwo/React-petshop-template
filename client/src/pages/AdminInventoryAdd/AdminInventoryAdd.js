import React from 'react';
import axios from 'axios';
// import { WithContext as ReactTags } from 'react-tag-input';

import { SERVER_URL } from '../../variables';
import '../AdminInventoryAdd/AdminInventoryAdd.scss';

const KeyCodes = {
  comma: 188,
  enter: 13,
};
const delimiters = [KeyCodes.comma, KeyCodes.enter];

export default class AdminInventoryAdd extends React.Component {
  state = {
    title: "",
    price: "",
    description: "",
    quantity: "",
    img: "",
    slug: "",
    qttSelected: 1,
    tags: [
      { id: "Thailand", text: "Thailand" },
      { id: "India", text: "India" }
   ],
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

  handleSubmit = async () => {
    let res = await axios({
      method: 'POST',
      url: `${SERVER_URL}/products`,
      data: {
        title: this.state.title,
        description: this.state.description,
        slug: this.state.slug,
        price: this.state.price,
        tags: ['tag1', 'tag2'],
        img: '/img/birdHouse.png',
        quantity: this.state.quantity
      }
    });

    if (res.status !== 201) {
      alert('Problem when submitting');  
    } else  {
      alert('Product added!');
      this.props.history.push('/admin/inventory/consult');
    }
  }

  cancelSubmission = () => {
    this.props.history.push('/admin/inventory/consult');
  }

  handleDelete = (i) => {
    const { tags } = this.state;
    this.setState({
      tags: tags.filter((tag, index) => index !== i),
    });
  }

  handleAddition = (tag) => {
    this.setState(state => ({ tags: [...state.tags, tag] }));
  }

  handleDrag = (tag, currPos, newPos) => {
    const tags = [...this.state.tags];
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    this.setState({ tags: newTags });
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
                    <input type="file" id="picture" name="picture"/>

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