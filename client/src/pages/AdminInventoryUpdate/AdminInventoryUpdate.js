import React from 'react';

export default class AdminInventoryUpdate extends React.Component {
  render() {
  return (
    <div class="admin-inventory-update">
      <div class="content-wrapper">

        {/* <!-- Update product form --> */}
        <div class="adm_registration">
            <div class="form-popup" id="update_product">
                <form action="#" class="form-container">
                    <h1>Update an existing product</h1>
                    <select name="product_listing">
                        <option value="">- Select a product -</option>
                    </select>
                    <label for="name">Name</label>
                    <input type="text" placeholder="Enter name" name="name" required/>

                    <label for="id">Id</label>
                    <input type="text" placeholder="" name="id"/>

                    <label for="picture">Picture:</label>
                    <input type="file" id="picture" name="picture"/>

                    <label for="description">Description</label>
                    <input type="text" placeholder="" name="description" required/>

                    <label for="price">Price</label>
                    <input type="number" placeholder="$" name="price" required/>

                    <label for="qnt">Quantity in stock</label>
                    <input type="number" placeholder="" name="qnt" required/>

                    <button type="submit" class="btn">Create</button>
                    <button type="button" class="btn cancel" onclick="closeForm(2)">Cancel</button>
                </form>
            </div>
            </div>
        </div>
    </div>
    
  );
  }
}