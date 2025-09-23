function App() {

  return  <div>
    
    <PostComponent></PostComponent>
    
    </div>
  
}

const style = {width: 200, backgroundColor: "white", borderRadius: 10, borderColor: "gray", borderWidth: 1 }  

function PostComponent() {
  return <div style={style}> 
      <img src={"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fvectors%2Flogo-design-png&psig=AOvVaw2K9z5788oRgdIQe31UQz6G&ust=1758732277435000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLC5vYmt748DFQAAAAAdAAAAABAE"} style={{
        width:20,
        height:20,
        borderRadius:20
      }} />
      <div>
        <b>
          100xdevs
        </b>
      </div>

   </div> 
}

export default App  