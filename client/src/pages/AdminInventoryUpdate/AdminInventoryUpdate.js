// Daniel da Rocha Fróes 10255956
// Gabriel Santos Nicolau 10684600
// Kaio Tadeu Rodrigues 7561083
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
        quantitySold: "",
        img: "",
        slug: "",
        tags: "",
        qttSelected: 1,
        selectedImg: null
    };
    this.fetchInfo();
  }

  //Requisição para pegar as informações do produto selecionado apartir do slug da url
  fetchInfo = async () => {
      const { productslug } = this.props.match.params;
      let res = await axios({
          method: 'GET',
          url: `${SERVER_URL}/products/${productslug}`
      });

      console.log(res.data);
      if (res.data[0] === undefined || res.data[0] === null) {
        this.props.history.push('/error404');
        return;
      }


      let tags = res.data[0].tags;
      let tagsStr = "";
      for (let i=0; i<tags.length; i++) {
        tagsStr += (" " + tags[i]);
      }
      console.log(tags);
      console.log(tagsStr);

      this.setState({
          id: res.data[0]._id,
          title: res.data[0].title,
          price: res.data[0].price,
          description: res.data[0].description,
          quantity: res.data[0].quantity,
          quantitySold: res.data[0].quantitySold,
          img: res.data[0].img,
          slug: res.data[0].slug,
          tags: tagsStr
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
    if (event.target.value < 0) return;
    this.setState({price: event.target.value});
  }

  handleChangeQuantity = (event) => {
    if (event.target.value < 0) return;
    this.setState({quantity: event.target.value});
  }

  handleChangeQuantitySold = (event) => {
    if (event.target.value < 0) return;
    this.setState({quantitySold: event.target.value});
  }

  onTagsChanged = (event) => {
    this.setState({tags: event.target.value});
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
  //Requisição para editar o produto
  handleSubmit = async (e) => {
    if (this.state.selectedImg !== null) {
      //Image upload
      let data = new FormData(); 
      data.append('file', this.state.selectedImg);
      let res1 = await axios.post(`${SERVER_URL}/products/uploadimg`, data);
      if (res1.status !== 201) {
      alert('Error uploading the image');
      e.persist(); // e.preventDefault();
      return false;
      }
    }

    let tags = await this.parseTags();

    //Define img path
    let img = null;
    if (this.state.selectedImg === null || this.state.selectedImg === undefined) {
        img = this.state.img;
    } else {
        img = `/img/${this.state.selectedImg.name}`;
    }

    let res = await axios({
      method: 'PUT',
      url: `${SERVER_URL}/products/${this.state.id}`,
      data: {
        title: this.state.title,
        description: this.state.description,
        slug: this.state.slug,
        price: this.state.price,
        tags: tags,
        img: img,
        quantity: this.state.quantity,
        quantitySold: this.state.quantitySold
      }
    }).then((res) => {
      if (res.status !== 200) {
        alert('Problem when submitting');
        console.log(res);  
      } else  {
        alert('Product updated!');
        this.props.history.push('/admin/inventory/consult');
        e.persist(); // e.preventDefault();
      }
    })
    .catch((err) => {
      alert('Slug already used by another product');
      return;
    });
    
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

                    <label for="qnt">Quantity sold</label>
                    <input type="number" value={this.state.quantitySold} onChange={this.handleChangeQuantitySold} />

                    <label for="tags">Tags (separated by space)</label>
                    <input type="text" value={this.state.tags} name="tags" onChange={this.onTagsChanged} />

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