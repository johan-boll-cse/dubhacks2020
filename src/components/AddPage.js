import React, {Component} from 'react';
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import {Category} from "@material-ui/icons";

let categories = [
    {
        value: "Cat1",
        label: "Category1"
    },
    {
        value: "Cat2",
        label: "Category2"
    }
];

class AddPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Title: "",
            Description: "",
            ImageUrl: "",
            Category: ""
        }
    }

    handleTitleChange = (event) => {
        this.setState({
            Title: event.target.value
        })
    };

    handleDescriptionChange = (event) => {
        this.setState({
            Description: event.target.value
        })
    };

    handleImageChange = (event) => {
        this.setState({
            ImageUrl: event.target.value
        })
    };

    handleCategoryChange = (event) => {
        this.setState({
            Category: event.target.value
        })
    };

    //Title
    //Image
    //Description
    //Drop down categories
    render() {
        return (
            <div>
                <form className={'search'} noValidate autoComplete="off">
                    <TextField id="Title"
                               label="Title"
                               variant="outlined"
                               fullWidth
                               margin={"normal"}
                               value={this.state.Title}
                               onChange={this.handleTitleChange}
                    />
                    <TextField id="Description"
                               label="Description"
                               variant="outlined"
                               fullWidth
                               margin={"normal"}
                               value={this.state.Description}
                               onChange={this.handleDescriptionChange}
                    />
                    <TextField id="image"
                               label="Image Url"
                               variant="outlined"
                               fullWidth
                               margin={"normal"}
                               value={this.state.ImageUrl}
                               onChange={this.handleImageChange}
                    />
                    <TextField id="categories" xzaq
                               label="Select Category"
                               variant="outlined"
                               fullWidth
                               select
                               margin={"normal"}
                               value={this.state.Category}
                               onChange={this.handleCategoryChange}
                    >
                        {categories.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                    </TextField>
                </form>
            </div>
        )
    }


}

export default AddPage;