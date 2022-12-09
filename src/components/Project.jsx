function Project(props){
    return(
        <>
            <div>
                <img class='mb-[15px] object-cover rounded-[10px]' style={{ width: props.width, height: props.height}} src={props.src} alt="" />
                <label class='font-[14px]'>{props.title}</label> <br />
                <label class='text-projectgrey font-[14px]'>{props.date}</label>
            </div>
        </>
    )
}

export default Project