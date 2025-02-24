import React, {useState} from "react"
function MyComponent () {
    // State Variable
    const [name, setName] = useState("")
    const [age, setAge] = useState(0)

    const updateName = () => {  
        setName("John Doe")
    }

    
    return (
        <>
            <div>
                <p> Name: 
                    <button onClick={updateName}> {name ? name : "Update"}</button> 
                    </p>
                <p> Age: 
                    <button onClick={() => setAge((count) => count + 1) }> {age} </button>
                </p>
            </div>
        </>
    )
}
export default MyComponent