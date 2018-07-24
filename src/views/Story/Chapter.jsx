import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

//component
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography"

//style
import readStoryStyle from "assets/jss/material-kit-react/views/readStoryStyle.jsx";

class Chapter extends React.Component{
    

    render(){
        const {classes, chapter} = this.props;

        return(
            <div className={classes.chapter}>
                    <Paper className={classes.paper}>
                           <Typography variant="title" align="center"> {chapter}</Typography>
                            <br/>
                            <br/>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, voluptatum! Ipsum est quas soluta sequi harum. Dicta minus, ipsam nam vero unde ipsa numquam sint optio dolores facilis velit eveniet ut commodi qui molestiae hic vitae doloribus ab aliquam, placeat culpa minima. Laboriosam incidunt odit beatae nihil ducimus aperiam facere id! Necessitatibus, libero. Expedita, non ratione blanditiis perspiciatis reprehenderit necessitatibus cum repudiandae aliquam aperiam quisquam vitae? Fuga, ea! Sapiente est, cumque veniam aperiam dolorem velit earum id corporis, perferendis debitis quos, molestias nobis? Assumenda provident illo, minima, eum reprehenderit iste maxime dolorum quisquam culpa ullam modi quam cum vero, quibusdam vitae? Expedita reiciendis vel ut, temporibus rem obcaecati, repellat iste quos perferendis optio facere nihil molestias incidunt maxime similique quidem laudantium nisi culpa praesentium. Dicta quasi necessitatibus mollitia, assumenda quas amet temporibus inventore dolor quia sed unde minus provident nobis dolorem ut placeat optio, ducimus, quis beatae magni eius molestias dolores adipisci expedita. Deleniti fugit aliquam ratione officiis iure sequi nam sunt aut libero exercitationem possimus, quae facere impedit id! Officiis doloremque quae iste consequatur animi molestiae recusandae. Delectus veniam quo, consequuntur autem amet eius odit harum optio, maiores quae neque modi ipsam quibusdam voluptatibus, cum iure? Accusamus delectus numquam tempora vel qui possimus, aspernatur quaerat praesentium. Eius, quae amet. Aperiam eaque illum impedit corrupti libero eos deserunt, ut tempora amet illo saepe consequatur nesciunt nam voluptates. Incidunt rem, vitae dicta cum pariatur eveniet natus voluptate nulla atque nesciunt consequuntur, ullam, nisi odit suscipit sint accusamus amet. Provident voluptatum expedita vel cumque doloribus voluptates sit est fugiat minus qui dicta quia, ex error vero, dolores, rem eum. Cupiditate fuga recusandae suscipit, amet blanditiis, numquam cumque obcaecati quod necessitatibus quam magnam animi velit sunt officia. Repellat dolore beatae asperiores natus fuga animi, sapiente alias fugit doloremque! Sed at qui est iure!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nam officiis eius quas dicta repudiandae dolorum architecto aliquid illum eveniet delectus laudantium exercitationem, sapiente quos, doloribus accusamus veniam libero dolorem porro modi nesciunt. Expedita magnam veniam, sint provident sit necessitatibus illum iusto beatae nesciunt vitae debitis culpa odio, facere, cumque nostrum eius quaerat optio nobis quos. Veritatis, voluptatem obcaecati assumenda doloribus dolore ipsa fugit debitis est deleniti consectetur ratione quaerat nesciunt nihil reprehenderit tempora voluptates atque tempore expedita asperiores ex repellendus. Qui tempora harum amet ullam. Sed voluptatibus eligendi inventore, unde laudantium culpa labore? Similique quia fugit ullam quas error.
                        
                    </Paper>
            </div>
        )
    }
}

export default withStyles(readStoryStyle)(Chapter);