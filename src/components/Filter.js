
 const Filter = (props) =>{
const filter = props.filter;
const id=props.id;
console.log("This is Filter tag"+filter.catagory)

    return(
        <div className="flex ">
        <li id={id}>{filter.catagory}</li>
        </div>
    );
}

export default Filter;