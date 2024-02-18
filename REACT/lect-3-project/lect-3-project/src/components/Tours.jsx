function Tours({tours}){
    return (
        <div>
            <div>
                <h1>Plan with love</h1>
            </div>

            <div>
                {
                   tours.map((tour)=>{
                        return <Card/>
                   })
                }
            </div>
        </div>

    )
}

export default Tours;