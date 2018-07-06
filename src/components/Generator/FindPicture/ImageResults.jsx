import React from "react";
import PropTypes from "prop-types";
import {withStyles } from "@material-ui/core/styles";

import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import IconButton from "@material-ui/core/IconButton";
import ZoomIn from "@material-ui/icons/ZoomIn";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button"
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";

//style
import generatorStyle from "assets/jss/material-kit-react/components/generatorStyle.jsx";


class ImageResults extends React.Component{

    state={
        open: false,
        currentImg: ''
    }

    // open image
    handleOpen = img => {
        this.setState({ open: true, currentImg: img})
    }

    //close image
    handleClose = () => {
        this.setState({ open: false})
    }

    render() {
        let imageListContent;
        const { images, searchText, classes } = this.props;
        //check the images
        if(images){
            imageListContent = (
                <GridList  cellHeight={180} cols={3} spacing={1} className={classes.gridlist}>
                    <GridListTile 
                        className={classes.subhead}
                        key="Subheader" 
                        style={{height: "auto"}}
                    >
                        <ListSubheader component="div">{searchText}</ListSubheader>
                    </GridListTile>
                    {/* map through images */}
                    {images.map(img => (
                        <GridListTile key={img.id} col={3 || 4} >
                            <img src={img.largeImageURL} alt={img.tags}/>
                            <GridListTileBar
                                title={img.tags}
                                subtitle={<span>by:<strong> {img.user}</strong></span>}
                                actionIcon={
                                    <IconButton onClick={() => this.handleOpen(img.largeImageURL)}>
                                        <ZoomIn color="primary"/>
                                    </IconButton>
                                }
                            />
                        </GridListTile>
                    )
                    )
                    }
                </GridList>
            );
        }else{
            imageListContent = null;
        }

        const actions = [
            <Button label="Close" primary={true} onClick={this.handleClose}/>
        ]

        return (
        <div>
            <div className={classes.imagelistcontent}>
                {imageListContent}
            </div>
            <Dialog
                actions={actions}
                open={this.state.open}
                onClose = {this.handleClose}
                >
                <img src={this.state.currentImg} alt="" style={{width: '100%'}}/>
            </Dialog>
        </div>
        )
  }

       
}

ImageResults.propTypes={
    images: PropTypes.array.isRequired
}

export default withStyles(generatorStyle)(ImageResults);